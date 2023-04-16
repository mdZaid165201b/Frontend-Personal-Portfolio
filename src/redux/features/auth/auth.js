import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {API} from "../../../constants";


const initialState = {
    token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
    id: null,
    user: null,
    loading: false,
    error: null
}

export const registerUser = createAsyncThunk("user/register", async ({firstName, lastName, email, password}) => {
    try {
        const {data} = await axios.post(`${API}register`, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        });
        console.log(data)
        return data;
    } catch (err) {
        console.log(err)
    }
})

export const loginUser = createAsyncThunk("user/login", async ({email, password}, thunkAPI) => {
    try {
        const {data} = await axios.post(`${API}login`, {
            email,
            password
        });
        return data;
    } catch (err) {
        // console.log("login error : ",err.response.data)
        return thunkAPI.rejectWithValue(err.response.data)
    }
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: () => {
            localStorage.removeItem("token");
            initialState.token = null;
            initialState.id = null;
            initialState.user = null;
            initialState.loading = null;
            initialState.error = null;
        }
    },
    extraReducers: {
        [registerUser.pending]: (state, action) => {
            state.loading = true
        },
        [registerUser.fulfilled]: (state, action) => {
            state.loading = false
        },
        [loginUser.pending]: (state, action) => {
            state.loading = true;
        },
        [loginUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.token = action.payload.token;

            localStorage.setItem("token", JSON.stringify(action.payload.token))
            state.error = null;
            state.user = action.payload;
        },
        [loginUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        }

    }

})

export default authSlice.reducer;