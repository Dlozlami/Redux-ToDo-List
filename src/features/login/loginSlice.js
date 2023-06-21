import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username:'',
    password:'',
    validPwd:false,
    validUsername:false,
}

const loginSlice = createSlice({
    name:'login',
    initialState,
});

//console.log(loginSlice);

export default loginSlice.reducer;