
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
import Landing from './pages/Landing.js';
import GiMod from './pages/GImod.js';
import AmMod from './pages/AMmod.js';
import SSmod from './pages/SSmod.js';
import GIModContent from './pages/GImodcontent.js';
import SSModContent from './pages/SSmodcontent.js';
import AMModContent from './pages/AMmodcontent.js';
import GIModIntro from './pages/GIModIntro.js';
function App() {

  //Available routes within application
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
         <Route index element={<Landing />} />
         <Route path="/Login" element={<Login />} />
         <Route path="/Signup" element={<SignUp />} />
         <Route path="/Recover" element={<Recover />} />
         <Route path="/PasswordRecovery" element={<Wrapper><PasswordRecovery /></Wrapper>} />
         <Route path="/Dashboard" element={<Wrapper><Dashboard /></Wrapper>} />
         <Route path="/Test" element={<Wrapper><Test /></Wrapper>} />
         <Route path="/Resources" element={<Wrapper><Resources /></Wrapper>} />
         <Route path="/Stressed" element={<Wrapper><Stressed /></Wrapper>} />
         <Route path="/AmTest" element={<Wrapper><Amtest /></Wrapper>} />
         <Route path="/GITest" element={<Wrapper><GImodTest /> </Wrapper>} />
         <Route path="/GIMod" element={<Wrapper><GiMod /> </Wrapper>} />
         <Route path="/GIModContent" element={<Wrapper><GIModContent /> </Wrapper>} />
         <Route path="/AmMod" element={<Wrapper><AmMod /> </Wrapper>} />
         <Route path="/AMModContent" element={<Wrapper><AMModContent /> </Wrapper>} />
         <Route path="/SSMod" element={<Wrapper><SSmod /> </Wrapper>} />
         <Route path="/SSModContent" element={<Wrapper><SSModContent /> </Wrapper>} />
         <Route path="/GImodintro" element={<Wrapper><GIModIntro /> </Wrapper>} />
         </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
