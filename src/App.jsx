import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ValentinesCard from "./components/ValentinesCard";
import FinalWay from "./components/FinalWay";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ValentinesCard />} /> {/* Página principal */}
                <Route path="/finalway" element={<FinalWay />} /> {/* Página final */}
            </Routes>
        </Router>
    );
}

export default App;
