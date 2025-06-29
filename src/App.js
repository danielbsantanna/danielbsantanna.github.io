import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Disc from './Components/Disc';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/disc" element={<Disc />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}



export default App;
