/*import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {checkUsername,add,checkEmail} from '../features/register/registerSlice'*/

const RegisterPage = ()=>
{
    /*const {userData,validPwd,validUsername} = useSelector((store)=>store.login);
    const {userAdded,isRegisterBtnShowing} = useSelector((store)=>store.register);
    const dispatch = useDispatch();

    return (
        <div className="regContainer">
            <div className="formStyles w3-round-large  w3-card-4" >
              <h1 style={{fontWeight:'500'}} className="w3-text-blue">Registration</h1>
              <div style={{display:'flex'}}>
                <div style={{marginRight:'2vw'}}>
                  <label htmlFor="id">Username</label><br />
                  <input type="text" id="id" onChange={() => dispatch(checkUsername)}/>
                  <br /><span className="w3-text-red" id="invalidUser" style={{display:'none'}}>* This username already exists.</span><br />
                  <label htmlFor="name">Name</label><br />
                  <input type="text" id="name" />
                  <br /><br />
                  <label htmlFor="email">Email</label><br />
                  <input type="email" id="email" onChange={() => dispatch(checkEmail)}/>
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
              {isRegisterBtnShowing?<button className="w3-btn w3-blue w3-card-4 w3-round-large"  onClick={() => dispatch(add)} >Register</button>:<button className="w3-btn w3-blue w3-card-4 w3-round-large"  onClick={add} disabled>Register</button> }
            </div>
            {userAdded?<div className="w3-panel w3-green w3-round-small">'You have registered successfully!'</div>:''}
        </div>
      );*/
}

export default RegisterPage();