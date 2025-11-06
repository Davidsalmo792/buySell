import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import "./App.css";
import Fordon from "./Pages/Fordon";
import Contact from "./Pages/Contact";



function App() {
    return (
        <Router>
            <Navbar />
            <div className="container" style={{ paddingTop: "60px" }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/fordon" element={<Fordon />} />
                    <Route path="/contact" element={<Contact />} />

                </Routes>
            </div>
        </Router>
    );
}

export default App;
