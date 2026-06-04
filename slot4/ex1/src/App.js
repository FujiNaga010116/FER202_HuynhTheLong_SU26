import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PizzaList from "./components/PizzaList";
import Footer from "./components/Footer";
import MyCarousel from './components/MyCarousel';
import MyNavbar from './components/MyNavbar';

function App() {
  return (
    
    <>
        <MyNavbar/>
        <MyCarousel/>
      
      {/* 1. Tiêu đề ứng dụng */}
      <div className="bg-light py-4 border-b">
        <h1 className="text-center fw-bold m-0">Welcome to My Pizza App</h1>
      </div>

      {/* 2. Danh sách 10 món Pizza hiển thị ở giữa trang */}
      <main style={{ paddingBottom: '350px' }}> 
        <PizzaList />
      </main>

      {/* 3. Phần Footer chứa thông tin Profile của bạn nằm cố định ở đáy trang */}
      <Footer />
    </>
  );
}

export default App;