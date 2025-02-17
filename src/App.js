import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookingCar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> {/* Wrap all Route components inside Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/bookingcar" element={<BookingCar />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;

//3mIKg9G3xpd4m75U
//ishansthsr

