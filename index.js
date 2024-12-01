

const weatherForm =document.querySelector(".weatherForm");
// const cityInput = document.querySelector("input");

const card = document.querySelector(".card");

// Remove the API before Pushing the code to github
const apikey ="d66961ac340c51ef0076e1356669b2f1";

const temp = document.querySelector('.tempDisplay');
const desc = document.querySelector('.descDisplay');
const humidityDisplay = document.querySelector(`.humidityDisplay`);

const ctyname = document.querySelector(".cityDisplay")

let btn = document.querySelector('.btn-cty');



function getWeather(){
    let cityInput = document.querySelector('#city-in').value;

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid="+ apikey + "&units=metric").then(response => response.json()).then(displayData)
}



const displayData = async (weather) => {
    console.log(weather)
    temp.innerHTML = await weather["main"]["temp"]
    desc.innerHTML = await weather["weather"][0]["description"]
    humidityDisplay.innerHTML = await weather["main"]["humidity"]
    ctyname.innerHTML = document.querySelector('#city-in').value
}


// weatherForm.addEventListener("submit", async event =>{

//     event.preventDefault();

//     const city = cityInput.value;

//     if(city){
        
//         try{
//             const weatherData = await getWeatherData (city);
//             displayWeatherInfo(weatherData);

//         }
//         catch(error){
//             console.error(error);
//             displayError(error);

//         }


//     }
//     else{
//         displayError("please enter a city ");
//     }

// });




// async function getWeather(city) {

//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

//     const response = await fetch(apiUrl);
    
//     if(!response.ok){
//         throw new Error("could not fetch weather data")
//     }

//     return await response.json();
    
    
// }

// function displayWeatherInfo (data){

//     const name: city,
//     main {temp , humidity},
//     weather: [{description, id}] = data;


//     card.textContent = "";
//     card.style.display ="flex"


//     const cityDisplay = documnet.createElement("h1");
//     const tempDisplay = documnet.createElement("p");

//     const humidityDisplay = documnet.createElement("p");

//     const descDisplay = documnet.createElement("p");

//     const WeatherEmoji = documnet.createElement("p");




//     cityDisplay.textContent = city;
//     tempDisplay.textContent= `${temp}°c`;
//     humidityDisplay.textContent = `humidity: ${humidity}`
//     descDisplay.textContent = description;
//     WeatherEmoji.textContent =getWeatherEmoji(id);




//     cityDisplay.classList.add(cityDisplay);
//     tempDisplay.classList.add("tempDisplay");
//     humidityDisplay.classList.add("humidityDisplay")
//     descDisplay.classList.add("descDisplay")
//     WeatherEmoji.classList.add("weatherEmoji")


//     card.appendChild(cityDisplay);
//     card.appendChild(tempDisplay);
//     card.appendChild(humidityDisplay)
//     card.appendChild(descDisplay)
//     card.appendChild(WeatherEmoji)
// }



// function getWeatherEmoji(weatherId){

//     switch(true)
//     case()

// }

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent ="";
    card.style.display ="flex";
    
    card.appendChild(errorDisplay)


}