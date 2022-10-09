const weather = document.querySelector(".status-bar__weatherinfo");
const API_KEY = "d4210049ff3d29f5199c4d0bd74272f6";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;


    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        weather.innerText = `${data.weather[0].main},${data.name}`;
   
    });

}


function onGeoError(){
    alert("Can't find your latitude and longitude");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);