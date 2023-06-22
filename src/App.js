import Home from './components/home';
import Header from './components/header';
import Login from './components/loginPage';
//import MyList from './components/myListPage';
import NoPage from './components/noPage';
import Register from './components/registerPage';

import './App.css';
import { Routes, Route } from 'react-router-dom';
//import { useSelector } from 'react-redux';



function App() {
 // const {userData} = useSelector((store)=>store.login);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />}/>
          <Route path="Register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}
/*
          <Route path="ToDoList" element={
            userData?
            <MyList  />
            :
            <Navigate to="/"/>
          } /> */
export default App;
