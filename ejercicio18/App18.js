// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

// Import to page
import LoginFormik from './componentes/pure/forms/loginFormik';
import RegisterFormik from './componentes/pure/forms/registerFormik'
import NotFoundPage from './pages/404/NotFoundPage';


function App18() {
  return (
    <Router>
      <aside>
        <Link to='/login'>| Login |</Link>
        <Link to='/register'>| Register |</Link>
        <Link to='/desconocida'>| 404 |</Link>
      </aside>
      <main>
        <Switch>
        <Route exact path='/login' component={ LoginFormik} />
        <Route path='/register' component={RegisterFormik}/>
        <Route component={ NotFoundPage } />
      </Switch>
      </main>
      
    </Router>
  );
}

export default App18;
