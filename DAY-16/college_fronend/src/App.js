import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import './assets/css/Dashboard.css';
import './assets/css/Home.css';
import './assets/css/Login.css';
import './assets/css/Footer.css';
import './assets/css/PrivacyPolicy.css';
import './assets/css/About.css';
import './assets/css/Register.css'
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Login from './components/Login';
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import About from "./components/About";
import Register from "./components/Register";
import Contact from "./components/Contact";
import View from "./components/View";
import PersonalInformation from "./components/PersonalInformation";
import Info from "./components/Info";
function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/terms" element={<TermsAndConditions/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/privacy" element={<PrivacyPolicy/>}/>
        <Route path="/information" element={<PersonalInformation/>}/>
        <Route path="/view" element={<View/>}/>
        <Route path="/info" element={<Info/>}/>

      </Routes>
    </Router>
    
    </>
    
  );
}

export default App;
