import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {API} from "../../../constants";
import {authSlice, updateUser} from "../auth/auth";


let initialState = {
    userProfile: null,
    user: null,
    loading: false,
    error: null
}

export const updateProfile = createAsyncThunk("profile/update", async (inputObject, {dispatch}, thunkAPI) => {
    try {
        const { data } = await axios.put(`${API}update-user/${inputObject.uid}`, inputObject.formData, {
            headers: {
                token: "Bearer " + inputObject.token
            }
        });
        dispatch(updateUser(data))
        return data;
    } catch (err) {
        console.log(err)
        return thunkAPI.rejectWithValue(err.response.data);
    }
})
export const findUser = createAsyncThunk("user/find", async(thunkAPI) => {
    try{
        const {data} = await axios.get(`${API}user-info`);
        return data;
    }
    catch(err) {
        return thunkAPI.rejectWithValue(err.response.data);
    }
})

export const profileSlice = createSlice({
    name: "profile", initialState,
    reducers: {
        logoutProfile: (state, action) => {
            state.loading = false;
            state.userProfile = null;
            state.error = null
        },
        setUser: (state, action) => {
          state.user = action.payload
        }
    },
    extraReducers: {
        [updateProfile.pending]: (state, action) => {
            state.loading = true
        }, [updateProfile.fulfilled]: (state, action) => {
            state.loading = false;
            state.userProfile = action.payload;
        }, [updateProfile.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [findUser.pending]: (state, action ) => {
            state.loading = true;
        },
        [findUser.fulfilled]: (state, action) => {
          state.loading = false;
          state.user = action.payload.user;
        },
        [findUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
    }

})
export const { setUser } = authSlice.actions;
export default profileSlice.reducer;