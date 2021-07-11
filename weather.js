const API_KEY = "2fa8328e5968987c6391a52df7c19676"

function onGeoOk (position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span");
        const city = document.querySelector("#weatherCity span");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
    });
}

function onGeoFucked () {
    alert ("Can't find you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoFucked);
