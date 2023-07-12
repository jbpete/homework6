//How could I automate adding dates
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;


let apiKey = "09e914382d323bf6c810a1d44a6f5e0c"

let cityName = "Indianapolis"

var searchInput = document.getElementById('city')

const city_icon = document.getElementById('cityIcon')
const city_temp = document.getElementById('cityTemp')
const city_windspeed = document.getElementById('cityWindspeed')
const city_humidity = document.getElementById('cityHumidity')
let createImage= document.createElement('img');

apiUrl = '8e91bfac4c72a264930988e14d7b8498'

function weatherAPI1() {
    let cityURL = `https://api.openweathermap.org/data/2.5/weather?q=${choosenCity}&appid=8e91bfac4c72a264930988e14d7b8498`;
    fetch(cityURL)
    .then(response => {
        console.log(response.json )
        return response.json();
    })
    .then(data => {
            //var CityValue = data['name'];
            var TemperValue = data['main']['temp'];
            var windValue = data['wind']['speed'];
            var HumidValue = data['main']['humidity'];
            var ImgValue = data.weather[0].icon;

            var convertTemp = Math.trunc(1.8 * (TemperValue - 273) + 32);
            city_temp.innerHTML = "Temperature: " + convertTemp + " °F";
            city_humidity.innerHTML = "Humidity: " + HumidValue + "%";
            city_windspeed.innerHTML = "Wind Speed: " + windValue + " MPH";
        
            createImage.src= "http://openweathermap.org/img/wn/" + ImgValue + ".png";
            
            document.getElementById('cityIcon').append(createImage);
})
}

// const city_icon1 = document.getElementById('cityIcon')
// const city_temp1 = document.getElementById('cityTemp')
// const city_windspeed1 = document.getElementById('cityWindspeed')
// const city_humidity1 = document.getElementById('cityHumidity')
// let createImage1 = document.createElement('img');
// const city_icon2 = document.getElementById('cityIcon')
// const city_temp2 = document.getElementById('cityTemp')
// const city_windspeed2 = document.getElementById('cityWindspeed')
// const city_humidity2 = document.getElementById('cityHumidity')
// let createImage2 = document.createElement('img');
// const city_icon3 = document.getElementById('cityIcon')
// const city_temp3 = document.getElementById('cityTemp')
// const city_windspeed3 = document.getElementById('cityWindspeed')
// const city_humidity3 = document.getElementById('cityHumidity')
// let createImage3 = document.createElement('img');
// const city_icon4 = document.getElementById('cityIcon')
// const city_temp4 = document.getElementById('cityTemp')
// const city_windspeed4 = document.getElementById('cityWindspeed')
// const city_humidity4 = document.getElementById('cityHumidity')
// let createImage4 = document.createElement('img');
// const city_icon5 = document.getElementById('cityIcon')
// const city_temp5 = document.getElementById('cityTemp')
// const city_windspeed5 = document.getElementById('cityWindspeed')
// const city_humidity5 = document.getElementById('cityHumidity')
// let createImage5 = document.createElement('img');



function weatherAPI2() {
    let forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${choosenCity}&units=imperial&appid=8e91bfac4c72a264930988e14d7b8498`
    fetch(forecastURL)
    .then(response => response.json())
    .then(data => {
    document.getElementById('date1').innerHTML = today
    document.getElementById('forecastTemp1').innerHTML = 'Temp: ' + Number(data.list[0].main.temp).toFixed(0) + "°F";
    document.getElementById('forecastWindspeed1').innerHTML = 'Wind: ' + Number(data.list[0].wind.speed) + " Mph";
    document.getElementById('forecastHumidity1').innerHTML = 'Humidity: ' + Number(data.list[0].main.humidity);
    //document.getElementById('icon1').innerHTML = data.weather[0].icon
    //document.getElementById('forecastHumidity1').innerHTML = (data.list[0].dt_txt);
    //let createImage1 = document.createElement('img').innerHTML
    document.getElementById('forecastTemp2').innerHTML = 'Temp: ' + Number(data.list[1].main.temp).toFixed(0) + "°F";
    document.getElementById('forecastWindspeed2').innerHTML = 'Wind: ' + Number(data.list[1].wind.speed) + " Mph";
    document.getElementById('forecastHumidity2').innerHTML = 'Humidity: ' + Number(data.list[1].main.humidity);
    //document.getElementById('forecastHumidity2').innerHTML = (data.list[1].dt_txt);
    ///let createImage2 = document.createElement('img').innerHTML
    document.getElementById('forecastTemp3').innerHTML = 'Temp: ' + Number(data.list[2].main.temp).toFixed(0) + "°F";
    document.getElementById('forecastWindspeed3').innerHTML = 'Wind: ' + Number(data.list[2].wind.speed) + " Mph";
    document.getElementById('forecastHumidity3').innerHTML = 'Humidity: ' + Number(data.list[2].main.humidity);
    //const city_humidity3 = document.getElementById('forecastHumidity3').innerHTML = (data.list[2].dt_txt);
    //let createImage3 = document.createElement('img').innerHTML
    document.getElementById('forecastTemp4').innerHTML = 'Temp: ' + Number(data.list[3].main.temp).toFixed(0) + "°F";
    document.getElementById('forecastWindspeed4').innerHTML = 'Wind: ' + Number(data.list[3].wind.speed) + " Mph";
    document.getElementById('forecastHumidity4').innerHTML = 'Humidity: ' + Number(data.list[3].main.humidity);
    //const city_humidity4 = document.getElementById('forecastHumidity4').innerHTML = (data.list[3].dt_txt);
    //let createImage4 = document.createElement('img').innerHTML
    document.getElementById('forecastTemp5').innerHTML = 'Temp: ' + Number(data.list[4].main.temp).toFixed(0) + "°F";
    document.getElementById('forecastWindspeed5').innerHTML = 'Wind: ' + Number(data.list[4].wind.speed) + " Mph";
    document.getElementById('forecastHumidity5').innerHTML = 'Humidity: ' + Number(data.list[4].main.humidity);
    //const city_humidity5 = document.getElementById('forecastHumidity5').innerHTML = (data.list[4].dt_txt);
    //let createImage5 = document.createElement('img').innerHTML
    })
}

$("#search_btn").click(function () {
    choosenCity = searchInput.value;
    console.log(choosenCity)
    weatherAPI1();
    weatherAPI2();
    //document.getElementById('searchHistory').innerHTML = 
    var searchedCity = document.getElementById('city').value
    console.log(searchedCity)
    document.getElementById('searchHistory').innerHTML = searchedCity
})




