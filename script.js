
function weatherAPI() {
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=77.0369&lon=38.9072&appid=09e914382d323bf6c810a1d44a6f5e0c"
    fetch(queryURL)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        var weather = document.getElementById("weather")
        weather.textContent = data.name


    })

}

weatherAPI()
