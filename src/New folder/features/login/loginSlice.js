import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData:{
        id: "",
        password: "",
        name: "",
        surname: "",
        email: "",
        phone: "",
        list: []
      },
    validPwd:true,
    validUsername:true,

}

const loginSlice = createSlice({
    name:'login',
    initialState,
    verifyClient:(state,{payload})=>{
        axios.get("http://localhost:4000/accounts/"+payload.id)
            .then(function (result) {
            if(result.data.password===payload.password){
                state.validPwd=true;
                state.userData=result.data;
            }
            else{
                state.validPwd=false;
            }
        })
          .catch(function (error) {
            console.log(error);
            state.validUsername=false;
          });
    },
    clearState: (state)=>{
        state.userData = {
            id: "",
            password: "",
            name: "",
            surname: "",
            email: "",
            phone: "",
            list: []
          };
    },
    
});

//console.log(loginSlice);

export const {verifyClient,clearState} = loginSlice.actions;
export default loginSlice.reducer;