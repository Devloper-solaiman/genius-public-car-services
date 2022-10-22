import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
