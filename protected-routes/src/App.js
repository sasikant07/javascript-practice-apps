import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Accounts from './pages/Accounts';
import Cards from './pages/Cards';
import ProtectedRoute from './ProtectedRoute';
import useAuth from './useAuth';

function App() {
  const [isAuth, login, logout] = useAuth(false)
  return (
    <div>
      <h2>Protected Routes Example</h2>
      <Router>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/accounts">Accounts (Protected)</Link>
          </li>
          <li>
            <Link to="/cards">Cards (UnProtected)</Link>
          </li>
        </ul>
        {isAuth ? 
        (<><div>You are logged in..</div><button onClick={logout}>Logout</button></>):
        (<><div>You are logged out..</div><button onClick={login}>Login</button></>)}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cards" component={Cards} />
          <ProtectedRoute path="/accounts" component={Accounts} auth={isAuth}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
