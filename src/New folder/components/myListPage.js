//import { useDispatch, useSelector } from 'react-redux';
//import { useState } from 'react';
//import {addToList,updateList,remove,update,setDeadline,setPriority,setStatus}  from '../features/myList/myListSlice';


const MyListPage = ()=>
{
    // const {userData,validPwd,validUsername} = useSelector((store)=>store.login);
    // const dispatch = useDispatch();
    // const [isUpdating, setIsUpdating] = useState(false);

    // return(<>
    //     <div id='mainDiv' className='mylistContainer'>
    //         <div className='listBox w3-round-large w3-white w3-card-4'>
    //             <h1 style={{fontWeight:'500'}} className="w3-text-blue">To Do List</h1>
    //             <div className='listFormat w3-large'>
    //                 <div style={{width:"20vw",backgroundColor:'gray',padding:'1vw'}}>Deadline</div>
    //                 <div style={{width:"45vw",backgroundColor:'gray',padding:'1vw'}}>Task</div>
    //                 <div style={{width:"15vw",backgroundColor:'gray',padding:'1vw'}}>Priority</div>
    //                 <div style={{width:"10vw",backgroundColor:'gray',padding:'1vw'}}>Status</div>
    //                 <div style={{width:"10vw",backgroundColor:'gray',padding:'1vw'}}>Edit</div>
    //             </div>
                
    //             <div>
    //                 {userData.list.length?userData.list.map((items)=>(
    //                     <div id='taskItems' key={items.id} className='taskItems'>
    //                         {dispatch(setDeadline(items.deadline))}
    //                         <div style={{width:"45vw",paddingLeft:'1vw'}}>{items.task}</div>
    //                         {dispatch(setPriority(items.priority))}
    //                         {dispatch(setStatus(items.status))}
    //                         <div style={{width:"10vw",display:'flex',justifyContent:'space-evenly'}}>
    //                             <button style={{fontSize:'large',marginRight:'1vw',border:'none'}} onClick={() => dispatch(update(items))}>&#9998;</button>
    //                             <button style={{fontSize:'x-large',marginRight:'1vw',border:'none'}} onClick={() => dispatch(remove(items.id))}>&#128465;</button>
    //                         </div>
    //                     </div>
    //                 ))
    //                 :
    //                 <div>
    //                     No list items.<br/>
    //                 </div>
    //                 }
    //             </div>
    //         </div>
            
    //         <div className='listBox w3-round-large w3-white w3-card-4'>
                
    //             <div style={isUpdating?{display:'block',backgroundColor:'palegreen'}:{display:'none'}}>
    //             <h1 style={{fontWeight:'500'}} className="w3-text-blue">Update this task</h1>
    //                 <label htmlFor="idU">Item serial key</label><br />
    //                 <input type="text" id="idU" name="idU"/><br /><br />
    //                 <label htmlFor="taskU">Task</label><br />
    //                 <input type="text" id="taskU" name="taskU" /><br /><br />
    //                 <label htmlFor="priorityU">Priority</label><br />
    //                 <select name='priorityU' id='priorityU' >
    //                     <option value='Low'>Low</option>
    //                     <option value='Medium'>Medium</option>
    //                     <option value='High'>High</option>
    //                 </select>    
    //                 <br /><br />
    //                 <label htmlFor="deadlineU">Deadline</label><br />
    //                 <input type="date" id="deadlineU" required/><br /><br />
    //                 <label htmlFor="statusU">Status</label><br />
    //                 <select name='statusU' id='statusU'>
    //                     <option value='Pending'>Pending</option>
    //                     <option value='Complete'>Complete</option>
    //                 </select><br /><br />
    //                 <button className="w3-btn w3-blue w3-card-4 w3-round-large" onClick={dispatch(updateList)}>Update</button><br /><br />
    //             </div>

    //             <div style={!isUpdating?{display:'block'}:{display:'none'}}>
    //             <h1 style={{fontWeight:'500'}} className="w3-text-blue">Add tasks to the list</h1>
    //                 <label htmlFor="task">Task</label><br />
    //                 <input type="text" id="task" name="task"/><br /><br />
    //                 <label htmlFor="priority">Priority</label><br />
    //                 <select name='priority' id='priority'>
    //                     <option value='Low'>Low</option>
    //                     <option value='Medium'>Medium</option>
    //                     <option value='High'>High</option>
    //                 </select>    
    //                 <br /><br />
    //                 <label htmlFor="deadline">Deadline</label><br />
    //                 <input type="date" id="deadline"/><br /><br />   
    //                 <button className="w3-btn w3-blue w3-card-4 w3-round-large" onClick={dispatch(addToList)}>Add to list</button><br /><br />
    //             </div>
    //         </div>
    //     </div>
    //     </>);
}

export default MyListPage();