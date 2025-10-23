import { useState } from "react";
import startFlag from "./assets/flags/se.svg";
import "./App.css";

function App() {
    //const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <img src={startFlag} className="logo react" alt="Start flag" />
            </div>
            <h1>Flag Game</h1>
            <div className="card">
                <button onClick={() => console.log("button clicked")}>
                    Start Game
                </button>
                <p>Press button to start a guess the flag game</p>
            </div>
            <p className="read-the-docs">
                This game was made by GabrielF4 and he earns all the rights and
                respect to this project.
            </p>
        </>
    );
}

export default App;
