import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./App.css";
import Fordon from "./pages/Fordon";
import Contact from "./pages/Contact";



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
