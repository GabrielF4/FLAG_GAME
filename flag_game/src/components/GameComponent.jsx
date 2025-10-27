import "./gameComponent.css";
import { useState, useEffect } from "react";
import { useAppContext } from "../AppContext";
import { useKeyboardShortcut } from "../hooks/useKeyboardShortcut";
import { getFlagURL, getCountryName } from "../utils/convertionUtils";
import { getRandomCountry } from "../utils/generateCountries";

function GameComponent() {
    const [country, setCountry] = useState("");
    const [guess, setGuess] = useState("");
    const { setActiveFrame } = useAppContext();

    //Get new country on load
    useEffect(() => {
        console.log("Initial country was loaded...");
        setNewCountry();
    }, []);

    //Eventhandler for keyboard inputs
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Enter") {
                makeGuess(guess, getCountryName(country));
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [guess, country]);

    //Simple print statement
    function printCountry() {
        console.log("The answer was: " + getCountryName(country));
    }

    //Set country state to a ranom country
    function setNewCountry() {
        const nextCountry = getRandomCountry();
        setCountry(() => nextCountry);
    }

    //Action for when you submit a guess
    function makeGuess(guess, answer) {
        if (guess.toLowerCase() === answer.toLowerCase()) {
            console.log("You were correct!");
            printCountry();
            setNewCountry();
        } else {
            console.log("You were wrong! Try again");
            console.log(answer + ", " + guess);
        }
        setGuess(() => "");
    }

    //Action for when you submit the answer to the guess
    function getAnswer() {
        printCountry();
        setNewCountry();
    }

    return (
        <div className="game-frame">
            <div>
                <img
                    src={getFlagURL(country)}
                    className="react logo"
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
                        makeGuess(guess, getCountryName(country));
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
