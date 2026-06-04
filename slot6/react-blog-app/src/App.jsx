// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar.jsx';


import RegistrationForm from './components/RegistrationForm.jsx'; 

import Home from './pages/Home.jsx';
import PostList from './pages/PostList.jsx';
import PostDetail from './pages/PostDetail.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <Routes>
        {/* Trang đăng ký vẫn chạy đầu tiên ở đường dẫn gốc */}
        <Route path='/' element={<RegistrationForm />} />
        <Route path='/home' element={<Home />} />
        <Route path='/posts' element={<PostList />} />
        <Route path='/posts/:id' element={<PostDetail />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;