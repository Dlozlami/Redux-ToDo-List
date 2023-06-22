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
        axios.get("http://localhost:4000/accounts/"+payload.)
            .then(function (result) {
            if(result.data.password===){
                state.validPwd=true;
                state.userData.id=result.data.id;
                state.userData.password=result.data.password;
                state.userData.name=result.data.name;
                state.userData.surname=result.data.surname;
                state.userData.email=result.data.email;
                state.userData.phone=result.data.phone;
                state.userData.list=result.data.list;
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
});

//console.log(loginSlice);

export const {verifyClient} = loginSlice.actions;
export default loginSlice.reducer;