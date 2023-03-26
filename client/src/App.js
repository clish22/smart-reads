import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Feedback from './pages/Feedback';
import './App.css';
import Login from './pages/Login';

//routes for the app

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
