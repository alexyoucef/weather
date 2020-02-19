import axios from 'axios';

// requete get sur le lien
//axios pour la requete

export function getWeather(){
    return axios.get("http://api.openweathermap.org/data/2.5/weather?q=tenerife&appid=fcf97c1aefda377b2f9c28ab6bbe4fee");
}