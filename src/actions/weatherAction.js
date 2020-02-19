import axios from 'axios';

// requete get sur le lien
//axios pour la requete

const baseUrl = "http://api.openweathermap.org/data/2.5";
const appId = "&appid=fcf97c1aefda377b2f9c28ab6bbe4fee";

export function getWeather(){
    return axios.get(baseUrl+"/weather?q=tenerife"+appId);
}