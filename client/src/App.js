import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Feedback from './pages/Feedback';
import './assets/styles/App.css';

//routes for the app

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
}

export default App;
