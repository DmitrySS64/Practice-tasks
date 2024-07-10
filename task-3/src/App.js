import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import FolderView from './components/Drive/FolderView';
import { useEffect } from 'react';


//Ссылка на API - http://212.113.102.189:7000/
//Ссылка на API документацию - http://212.113.102.189:7000/swagger/doc 


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/drive" element={<FolderView/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
