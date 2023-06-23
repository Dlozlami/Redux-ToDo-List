export default function Home(){
    return(
        <div style={{color:'white',alignItems:'center',height:'85vh', width:'90vw',justifyContent:'space-around',display:'flex'}}>
            <div style={{alignItems:'center',display:'flex',flexDirection:'column'}}>
                <h1 style={{fontWeight:'500',fontSize:'4em'}}>ToDoLista<span id="redux">-Redux</span></h1><br/>
                <hr></hr>
                <p>Welcome to Todolista. Now with Reduxjs/Toolkit. Never miss an important task.</p>
                <p>We will keep you on track with your goals.</p>
            </div>
        </div>
    );
}