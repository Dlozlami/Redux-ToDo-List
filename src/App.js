import Header from './components/header';
import Login from './components/loginPage'
import Home from './pages/home'
import './App.css';
import {Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home/>} />
          <Route path="Login" element={<Login/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
