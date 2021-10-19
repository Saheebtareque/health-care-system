import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Notfound from './components/Notfound/Notfound';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Booking from './components/Booking/Booking';
import Subscription from './components/Subscription/Subscription';
import DoctorDetail from './components/DoctorDetail/DoctorDetail';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login> </Login>
            </Route>
            <PrivateRoute exact path="/service/:doctorId">
            <DoctorDetail></DoctorDetail>
          </PrivateRoute>
            <PrivateRoute path="/booking">
              <Booking></Booking>
              </PrivateRoute>
              <PrivateRoute path="/subscription">
              <Subscription>
              </Subscription>
              </PrivateRoute>
            
            <Route path="*">
              <Notfound></Notfound>
            </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
