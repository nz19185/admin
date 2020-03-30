import React from 'react';
import {HashRouter,Route,Redirect} from 'react-router-dom'
import Reg from './pages/reg'
import Login  from './pages/login'
import Admin from './pages/admin'
import user from './pages/user'
import Administrators from './pages/Administrators'

import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route path='/reg' component={Reg} ></Route>
        <Route path='login' component={Login}></Route>
        <Route path='/admin' render={()=>{
          return(
            <Admin>
                <Route path='/admin/user' component={user} ></Route>
                <Route path='/admin/admins' component={Administrators} ></Route>

            </Admin>
          )

        }}></Route>
       


      </HashRouter>


    </div>
  );
}

export default App;
