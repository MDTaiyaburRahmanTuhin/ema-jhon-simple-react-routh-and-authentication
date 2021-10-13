import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Contexts/AuthProvider';
import Booking from './Pages/Booking/Booking/Booking';
import Experts from './Pages/Home/Experts/Experts';
import Home from './Pages/Home/Home/Home';
import Service from './Pages/Home/Service/Service';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login';
import PrivateRouth from './Pages/Login/PrivateRouth/PrivateRouth';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Sheard/Header/Header';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRouth path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRouth>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
