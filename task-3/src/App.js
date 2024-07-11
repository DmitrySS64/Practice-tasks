import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import FolderView from './components/Drive/FolderView';
import { ModalProvider } from './components/Drive/modal/ModalContext';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/drive" element={<ModalProvider><FolderView/></ModalProvider>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
