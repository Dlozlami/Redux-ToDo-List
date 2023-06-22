import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    taskList: []
}

const myListSlice = createSlice({
    name:'myList',
    initialState,
    getData : (state) => {
        axios.get("http://localhost:4000/accounts/" + user.id)
          .then(function (result) {
              console.log(inputValues.list);
            setInputValues(result.data);
          })
          .catch(function (error) {
            console.log(error);
          });
  },

  addToList : (state,{payload}) => {
      const newItem = {
        "id": generateRandomString(),
        "task": document.getElementById("task").value,
        "priority": document.getElementById("priority").value,
        "deadline": document.getElementById("deadline").value,
        "status":"Pending"
      };
  
      const newList = [...inputValues.list, newItem];
      
      axios.patch("http://localhost:4000/accounts/" + user.id, { list: newList })
        .then(response => {
          console.log(response.data);
          document.getElementById("task").value = null;
          document.getElementById("priority").value = null;
          document.getElementById("deadline").value = null;
        })
        .catch(error => console.error(error));
  
      setInputValues(prevState => ({ ...prevState, list: newList }));
  },

  updateList : (state,{payload}) => {
    const newItem = {
      "id": document.getElementById("idU").value,
      "task": document.getElementById("taskU").value,
      "priority": document.getElementById("priorityU").value,
      "deadline": document.getElementById("deadlineU").value,
      "status": document.getElementById("statusU").value
    };

    let list = [...inputValues.list];
    list = list.filter((tasks) => tasks.id !== newItem.id); 

    const newList = [...list, newItem];

    axios.patch("http://localhost:4000/accounts/" + user.id, { list: newList })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.error(error));
      
      setInputValues(prevState => ({ ...prevState, list: newList }));
      setIsUpdating(false);
  },

  remove : (state,{payload}) => {
      let newList = [...inputValues.list];
      newList = newList.filter((tasks) => tasks.id !== listItem); 

      axios.patch("http://localhost:4000/accounts/" + user.id, { list: newList })
          .then(response => {
          console.log(response.data);
      })
      .catch(error => console.error(error));
      setInputValues(prevState => ({ ...prevState, list: newList }));
  },

  update : (state,{payload}) => {
    setIsUpdating(true);
    setUpdateItem({
      id: listItem.id,
      task: listItem.task,
      priority: listItem.priority,
      deadline: listItem.deadline,
      status: listItem.status,
    });

    document.getElementById("idU").value = listItem.id;
    document.getElementById("idU").readOnly = true;
    document.getElementById("taskU").value = listItem.task;
    document.getElementById("priorityU").value = listItem.priority;
    document.getElementById("deadlineU").value = listItem.deadline;
    document.getElementById("statusU").value = listItem.status;
  },

setDeadline : (state,{payload})=>
{
      let deadline = new Date(taskDate).getTime();
      let today = new Date().getTime();

      return(
          today<deadline?<div style={{width:"20vw",paddingLeft:'1vw'}}>{taskDate}</div>:<div style={{width:"20vw",paddingLeft:'1vw',backgroundColor:'lightpink',color:'red'}}>Expired</div>
      );
  },

setPriority:(state,{payload})=>
{
    if(priority==='Low'){
        return(
            <div className='w3-green' style={{width:"15vw",paddingLeft:'1vw'}}>Low</div>
        );
    }
    if(priority==='Medium'){
        return(
            <div className='w3-orange' style={{width:"15vw",paddingLeft:'1vw'}}>Medium</div>
        );
    }
    if(priority==='High'){
        return(
            <div className='w3-red' style={{width:"15vw",paddingLeft:'1vw'}}>High</div>
        );
    }
},


setStatus:(state,{payload})=>
{
    if(status==='Pending'){
        return(
            <div className='w3-gray' style={{width:"10vw",color:'darkgray',paddingLeft:'1vw'}}>Pending</div>
        );
    }
    if(status==='Complete'){
        return(
            <div className='w3-blue' style={{width:"10vw",paddingLeft:'1vw'}}>Complete</div>
        );
    }
},


generateRandomString:()=>{
    const characters = '0123456789';
    let randomString = '';
  
    for (let i = 0; i < 7; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters[randomIndex];
    }
    
    return randomString;
},
  
});

//console.log(loginSlice);

export const {getData,addToList,updateList,remove,update,setDeadline,setPriority,setStatus,generateRandomString} = myListSlice.actions;
export default myListSlice.reducer;