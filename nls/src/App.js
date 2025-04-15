
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.js';
import SignUp from './pages/Signup.js';
import Dashboard from './pages/Dashboard';
import Test from './pages/sstest';
import Resources from './pages/Resources';
import Stressed from './pages/Stressed';
import Wrapper from './pages/Wrapper.jsx';
import Amtest from './pages/amtest.js';
import GImodTest from './pages/GImodtest.js';
import Recover from './pages/Recover.js';
import PasswordRecovery from './pages/PasswordRecovery.js';
import Admin from './pages/admin.js';
function App() {

  //Available routes within application
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
         <Route index element={<Login />} />
         <Route path="/Signup" element={<SignUp />} />
         <Route path="/Recover" element={<Recover />} />
         <Route path="/PasswordRecovery" element={<PasswordRecovery />} />
         <Route path="/Dashboard" element={<Wrapper><Dashboard /></Wrapper>} />
         <Route path="/Test" element={<Wrapper><Test /></Wrapper>} />
         <Route path="/Resources" element={<Wrapper><Resources /></Wrapper>} />
         <Route path="/Stressed" element={<Wrapper><Stressed /></Wrapper>} />
         <Route path="/AmTest" element={<Wrapper><Amtest /></Wrapper>} />
         <Route path="/GITest" element={<Wrapper><GImodTest /> </Wrapper>} />


         </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
