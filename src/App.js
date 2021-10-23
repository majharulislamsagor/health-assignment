import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import NavigationBar from './Components/Navigation/NavigationBar';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Regester from './Components/Regester/Regester';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import SingleService from './Components/SingleService/SingleService';



function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <NavigationBar></NavigationBar>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Regester></Regester>
            </Route>

            <PrivateRoute path="/singelService/:ServiceId">
              <SingleService></SingleService>

            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>



          </Switch>
        </Router>
      </AuthProvider>
      <Footer></Footer>



    </div>
  );
}

export default App;
