import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Home/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home/Home';
import AboutUs from './Components/Home/AboutUs/AboutUs';
import NotFound from './Components/NotFound/NotFound';
import HelpLine from './Components/Home/HelpLine/HelpLine';
import Login from './Components/Login/Login';
import SignUp from './Components/Home/SignUp/SignUp';
import AuthProvider from './Components/Context/AuthProvider';
import Reset from './Components/Login/Reset';
import Courses from './Components/Home/Courses/Courses';
import SingleCourse from './Components/SingleCourse/SingleCourse';
import PrivateRoute from './Components/Context/PrivateRoute';
import ContactSection from './Components/Home/ContactSection/ContactSection';
import Cart from './Components/Home/Cart/Cart';
import Admin from './Components/Home/Admin/Admin';
import AddService from './Components/Home/AddService.js/AddService';





function App() {
  return (
   <AuthProvider>
   <Router>
        <Header/>
      <Switch>
        <Route exact path="/"><Home/> </Route>
        <Route path="/home"><Home/> </Route>
        <Route path="/Courses"><Courses/></Route>
        <Route path="/conditions"><HelpLine/></Route>
        <Route path="/aboutUs"><AboutUs/></Route>
        <Route path="/signup"><SignUp/></Route>
        <Route path="/reset"><Reset/></Route>
        <Route path="/login"><Login/></Route>
        <Route path="/AddService"><AddService/></Route>
        <PrivateRoute path="/cart"><Cart/></PrivateRoute>
        <PrivateRoute path="/Admin"><Admin/></PrivateRoute>
        <Route path="/contactSection"><ContactSection/></Route>
        <Route path="/singleCourse/:id"><SingleCourse/></Route>
        <Route path="*"><NotFound/></Route>
      </Switch>
      </Router>
   </AuthProvider>
  );
}

export default App;
