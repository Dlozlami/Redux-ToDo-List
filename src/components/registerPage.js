import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../features/register/registerSlice';
import axios from "axios";

export default function RegisterPage()
{
    const [isRegisterBtnShowing,setIsRegisterBtnShowing] = useState(false);
    const {userAdded} = useSelector((store)=>store.register);
    const dispatch = useDispatch();
    
    const checkUsername = (event)=>{
      axios.get("http://localhost:4000/accounts/"+event.target.value)
        .then(function (response) {
          setIsRegisterBtnShowing(false);
          document.getElementById("invalidUser").style.display="inline";
          console.log(response);
        })
        .catch(function (error) {
          setIsRegisterBtnShowing(true);
          document.getElementById("invalidUser").style.display="none";
          console.log(error);
        });
    }

    const newUser = () => {
      setIsRegisterBtnShowing(false);
      const updatedInputValues = {
        id:document.getElementById("id").value,
        password: document.getElementById("password").value,
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        list:[]
      }
      return(updatedInputValues);
    }

    const checkEmail = (event)=>{
      let email = (event.target.value).split(' ')[0];
      // eslint-disable-next-line
      var newRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      email.match(newRegex)?document.getElementById("invalidEmail").style.display="none":document.getElementById("invalidEmail").style.display="inline";
    }

    if(userAdded) {
      const inputElements = document.querySelectorAll('input');
      
      inputElements.forEach((input) => {
        if (input.type !== 'submit' && input.type !== 'button') {
          input.value = '';
        }
      });
    }

    return (
        <div className="regContainer">
            <div className="formStyles w3-round-large  w3-card-4" >
              <h1 style={{fontWeight:'500'}} className="w3-text-blue">Registration</h1>
              <div style={{display:'flex'}}>
                <div style={{marginRight:'2vw'}}>
                  <label htmlFor="id">Username</label><br />
                  <input type="text" id="id" onChange={(e) => checkUsername(e)}/>
                  <br /><span className="w3-text-red" id="invalidUser" style={{display:'none'}}>* This username already exists.</span><br />
                  <label htmlFor="name">Name</label><br />
                  <input type="text" id="name" />
                  <br /><br />
                  <label htmlFor="email">Email</label><br />
                  <input type="email" id="email" onChange={(e) => checkEmail(e)}/>
                  <br /><span className="w3-text-red" id="invalidEmail" style={{display:'none'}}>* This is not a valid email address.</span><br />
                </div>
                <div>
                  <label htmlFor="id">Password</label><br />
                  <input type="password" id="password" />
                  <br /><br />
                  <label htmlFor="surname">Surname</label><br />
                  <input type="text" id="surname" />
                  <br /><br />
                  <label htmlFor="phone">Phone</label><br />
                  <input type="text" id="phone" />
                  <br /><br />
                </div>
              </div>
              {isRegisterBtnShowing?<button className="w3-btn w3-blue w3-card-4 w3-round-large"  onClick={() => dispatch(addUser(newUser()))} >Register</button>:<button className="w3-btn w3-blue w3-card-4 w3-round-large"   onClick={() => dispatch(addUser)}  disabled>Register</button> }<br/><br/>
              {userAdded?<div className="w3-panel w3-green w3-round-small">'You have registered successfully!'</div>:''}<br />
            </div>
        </div>
      );
}