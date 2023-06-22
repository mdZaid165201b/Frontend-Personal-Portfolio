import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {API} from "../../../constants";


let initialState = {
    projects: [],
    loading: false,
    error: null
}

export const createProject = createAsyncThunk("profile/update", async (inputObject, thunkAPI) => {
    try {
        const { data } = await axios.post(`${API}create-project`, inputObject.formData, {
            headers: {
                token: "Bearer " + inputObject.token
            }
        });
        return data;
    } catch (err) {
        console.log(err)
        return thunkAPI.rejectWithValue(err.response.data);
    }
})
export const updateProject = createAsyncThunk("project/update", async (inputObject, thunkAPI) => {
    try{
        const { data } = await axios.put(`${API}update-project/${inputObject.id}`, inputObject.formData, {
            headers: {
                token: "Bearer " + inputObject.token
            }
        })
        return data;
    }
    catch (err) {
        return thunkAPI.rejectWithValue(err.response.data)
    }
})

export const deleteProject = createAsyncThunk("project/delete", async({ id, token }, thunkAPI) => {
    try{
        const { data } = await axios.delete(`${API}delete-project/${id}`, {
            headers: {
                token: "Bearer " + token
            }
        })
        return { data, id }
    }
    catch (err) {
        return thunkAPI.rejectWithValue(err.response.data)
    }
})

export const fetchProjects = createAsyncThunk("projects" ,async(thunkAPI) => {
    try{
        const { data } = await axios.get(`${API}get-projects`);
        const { projects } = data;
        return projects;
    }
    catch (err) {
        return err.response.data;
    }
})


export const projectSlice = createSlice({
    name: "project", initialState,
    reducers: {},
    extraReducers: {
        [fetchProjects.pending]: (state, action) => {
          state.loading = true;
        },
        [fetchProjects.fulfilled]: (state, action) => {
            state.loading = false;
            state.projects =  action.payload;
        },
        [fetchProjects.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [createProject.pending]: (state, action) => {
            state.loading = true
        }, [createProject.fulfilled]: (state, action) => {
            state.loading = false;
            state.projects.push(action.payload.data);
        }, [createProject.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [updateProject.pending] : (state, action) => {
          state.loading = true;
        },
        [updateProject.fulfilled]: (state, action) => {
          state.loading = false;
          const foundIndex = state.projects.findIndex(current => current._id === action.payload.final_response._id)
            if(foundIndex >= 0) {
                state.projects[foundIndex] = action.payload.final_response
            }
        },
        [updateProject.rejected]: (state, action) => {
          state.loading = false;
          state.error = action.payload
        },
        [deleteProject.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteProject.fulfilled]: (state, action) => {
            state.loading = false;
            const updatedProjects = state.projects.filter(current => current._id !== action.payload.id)
            state.projects = updatedProjects
        },
        [deleteProject.rejected]: (state, action) => {
            state.loading = false
        }
    }

})

export default projectSlice.reducer;