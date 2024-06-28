// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
//import Login from './components/login';
//import Register from './components/register';
//import Home from './components/home';
// import Team from './components/team';
import Contacts from './components/contacts';
import Models from './components/models';
// import Booking from './components/booking';
// import Home1 from './components/home1';
// import Contacts1 from './components/contacts1';
// import Addteam from './components/addteam';
import Addmodel from './components/addmodel';
// import Otp from './components/otp';
// import Preload from './components/preload';
import Technicalhub from './components/technicalhub';

function App() {
  return (
    
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} /> */}
          {/* <Route path='/' element={<Team/>} /> */}
          {/* <Route path='/team' element={<Team/>} /> */}
          {/* <Route path='/contacts' element={<Contacts/>} /> */}
          <Route path='/' element={<Models/>} />
          {/* <Route path='/booking' element={<Booking/>} />
          <Route path='/h' element={<Home1/>} />
          <Route path='/contacts1' element={<Contacts1/>} />
          <Route path='/addteam' element={<Addteam/>} /> */}
          <Route path='/addmodel' element={<Addmodel/>} />
          {/* <Route path='/otp' element={<Otp/>} /> */}
          {/* <Route path='/preload' element={<Preload/>} /> */}
          <Route path='/technicalhub' element={<Technicalhub/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
