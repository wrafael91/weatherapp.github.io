//3 Days Forecast Section
//Second Day Forecast
const bogotaSecondDay = "http://api.openweathermap.org/data/2.5/forecast?lat=4.60971&lon=-74.081749&appid=5be15f27f180f07259d63b580db53929";
const bogotaHttpsSecondDay = new XMLHttpRequest();

bogotaHttpsSecondDay.open("GET", bogotaSecondDay, true);

bogotaHttpsSecondDay.addEventListener('load', (data) => {
    const dataJSON2 = JSON.parse(data.target.response);
    console.log(dataJSON2);
    //Day 2
    //Get date/time format translated into days label.
    let days2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"];
    let getStringDaysInfo2 = new Date(dataJSON2.list[12].dt * 1000);
    let dayName2 = days2[getStringDaysInfo2.getDay()];
    console.log(dayName2);  
    //Display information on client side.
    const { icon, description } = dataJSON2.list[12].weather[0];
    const { temp_min, temp_max } = dataJSON2.list[12].main;
    document.querySelector('.icon-2').src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector('.status-2').innerText = description;
    document.querySelector('.temp-2').innerText = (Math.round(temp_max-273.15)) + '°C' + "/" + (Math.round(temp_min-273.15)) + '°C';
    document.querySelector('.day-2').innerText = dayName2;
    
});
bogotaHttpsSecondDay.send();