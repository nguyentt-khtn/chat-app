import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import ChatRoom from './pages/ChatRoom/ChatRoom';
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chatroom" element={<ChatRoom />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
