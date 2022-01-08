import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import init from './Firebase/firebase.init';
import Notfound from './components/Notfound/Notfound';
import Home from './components/Home/Home';
import Authentication from './components/Authentication/Authentication';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Doctor from './components/Home/Doctors/Doctor/Doctor';
import Footer from './components/Footer/Footer';

init()

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/authentication'>
            <Authentication/>
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/contact'>
            <Contact/>
          </Route>
          <PrivateRoute path='/doctor/:id'>
            <Doctor></Doctor>
          </PrivateRoute>
          <Route path='*'>
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
