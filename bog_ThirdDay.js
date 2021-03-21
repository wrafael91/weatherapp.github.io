//3 Days Forecast Section
//Third Day Forecast
const bogotaThirdDay = "https://api.openweathermap.org/data/2.5/forecast?lat=4.60971&lon=-74.081749&appid=5be15f27f180f07259d63b580db53929";
const bogotaHttpsThirdDay = new XMLHttpRequest();

bogotaHttpsThirdDay.open("GET", bogotaThirdDay, true);

bogotaHttpsThirdDay.addEventListener('load', (data) => {
    const dataJSON3 = JSON.parse(data.target.response);
    console.log(dataJSON3);
    //Day 3
    //Get date/time format translated into days label.
    let days3 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"];
    let getStringDaysInfo3 = new Date(dataJSON3.list[20].dt * 1000);
    let dayName3 = days3[getStringDaysInfo3.getDay()];
    console.log(dayName3);  
    //Display information on client side.
    const { icon, description } = dataJSON3.list[20].weather[0];
    const { temp_min, temp_max } = dataJSON3.list[20].main;
    document.querySelector('.icon-3').src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector('.status-3').innerText = description;
    document.querySelector('.temp-3').innerText = (Math.round(temp_max-273.15)) + '°C' + "/" + (Math.round(temp_min-273.15)) + '°C';
    document.querySelector('.day-3').innerText = dayName3;
    
});
bogotaHttpsThirdDay.send();