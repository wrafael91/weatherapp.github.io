//Paris, FR - Weather
const parisUrl = "http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=5be15f27f180f07259d63b580db53929";
const parisHttps = new XMLHttpRequest();

parisHttps.open("GET", parisUrl);

parisHttps.addEventListener('load', (data) => {
    const dataJSON5 = JSON.parse(data.target.response);
    console.log(dataJSON5);
    const { icon, description } = dataJSON5.weather[0];
    const { temp, humidity } = dataJSON5.main;
    const { speed } = dataJSON5.wind;
    document.querySelector('.temp-paris').innerText = (Math.round(temp-273.15)) + '°C' + " | " + "Paris, FR";
    document.querySelector('.icon-paris').src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector('.hum-paris').innerText = "Humidity " + humidity + " %" + " | " + " W " + " | " + speed + " km/h";
});
parisHttps.send();