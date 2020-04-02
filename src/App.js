import React from 'react';
import {HashRouter,Route,Redirect,Switch,BrowserRouter} from 'react-router-dom'
// import {createBrowserHistory} from 'history'
import Reg from './pages/reg'
import Login  from './pages/login'
import Admin from './pages/admin'
import userlist from './pages/user/userlist'
import useradd from './pages/user/useradd'
import Administrators from './pages/Administrators'
import bookadd from './pages/book/bookadd'
import bookupdate from './pages/book/bookUpdate'
import booklist from './pages/book/booklist'
import set from './pages/set'
import adminadd from './pages/Administrators/adminadd'
import adminlist from './pages/Administrators/adminlist'
// import { YellowBox } from 'react-native';
import searchbook from './pages/book/searchbook'
// const browserhostory =createBrowserHistory()

import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path='/reg' component={Reg} ></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/admin' render={()=>{
          return(
            <Admin>
                 
                <Route path='/admin/userlist' component={userlist} ></Route>
                <Route path='/admin/useradd' component={useradd} ></Route>
                <Route path='/admin/bookadd' component={bookadd} ></Route>
                <Route path='/admin/bookUpdate' component={bookupdate} ></Route>
                <Route path='/admin/booklist' component={booklist} ></Route>
                <Route path='/admin/set' component={set} ></Route>
                <Route path='/admin/adminadd' component={adminadd} ></Route>
                <Route path='/admin/adminlist' component={adminlist} ></Route>
                <Route path='/admin/searchbook' component={searchbook} ></Route>
            </Admin>
          )

        }}>
        
        </Route>
        <Redirect from='/*' to='/reg'></Redirect>
        </Switch>


      </BrowserRouter>


    </div>
  );
}

export default App;
