import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect,useState} from 'react';
import {addToList,updateList,remove}  from '../features/myList/myListSlice';


export default function MyListPage()
{
    const {userData} = useSelector((store)=>store.login);
    const {taskAdded} = useSelector((store)=>store.myList);
    const dispatch = useDispatch();
    const [isUpdating, setIsUpdating] = useState(false);
    const [inputValues, setInputValues] = useState({
        id: "",
        password: "",
        name: "",
        surname: "",
        email: "",
        phone: "",
        list: []
      });
  
      const getData = () => {
            axios.get("http://localhost:4000/accounts/" + userData.id)
              .then(function (result) {
                  console.log(inputValues.list);
                setInputValues(result.data);
              })
              .catch(function (error) {
                console.log(error);
              });
      }
  
      useEffect(() => {
          getData();
          // eslint-disable-next-line
      }, []);
 
    const newTask = () => {
        const newItem = {
          "id": generateRandomString(),
          "task": document.getElementById("task").value,
          "priority": document.getElementById("priority").value,
          "deadline": document.getElementById("deadline").value,
          "status":"Pending"
        };
    
        const newList = [...inputValues.list, newItem];
        console.log(newList)
        dispatch(addToList(newList));
    };    

    const updatedList = () => {
        
    const newItem = {
        "id": document.getElementById("idU").value,
        "task": document.getElementById("taskU").value,
        "priority": document.getElementById("priorityU").value,
        "deadline": document.getElementById("deadlineU").value,
        "status": document.getElementById("statusU").value
        };

        let list = [...inputValues.list];
        list = list.filter((tasks) => tasks.id !== newItem.id); 
        console.log(newItem)
        dispatch(updateList(list));
    };

    const update =(listItem) => {
        setIsUpdating(true);
    
        document.getElementById("idU").value = listItem.id;
        document.getElementById("idU").readOnly = true;
        document.getElementById("taskU").value = listItem.task;
        document.getElementById("priorityU").value = listItem.priority;
        document.getElementById("deadlineU").value = listItem.deadline;
        document.getElementById("statusU").value = listItem.status;
    }

    useEffect(() => {
        if (taskAdded) {
          document.getElementById("task").value = '';
          document.getElementById("priority").value = '';
          document.getElementById("deadline").value = '';
        }
      }, [taskAdded]);
    
    return(<>
        <div id='mainDiv' className='mylistContainer'>
            <div className='listBox w3-round-large w3-white w3-card-4'>
                <h1 style={{fontWeight:'500'}} className="w3-text-blue">To Do List</h1>
                <div className='listFormat w3-large'>
                    <div style={{width:"20vw",backgroundColor:'gray',padding:'1vw'}}>Deadline</div>
                    <div style={{width:"45vw",backgroundColor:'gray',padding:'1vw'}}>Task</div>
                    <div style={{width:"15vw",backgroundColor:'gray',padding:'1vw'}}>Priority</div>
                    <div style={{width:"10vw",backgroundColor:'gray',padding:'1vw'}}>Status</div>
                    <div style={{width:"10vw",backgroundColor:'gray',padding:'1vw'}}>Edit</div>
                </div>
                
                <div>
                    {inputValues.list.length?inputValues.list.map((items)=>(
                        <div id='taskItems' key={items.id} className='taskItems'>
                            {setDeadline(items.deadline)}
                            <div style={{width:"45vw",paddingLeft:'1vw'}}>{items.task}</div>
                            {setPriority(items.priority)}
                            {setStatus(items.status)}
                            <div style={{width:"10vw",display:'flex',justifyContent:'space-evenly'}}>
                                <button style={{fontSize:'large',marginRight:'1vw',border:'none'}} onClick={() => update(items)}>&#9998;</button>
                                <button style={{fontSize:'x-large',marginRight:'1vw',border:'none'}} onClick={() => dispatch(remove(items.id))}>&#128465;</button>
                            </div>
                        </div>
                    ))
                    :
                    <div>
                        No list items.<br/>
                    </div>
                    }
                </div>
            </div>
            
            <div className='listBox w3-round-large w3-white w3-card-4'>
                
                <div style={isUpdating?{display:'block',backgroundColor:'palegreen'}:{display:'none'}}>
                <h1 style={{fontWeight:'500'}} className="w3-text-blue">Update this task</h1>
                    <label htmlFor="idU">Item serial key</label><br />
                    <input type="text" id="idU" name="idU"/><br /><br />
                    <label htmlFor="taskU">Task</label><br />
                    <input type="text" id="taskU" name="taskU" /><br /><br />
                    <label htmlFor="priorityU">Priority</label><br />
                    <select name='priorityU' id='priorityU' >
                        <option value='Low'>Low</option>
                        <option value='Medium'>Medium</option>
                        <option value='High'>High</option>
                    </select>    
                    <br /><br />
                    <label htmlFor="deadlineU">Deadline</label><br />
                    <input type="date" id="deadlineU" required/><br /><br />
                    <label htmlFor="statusU">Status</label><br />
                    <select name='statusU' id='statusU'>
                        <option value='Pending'>Pending</option>
                        <option value='Complete'>Complete</option>
                    </select><br /><br />
                    <button className="w3-btn w3-blue w3-card-4 w3-round-large" onClick={updatedList}>Update</button><br /><br />
                </div>

                <div style={!isUpdating?{display:'block'}:{display:'none'}}>
                <h1 style={{fontWeight:'500'}} className="w3-text-blue">Add tasks to the list</h1>
                    <label htmlFor="task">Task</label><br />
                    <input type="text" id="task" name="task"/><br /><br />
                    <label htmlFor="priority">Priority</label><br />
                    <select name='priority' id='priority'>
                        <option value='Low'>Low</option>
                        <option value='Medium'>Medium</option>
                        <option value='High'>High</option>
                    </select>    
                    <br /><br />
                    <label htmlFor="deadline">Deadline</label><br />
                    <input type="date" id="deadline"/><br /><br />   
                    <button className="w3-btn w3-blue w3-card-4 w3-round-large" onClick={newTask}>Add to list</button><br /><br />
                </div>
            </div>
        </div>
        </>);
}

function generateRandomString(){
    const characters = '0123456789';
    let randomString = '';
  
    for (let i = 0; i < 7; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters[randomIndex];
    }
    
    return randomString;
}

    function setDeadline(dl)
      {
            let deadline = new Date(dl).getTime();
            let today = new Date().getTime();
      
            return(
                today<deadline?<div style={{width:"20vw",paddingLeft:'1vw'}}>{dl}</div>:<div style={{width:"20vw",paddingLeft:'1vw',backgroundColor:'lightpink',color:'red'}}>Expired</div>
            );
      }
      
      function setPriority(priority)
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
      }
      
      function setStatus(status)
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
      }