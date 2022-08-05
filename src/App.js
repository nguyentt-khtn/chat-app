import { Route, Router,Switch } from 'react-router-dom';
import './App.css';
import ChatRoom from './pages/ChatRoom/ChatRoom';
import Login from './pages/Login/Login';

function App() {
  return (
    <Router >
      <Switch >
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={ChatRoom} />
      </Switch>
    </Router>
    
  );
}

export default App;
