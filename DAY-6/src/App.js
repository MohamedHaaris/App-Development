import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './assets/css/Login.css';
import './assets/css/Home.css';
import './assets/css/Dashboard.css';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
