import { useDispatch, useSelector } from 'react-redux';
import {verifyClient,clearState} from '../features/login/loginSlice';
import { useNavigate } from 'react-router-dom';

const LoginPage = ()=>
{
    const {userData,validPwd,validUsername} = useSelector((store)=>store.login);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const printWelcome =()=>{
        <div style={{width:'90vw',height:'80vh'}}>
            <div className=" w3-card-4 w3-round-large w3-white w3-display-middle" style={{padding:'20px',width:'30vw'}}>
                <h1 style={{fontWeight:'500'}} className="w3-text-blue">Welcome, {userData.name}!</h1>
                <button className="w3-btn w3-blue w3-card-4 w3-round-large" onClick={() => dispatch(clearState())}>log out</button>
            </div>
        </div>}

    const printForm =()=>
        {
        <div style={{width:'90vw',height:'80vh'}}>
            <div className=" w3-card-4 w3-round-large w3-white w3-display-middle" style={{padding:'20px',width:'30vw'}}>
                <h1 style={{fontWeight:'500'}} className="w3-text-blue">Login</h1>
                <div>
                    <label htmlFor="id" >Username</label><br />
                    <input type="text" id="id" className="w3-round"/> {validUsername?'':<span className="w3-red">Invalid username</span>}
                    <br /><br />
                    <label htmlFor="id">Password</label><br />
                    <input type="password" id="password"  className="w3-round"/>{validPwd?'':<span className="w3-red">Invalid username</span>}
                    <br /><br />
                    <button className="w3-btn w3-blue w3-card-4 w3-round-large" onClick={() => dispatch(verifyClient())} style={{marginRight:"2vw"}}>Log in</button> <button className="w3-btn w3-blue w3-card-4 w3-round-large" onClick={() => navigate('/Register')}>Register</button>
                </div>
            </div>
        </div>}

    return(<>{userData?printWelcome:printForm}</>);
}

export default LoginPage();