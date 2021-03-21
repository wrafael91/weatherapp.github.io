//Banner Bogotá
const bogotaUrl = "http://api.openweathermap.org/data/2.5/weather?q=Bogota&appid=5be15f27f180f07259d63b580db53929";
const bogotaHttps = new XMLHttpRequest();

bogotaHttps.open("GET", bogotaUrl);

bogotaHttps.addEventListener('load', (data) => {
    const dataJSON = JSON.parse(data.target.response);
    const { icon, description } = dataJSON.weather[0];
    const { temp } = dataJSON.main;
    document.querySelector('.bog-temp').innerText = (Math.round(temp-273.15)) + '°C';
    document.querySelector('.icon-bog').src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector('.description').innerText = description;
    
});
bogotaHttps.send();

  




