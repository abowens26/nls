import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.js';
import SignUp from './pages/Signup.js';
import Dashboard from './pages/Dashboard';
import Test from './pages/sstest';
import Resources from './pages/Resources';
import Stressed from './pages/Stressed';
import Wrapper from './pages/Wrapper.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
         <Route index element={<Login />} />
         <Route path="/Signup" element={<SignUp />} />
         <Route path="/Dashboard" element={<Wrapper><Dashboard /></Wrapper>} />
         <Route path="/Test" element={<Wrapper><Test /></Wrapper>} />
         <Route path="/Resources" element={<Wrapper><Resources /></Wrapper>} />
         <Route path="/Stressed" element={<Wrapper><Stressed /></Wrapper>} />
         


         </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
