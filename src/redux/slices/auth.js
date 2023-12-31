import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params) => {
    const { data } = await axios.post('/users/token/', params);
    return data;
})
export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
    const { data } = await axios.get('/users/me/');
    return data;
})
export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params) => {
    const { data } = await axios.post('/users/new/', params);
    return data;
})
export const fetchTokenRefresh = createAsyncThunk('auth/fetchTokenRefresh', async (params) => {
    const { data } = await axios.post('/users/token/refresh/', params);
    return data;
})

const initialState = {
    data: null,
    status: 'loading'
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuth.pending, (state) => {
                state.status = 'loading';
                state.data = null
            })
            .addCase(fetchAuth.fulfilled, (state, action) => {
                state.status = 'loaded';
                state.data = action.payload
            })
            .addCase(fetchAuth.rejected, (state) => {
                state.status = 'error';
                state.data = null
            })
            
            .addCase(fetchAuthMe.pending, (state) => {
                state.status = 'loading';
                state.data = null
            })
            .addCase(fetchAuthMe.fulfilled, (state, action) => {
                state.status = 'loaded';
                state.data = action.payload
            })
            .addCase(fetchAuthMe.rejected, (state) => {
                state.status = 'error';
                state.data = null
            })

            .addCase(fetchRegister.pending, (state) => {
                state.status = 'loading';
                state.data = null
            })
            .addCase(fetchRegister.fulfilled, (state, action) => {
                state.status = 'loaded';
                state.data = action.payload
            })
            .addCase(fetchRegister.rejected, (state) => {
                state.status = 'error';
                state.data = null
            })

            .addCase(fetchTokenRefresh.pending, (state) => {
                state.status = 'loading';
                state.data = null
            })
            .addCase(fetchTokenRefresh.fulfilled, (state, action) => {
                state.status = 'loaded';
                state.data = action.payload
            })
            .addCase(fetchTokenRefresh.rejected, (state) => {
                state.status = 'error';
                state.data = null
            })
    },
});
export const selectIsAuth = (state) => Boolean(state.data)

export const { reducer: authReducer } = authSlice;
export const { logout } = authSlice.actions;