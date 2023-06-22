import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userAdded:false,
    isRegisterBtnShowing:false,
}

const registerSlice = createSlice({
    name:'register',
    initialState,
    checkUsername : (state,{payload})=>{

    axios.get("http://localhost:4000/accounts/"+payload.target.value)
      .then(function (response) {
        setIsRegisterBtnShowing(false);
        let username = (event.target.value).split(' ');
        username[0]?document.getElementById("invalidUser").style.display="inline":document.getElementById("invalidUser").style.display="none";
        console.log(response);
      })
      .catch(function (error) {
        setIsRegisterBtnShowing(true);
        document.getElementById("invalidUser").style.display="none";
        console.log(error);
      });
  },

  checkEmail : (event)=>{
    let email = (event.target.value).split(' ')[0];
    // eslint-disable-next-line
    var newRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    email.match(newRegex)?document.getElementById("invalidEmail").style.display="none":document.getElementById("invalidEmail").style.display="inline";
  },

add : () => {
    setIsRegisterBtnShowing(false);
    const updatedInputValues = {
      id:document.getElementById("id").value,
      password: document.getElementById("password").value,
      name: document.getElementById("name").value,
      surname: document.getElementById("surname").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      list:[]
    };

    setInputValues(updatedInputValues);

    axios.post("http://localhost:4000/accounts", updatedInputValues)
      .then(function (response) {
        console.log(response);
        setUserAdded(true);
        document.getElementById("id").value ="";
        document.getElementById("password").value ="";
        document.getElementById("name").value ="";
        document.getElementById("surname").value ="";
        document.getElementById("email").value ="";
        document.getElementById("phone").value ="";
        setIsRegisterBtnShowing(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

})

//console.log(registerSlice);

export const {checkUsername,add,checkEmail} = registerSlice.actions;
export default registerSlice.reducer;