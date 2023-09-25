import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { axiosConfig } from "../utils/axiosConfig";
import { baseUrl } from "../utils/BaseUrl";
const initialState = {
    success: false,
    user: {}
}

export const RegisterApi = createAsyncThunk("RegisterApi", async (payload) => {
    const res = await axios.post(`${baseUrl}user/register`, payload)
    console.log(res);
    return res.data;
});

export const LoginApi = createAsyncThunk("LoginApi", async (payload) => {
    const res = await axios.post(`${baseUrl}user/login`, payload);
    localStorage.setItem('token', res.data.token)
    console.log(res.data)
    return res.data;
})

export const VerifyApi = createAsyncThunk("VerifyApi", async () => {
    const res = await axios.post(`${baseUrl}user/verify`,{}, axiosConfig);
    return res.data;
})





export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(RegisterApi.fulfilled, (state, action) => {
                state.success = true;
            })
            .addCase(LoginApi.fulfilled, (state, action) => {
                if (action.payload._id) {
                    toast.success('success');
                    window.location.href='/register';
                }
            })
            .addCase(LoginApi.rejected, (state, action) => {
                console.log(action)
            })
            .addCase(VerifyApi.fulfilled, (state, action) => {
               state.user=action.payload
            })
    }
})

export default authSlice.reducer