import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username:'',
    password:'',
    validPwd:false,
    validUsername:false,
}

const loginSlice = createSlice({
    name:'',
    initialState,
});

export default loginSlice.reducer;