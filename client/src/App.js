import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Feedback from './pages/Feedback';
import './App.css';

//routes for the app

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/feedback" element={<Feedback />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
