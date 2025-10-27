import { useState } from "react";
import "./gameComponent.css";
import { useAppContext } from "../AppContext";
import countries from "../scripts/countries.json";

const NR_OF_COUNTRIES = Object.keys(countries).length;
const START_FLAG = "SE";

function GameComponent() {
    const [country, setCountry] = useState(START_FLAG);
    const { setActiveFrame } = useAppContext();

    function makeGuess() {}

    function getRandomCountry() {
        const randNum = Math.floor(Math.random() * NR_OF_COUNTRIES);
        return Object.keys(countries)[randNum];
    }

    function getFlagUrl(flagCode) {
        return new URL(
            `../assets/flags/${flagCode.toLowerCase()}.svg`,
            import.meta.url
        ).href;
    }

    return (
        <div className="game-frame">
            <div>
                <img
                    src={getFlagUrl(country)}
                    className="logo react"
                    alt="Start flag"
                />
            </div>
            <div className="card">
                <button
                    onClick={() => {
                        const nextCountry = getRandomCountry();
                        setCountry(() => nextCountry);
                        console.log(
                            nextCountry +
                                ", " +
                                countries[nextCountry] +
                                ", " +
                                getFlagUrl(nextCountry)
                        );
                    }}
                >
                    Guess
                </button>
                <p>What flag is this?</p>
                <input type="text" name="guess-input" />
            </div>
            <button
                className="quit-btn"
                onClick={() => setActiveFrame("start")}
            >
                Give up
            </button>
        </div>
    );
}

export default GameComponent;
