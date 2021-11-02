import React from 'react';
import Sidebar from '../SideBar/SideBar'


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddService from '../AddService.js/AddService';

const Admin = () => {
  return (
    <div className="admin">
      <Router>
      <Sidebar/>
    <Switch>
    <Route path="/addServices">
      <AddService/>
    </Route>
  </Switch>

</Router>
    </div>
  );
};

export default Admin;