import { useState, useEffect } from "react";
import "./gameComponent.css";
import { useAppContext } from "../AppContext";
import countries from "../scripts/countries.json";

const NR_OF_COUNTRIES = Object.keys(countries).length;

function GameComponent() {
    const [country, setCountry] = useState("");
    const { setActiveFrame } = useAppContext();
    const [guess, setGuess] = useState("");

    //Get new country on load
    useEffect(() => {
        console.log("Initial country was loaded...");
        setNewCountry();
    }, []);

    //Eventhandler for keyboard inputs
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Enter") {
                makeGuess();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [guess, country]);

    function printCountry() {
        console.log("The answer was: " + countries[country]);
    }

    function setNewCountry() {
        const nextCountry = getRandomCountry();
        setCountry(() => nextCountry);
    }

    function makeGuess() {
        if (guess === countries[country]) {
            console.log("You were correct!");
            printCountry();
            setNewCountry();
        } else {
            console.log("You were wrong! Try again");
            console.log(countries[country] + ", " + guess);
        }
        setGuess(() => "");
    }

    function getAnswer() {
        printCountry();
        setNewCountry();
    }

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
                    alt="flag to guess"
                />
            </div>
            <div className="card guess-div">
                <p>What flag is this?</p>
                <input
                    type="text"
                    className="guess-input"
                    placeholder="Make a guess..."
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                />
                <button
                    className="my-btn guess-btn"
                    onClick={() => {
                        makeGuess();
                    }}
                >
                    Guess
                </button>
                <button
                    className="my-btn answer-btn"
                    onClick={() => {
                        getAnswer();
                    }}
                >
                    Reveal Answer
                </button>
            </div>
            <button
                className="my-btn quit-btn"
                onClick={() => setActiveFrame("start")}
            >
                Give up
            </button>
        </div>
    );
}

export default GameComponent;
