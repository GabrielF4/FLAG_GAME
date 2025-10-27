import { useState, useContext } from "react";
import countries from "../scripts/countries.json";
import { AppContext, useAppContext } from "../AppContext";

const START_FLAG = "SE";

function StartPage() {
    const { activeFrame, setActiveFrame } = useAppContext();

    function getFlagUrl(flagCode) {
        return new URL(
            `../assets/flags/${flagCode.toLowerCase()}.svg`,
            import.meta.url
        ).href;
    }

    return (
        <div className="start-page">
            <div>
                <img
                    src={getFlagUrl(START_FLAG)}
                    className="logo react"
                    alt="Start flag"
                />
            </div>
            <h1>Flag Game</h1>
            <div className="card">
                <button
                    onClick={() => {
                        setActiveFrame("game");
                    }}
                >
                    Start Game
                </button>
                <p>Press button to start a guess the flag game</p>
            </div>
            <p className="read-the-docs">
                This game was made by GabrielF4 and he earns all the rights and
                respect to this project.
            </p>
        </div>
    );
}

export default StartPage;
