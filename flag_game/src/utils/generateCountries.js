import countries from "../scripts/countries.json";

const NR_OF_COUNTRIES = Object.keys(countries).length;

//Generate a random country code from the country list
export function getRandomCountry() {
    const randNum = Math.floor(Math.random() * NR_OF_COUNTRIES);
    return Object.keys(countries)[randNum];
}
