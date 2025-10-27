import countries from "../scripts/countries.json";

//Get image url from flagcode
export function getFlagURL(flagCode) {
    return new URL(
        `../assets/flags/${flagCode.toLowerCase()}.svg`,
        import.meta.url
    ).href;
}

//Get country name from flagcode
export function getCountryName(code) {
    return countries[code];
}
