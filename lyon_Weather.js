//Lyon, FR - Weather
const lyonUrl = "http://api.openweathermap.org/data/2.5/weather?q=lyon&appid=5be15f27f180f07259d63b580db53929";
const lyonHttps = new XMLHttpRequest();

lyonHttps.open("GET", lyonUrl);

lyonHttps.addEventListener('load', (data) => {
    const dataJSON4 = JSON.parse(data.target.response);
    console.log(dataJSON4);
    const { icon, description } = dataJSON4.weather[0];
    const { temp, humidity } = dataJSON4.main;
    const { speed } = dataJSON4.wind;
    document.querySelector('.temp-lyon').innerText = (Math.round(temp-273.15)) + '°C' + " | " + "Lyon, FR";
    document.querySelector('.icon-lyon').src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector('.hum-lyon').innerText = "Humidity " + humidity + " %" + " | " + " NW " + " | " + speed + " km/h";
});
lyonHttps.send();