import axios from 'axios';
const API_KEY = 'c24189c72ec9c09d5f53d7e7f4534e00'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = "FETCH_WEATHER";
//takie cos ulatwia bugi
export function fetchWeather(city) { //action creator musi byc obiektem
    const url = `${ROOT_URL}&q=${city},pl`;
    const request = axios.get(url);
    console.log('request:', request);
    return { //ACTION CREATOR
        type: FETCH_WEATHER,
        payload: request
    }
}