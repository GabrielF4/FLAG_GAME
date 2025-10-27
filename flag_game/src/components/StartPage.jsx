import { useState } from "react";
import { useAppContext } from "../AppContext";
import { getFlagURL } from "../utils/convertionUtils";
import { getRandomCountry } from "../utils/generateCountries";

const START_FLAG = "SE";

function StartPage() {
    const { setActiveFrame } = useAppContext();
    const [startFlag, setStartFlag] = useState(START_FLAG);

    function setRandomFlag() {
        setStartFlag(() => getRandomCountry());
    }

    return (
        <div className="start-page">
            <div>
                <img
                    src={getFlagURL(startFlag)}
                    className="logo logo-spin react"
                    alt="Start flag"
                    onClick={() => setRandomFlag()}
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
