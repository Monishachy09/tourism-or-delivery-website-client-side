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
import Footer from './Components/Home/Footer/Footer';
import Reset from './Components/Login/Reset';
import Service from './Components/Home/services/Service';




function App() {
  return (
   <AuthProvider>
   <Router>
        <Header/>
      <Switch>
        <Route exact path="/"><Home/> </Route>
        <Route path="/home"><Home/> </Route>
        <Route path="/services"><Service/></Route>
        <Route path="/conditions"><HelpLine/></Route>
        <Route path="/aboutUs"><AboutUs/></Route>
        <Route path="/signup"><SignUp/></Route>
        <Route path="/reset"><Reset/></Route>
        <Route path="/login"><Login/></Route>
        {/* <PrivateRoute path="/singleService/:id"><SingleService/></PrivateRoute>
        <PrivateRoute path="/singleCondition/:id"><SingleCondition/></PrivateRoute> */}
        <Route path="*"><NotFound/></Route>
      </Switch>
      <Footer/>
      </Router>
   </AuthProvider>
  );
}

export default App;
