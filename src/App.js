import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Home/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Components/Home/banner/Banner';
import Home from './Components/Home/Home/Home';
import AboutUs from './Components/Home/AboutUs/AboutUs';
import NotFound from './Components/NotFound/NotFound';
import HelpLine from './Components/Home/HelpLine/HelpLine';
import Services from './Components/Home/services/Services';




function App() {
  return (
    <div>
   <Router>
        <Header/>
      <Switch>
        <Route exact path="/"><Home/> </Route>
        <Route path="/home"><Home/> </Route>
        <Route path="/services"><Services/></Route>
        <Route path="/conditions"><HelpLine/></Route>
        <Route path="/aboutUs"><AboutUs/></Route>
        {/* <PrivateRoute path="/singleService/:id"><SingleService/></PrivateRoute>
        <PrivateRoute path="/singleCondition/:id"><SingleCondition/></PrivateRoute> */}
        <Route path="*"><NotFound/></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
