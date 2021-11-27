import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Others/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import ContactUs from './Pages/ContactUs/ContactUs';
import AboutUs from './Pages/AboutUs/AboutUs';
import Footer from './Pages/Others/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Services from './Pages/Home/Services/Services';
import Doctor from './Pages/Doctor/Doctor/Doctor';
import Login from './Pages/Login/Login';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import MyOrders from './Pages/MyOrders/MyOrders';



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
            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/myorders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/Doctor/:doctorId">
              <Doctor></Doctor>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
