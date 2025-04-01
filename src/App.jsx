import React, { useState } from "react";
import "./App.css";

const App = () => {
    const [mode, setMode] = useState("light");

    const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
    };

    return (
    <div id="app-wrapper" className={`theme-${mode}`}>
        <h1>{mode === "light" ? "Light Mode" : "Dark Mode"} avec React</h1>
        <button onClick={toggleTheme}>
        {mode === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
    </div>
    );
};

export default App;