import Header from './components/header';
import './App.css';
//import {Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
