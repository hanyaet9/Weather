// Selecting Inputs 

let searchInput = document.querySelector (".search")

// searchInput.addEventListener('click' ,function(){
//     console.log("clicked")
// } )


                                             // Getting data for today weather
let todayWeather = [];

(async function(){
    let weatherOfToday = await fetch ("http://api.weatherapi.com/v1/forecast.json?key=c5dd02d749114d2287a144040240601&q=London&days=3&aqi=no&alerts=no")
    todayWeather = await weatherOfToday.json();
    displayTodayWeather()
})();


// display data

function displayTodayWeather(){
    let cartoona ="";
   
    for (const i = 0 ; i < todayWeather.lenght; i++) {
         
       cartoona = cartoona +  `<div class="day1 ">
        <div class="title-1 d-flex justify-content-between p-2"><h6 class="day">${todayWeather.current.is_day}</h6> <h6 class="date">${todayWeather.forecast.date}</h6></div>
    </div>
    <div class="Content-1 p-3 ">
        <h6>${todayWeather.location.name}</h6>
        <div class="main p-3 d-flex justify-content-between">
            <h2 class="tempretute"> ${todayWeather.day.maxtemp_c}</h2>
            <img src="${todayWeather.day.icon}" alt="Sunny">
        </div>
        <div class="status text-primary">${todayWeather.day.text}</div>
        <div class="info d-flex my-3">
            <div class="info-inner"><img src="./img/icon-umberella.png" alt="umprella"> <p>20%</p></div>
            <div class="info-inner"><img src="./img/icon-wind.png" alt="wind"> <p>18Km/h</p></div>
            <div class="info-inner"><img src="./img/icon-compass.png" alt="compass"> <p>East</p></div>
        </div>

    </div>`

        document.querySelector(".first").innerHTML = cartoona;
    }
    
}

                                                 // ............//

let commingWeather = [];

                                         // getting data for two more days
(async function(){
  let futureWeather = await fetch ("http://api.weatherapi.com/v1/forecast.json?key=c5dd02d749114d2287a144040240601&q=London&days=3&aqi=no&alerts=no")
  commingWeather = await futureWeather.json();
  dailyTommorowWeather()
  
})();
         

    
// display data

function dailyTommorowWeather(){
    let cartoona = "";
    for(var i = 0; i< commingWeather.lenght; i++){
        cartoona = cartoona + `<div class="day1 ">
        <div class="title-3 text-center p-2"><h6 class="day">${commingWeather.date}</h6></div>
    </div>
    <div class="Content-3 p-4 ">
      <div class="main p-3 text-center ">
      <img class="mb-3" src="${commingWeather.day.icon}" alt="Sunny">
      <h5 class="tempretute">${commingWeather.day.maxtemp_c} </h5>
      <p>${commingWeather.day.mintemp_c}</p>
      <div class="status text-primary text-center mb-5">${commingWeather.day.text}</div>
      </div>
  
    </div>`

        document.querySelector(".second").innerHTML = cartoona;
    }
}

                                                   // ............//

let searchWeather = [];

(async function(search){
    let searchingweather = await fetch ("http://api.weatherapi.com/v1/search.json?key=c5dd02d749114d2287a144040240601&q=London")
    searchWeather = await searchingweather.json();
    displayTodayWeather()
  })();


// searching about data

searchInput.addEventListener("keyup" , function(e){
    getWeather(e.target.value)
})