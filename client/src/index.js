import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Welcome from './pages/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';         
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  
import UserRegister from './pageComponents/UserRegister';
import UserLogin from './pageComponents/UserLogin';
import Dashboard from './pageComponents/Dashboard';
import Approv from './pageComponents/Approv';
import Books from './pageComponents/Books';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Welcome/>}>
   <Route path='/' element={<Books/>} />
   <Route path='/userReg' element={<UserRegister/>} />
   <Route path='/userLog' element={<UserLogin/>} />
   <Route path='/dashboard' element={<Dashboard/>} />
   <Route path='/approval' element={<Approv/>} />
   
  </Route>
</Routes>
</BrowserRouter>
  </React.StrictMode>
)

