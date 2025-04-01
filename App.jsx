import React, { useState } from "react";
import "./App.css";

const App = () => {
const [mode, setMode] = useState("light");

const toggleTheme = () => {
    if (mode=== "light") {
    setMode("dark");
    } else {
    setMode("light");
    }
};

return (
    <div id="app-wrapper" className={`theme-${mode}`}>
    <h1>Dark_Mode avec React</h1>
    <button onClick={toggleTheme}>🌓</button>
    </div>
);
};

export default App;