import axios from "axios";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector} from 'react-redux';


const initialState = {
  taskAdded:false,
  taskUpdated:false,
  taskRemoved:false,
}

export const updateList = createAsyncThunk(
  'myList/updateList',
  async (newList, thunkAPI) => {
    const {userData} = useSelector((store)=>store.login);
    const url = 'http://localhost:4000/accounts/'+userData.id;
    console.log("newList");
    try {
      await axios.patch(url, newList);
      thunkAPI.dispatch(setTaskUpdatedTemporary(true));
      setTimeout(() => {
        thunkAPI.dispatch(setTaskUpdatedTemporary(false));
      }, 10000); // 10 seconds delay
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const addToList = createAsyncThunk(
  'myList/addToList',
  async (newList, thunkAPI) => {
    const {userData} = useSelector((store)=>store.login);
    const url = 'http://localhost:4000/accounts/'+userData.id;
    console.log(newList);
    try {
      await axios.patch(url, newList);
      thunkAPI.dispatch(setTaskAddedTemporary(true));
      setTimeout(() => {
        thunkAPI.dispatch(setTaskAddedTemporary(false));
      }, 10000); // 10 seconds delay
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const remove = createAsyncThunk(
  'myList/remove',
  async (newList, thunkAPI) => {
    const {userData} = useSelector((store)=>store.login);
    const url = 'http://localhost:4000/accounts/'+userData.id;
    console.log(newList);
    try {
      await axios.patch(url, newList);
      thunkAPI.dispatch(setTaskRemovedTemporary(true));
      setTimeout(() => {
        thunkAPI.dispatch(setTaskRemovedTemporary(false));
      }, 10000); // 10 seconds delay
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);


const myListSlice = createSlice({
    name:'myList',
    initialState,
    reducers:{
      setDeadline : (state,{payload})=>
      {
            let deadline = new Date(payload).getTime();
            let today = new Date().getTime();
      
            return(
                today<deadline?<div style={{width:"20vw",paddingLeft:'1vw'}}>{payload}</div>:<div style={{width:"20vw",paddingLeft:'1vw',backgroundColor:'lightpink',color:'red'}}>Expired</div>
            );
      },
      
      setPriority:(state,{payload})=>
      {
          if(payload==='Low'){
              return(
                  <div className='w3-green' style={{width:"15vw",paddingLeft:'1vw'}}>Low</div>
              );
          }
          if(payload==='Medium'){
              return(
                  <div className='w3-orange' style={{width:"15vw",paddingLeft:'1vw'}}>Medium</div>
              );
          }
          if(payload==='High'){
              return(
                  <div className='w3-red' style={{width:"15vw",paddingLeft:'1vw'}}>High</div>
              );
          }
      },
      
      setStatus:(state,{payload})=>
      {
          if(payload==='Pending'){
              return(
                  <div className='w3-gray' style={{width:"10vw",color:'darkgray',paddingLeft:'1vw'}}>Pending</div>
              );
          }
          if(payload==='Complete'){
              return(
                  <div className='w3-blue' style={{width:"10vw",paddingLeft:'1vw'}}>Complete</div>
              );
          }
      },
      
      setTaskAddedTemporary: (state, { payload }) => {
        state.taskAdded = payload;
      },
        
      setTaskUpdatedTemporary: (state, { payload }) => {
        state.taskAdded = payload;
      },
        
      setTaskRemovedTemporary: (state, { payload }) => {
        state.taskAdded = payload;
      },
    }
});

//console.log(loginSlice);

export const {update,setDeadline,setPriority,setStatus,generateRandomString,setTaskRemovedTemporary,setTaskAddedTemporary,setTaskUpdatedTemporary} = myListSlice.actions;
export default myListSlice.reducer;