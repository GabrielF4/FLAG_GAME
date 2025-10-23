import { useState } from "react";
import "./App.css";
import countries from "./scripts/countries.json" assert { type: "json" };

const NR_OF_COUNTRIES = Object.keys(countries).length;
const START_FLAG = "SE";

function getRandomCountry() {
    const randNum = Math.floor(Math.random() * NR_OF_COUNTRIES);
    return Object.keys(countries)[randNum];
}

function getFlagUrl(flagCode) {
    return new URL(
        `./assets/flags/${flagCode.toLowerCase()}.svg`,
        import.meta.url
    ).href;
}

function App() {
    const [country, setCountry] = useState(START_FLAG);

    return (
        <>
            <div>
                <img
                    src={getFlagUrl(country)}
                    className="logo react"
                    alt="Start flag"
                />
            </div>
            <h1>Flag Game</h1>
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
