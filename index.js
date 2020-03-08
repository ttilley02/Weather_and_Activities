'use strict';

//Global Variable to how response outputs
let activityStorage= [
{activity:"Sailing",
apparentTemperatureLow:0,
probabilityOfPrecipitation:100,
windSpeed:15,
describe:"Sailing is ...",
image:"img/sailing.jpg",
imageico:"img/sailingico.jpg",
activityTense: 'Sail.'
}
,
{
activity:"Hiking",
apparentTemperatureLow:0,
probabilityOfPrecipitation:100,
windSpeed:100,
describe:"Hiking is ...",
photo:"placeholder",
links:"placeholderForLinks",
image:"img/hiking.jpg",
imageico: "img/hikingico.jpg",
activityTense: 'hike.'
}
,
{
activity:"Fishing",
apparentTemperatureLow:0,
probabilityOfPrecipitation:60,
windSpeed:10,
describe:"Fishing is ...",
photo:"placeholder",
links:"placeholderForLinks",
image:"img/fishing.jpg",
imageico: "img/fishingico.jpg",
activityTense: 'fish.'
}
,
{
activity:"Drone_Flying",
apparentTemperatureLow:100,
probabilityOfPrecipitation:10,
windSpeed:10,
describe:"Drone flying is ...",
photo:"placeholder",
links:"placeholderForLinks",
image:"img/drone.jpg",
imageico:"img/droneico.jpg",
activityTense: 'fly a drone.'
}
,

{
activity:"Kite_Flying",
apparentTemperatureLow:32,
probabilityOfPrecipitation:40,
windSpeed:100,
describe:"Kite flying is ...",
photo:"placeholder",
links:"placeholderForLinks",
image:"img/kite.jpg",
imageico:"img/kiteico.jpg",
activityTense: 'fly a kite.'
}
,

{
activity:"Star_Gazing",
apparentTemperatureLow:32,
probabilityOfPrecipitation:75,
windSpeed:100,
describe:"Star gazing is ...",
photo:"placeholder",
links:"placeholderForLinks",
image:"img/stars.jpg",
imageico: "img/starsico.jpg",
activityTense: 'gaze at the stars.'
}
,

{
activity:"Baseball",
apparentTemperatureLow:45,
probabilityOfPrecipitation:30,
windSpeed:100,
describe:"baseball is ...",
photo:"placeholder",
links:"placeholderForLinks",
image:"img/baseball.jpg",
imageico:"img/baseballico.jpg",
activityTense: 'play baseball.'
}
,

{
activity:"Rock_Climbing",
apparentTemperatureLow:40,
probabilityOfPrecipitation:75,
windSpeed:100,
describe:"Rock Climbing is ...",
photo:"placeholder",
links:"placeholderForLinks",
image:"img/rock.jpg",
imageico:"img/rockico.jpg",
activityTense: 'rock climb.'
}
,

{
activity:"Cycling",
apparentTemperatureLow:50,
probabilityOfPrecipitation:80,
windSpeed:5,
describe:"Cycling is ...",
photo:"placeholder",
links:"placeholderForLinks",
image:"img/cycling.jpg",
imageico:"img/cyclingico.jpg",
activityTense: 'bike.'
}
,

{
activity:"Motorcycling",
apparentTemperatureLow:60,
probabilityOfPrecipitation:60,
windSpeed:10,
describe:"Motorcyling is ...",
photo:"placeholder",
links:"placeholderForLinks",
image:"img/moto.jpg",
imageico:"img/motoico.jpg",
activityTense: 'go for a ride.'
}
,
{
  activity:"Skateboarding",
  apparentTemperatureLow:40,
  probabilityOfPrecipitation:30,
  windSpeed:5,
  describe:"Skateboarding is ...",
  photo:"placeholder",
  links:"placeholderForLinks",
  image:"img/skatepage.jpg",
  imageico:"img/skateico.png",
  activityTense: 'go skate.'
  }
  ,
{
  activity:"Jogging",
  apparentTemperatureLow:20,
  probabilityOfPrecipitation:80,
  windSpeed:10,
  describe:"Running is ...",
  photo:"placeholder",
  links:"placeholderForLinks",
  image:"img/runpage.jpg",
  imageico:"img/runico.png",
  activityTense: 'go for a run.'
  }
  ,
{
  activity:"Basketball",
  apparentTemperatureLow:40,
  probabilityOfPrecipitation:60,
  windSpeed:30,
  describe:"Basketball is ...",
  photo:"placeholder",
  links:"placeholderForLinks",
  image:"img/hooppage.jpg",
  imageico:"img/hoopico.png",
  activityTense: 'go play basketball.'
  }
  ,
{
  activity:"Golf",
  apparentTemperatureLow:50,
  probabilityOfPrecipitation:20,
  windSpeed:30,
  describe:"Golf is ...",
  photo:"placeholder",
  links:"placeholderForLinks",
  image:"img/golfpage.png",
  imageico:"img/golfico.png",
  activityTense: 'go golfing.'
  }
  ,
{
  activity:"American_Football",
  apparentTemperatureLow:10,
  probabilityOfPrecipitation:80,
  windSpeed:10,
  describe:"Football is ...",
  photo:"placeholder",
  links:"placeholderForLinks",
  image:"img/footpage.png",
  imageico:"img/footico.png",
  activityTense: 'go play football.'
  }
  ,
{
  activity:"Tennis",
  apparentTemperatureLow:55,
  probabilityOfPrecipitation:20,
  windSpeed:30,
  describe:"Tennis is ...",
  photo:"placeholder",
  links:"placeholderForLinks",
  image:"img/tennpage.jpg",
  imageico:"img/tennico.png",
  activityTense: 'go play tennis.'
  }
  ,
{
  activity:"Soccer",
  apparentTemperatureLow:55,
  probabilityOfPrecipitation:20,
  windSpeed:10,
  describe:"Soccer is ...",
  photo:"placeholder",
  links:"placeholderForLinks",
  image:"img/soccpage.png",
  imageico:"img/soccico.png",
  activityTense: 'go play soccer.'
  }
];

let doableActivities=[];
let locationGlobal;
let forecastOverview;

//Test against weather properties
function canIDoIt(tempNum,precipNum,windNum){
  let newArray = [];
  

  for(let i = 0 ; i < activityStorage.length; i++)
  {
    if(tempNum >= activityStorage[i].apparentTemperatureLow && precipNum <= activityStorage[i].probabilityOfPrecipitation && windNum <= activityStorage[i].windSpeed)
    {
      newArray.push(activityStorage[i]);
      
      
    }
  }
  
  
  suggestedActivities(newArray);
}

//Updates Dom with confirmation of being able to do something
function displayResults(responseJson) {
       $(responseJson).ready(function () {
       $('.loading').addClass('hidden');
       
     
    })
    let apTemp = Math.round((responseJson.properties.maxTemperature.values[0].value * 1.8) + 32) ;
    let precip = responseJson.properties.probabilityOfPrecipitation.values[0].value;
    let wind = Math.round(responseJson.properties.windSpeed.values[0].value);

  
    let activitiesList = canIDoIt(apTemp,precip,wind);
    doableActivities = canIDoIt(apTemp,precip,wind);
}
    
  
   
    

// Provides forecast upon the click of the forecast event listener
function displayForecast(forecastResponse){

 let forecastHtml = `<h1>Forecast</h1>
 <img src=${forecastResponse.properties.periods[0].icon}>
 <br>
 <br>
 <p class='details-f'> ${forecastResponse.properties.periods[0].name}
 <br><br>temperature: ${forecastResponse.properties.periods[0].temperature}F°
 <br><br>Wind Speed: ${forecastResponse.properties.periods[0].windSpeed}
 <br><br>wind Direction: ${forecastResponse.properties.periods[0].windDirection}
 <br><br>${forecastResponse.properties.periods[0].detailedForecast}
</p>
 
<br>
 <input type="button" class="activites" value="Suggested Activites">
 <br>
 <input class="home" type="button" value="Start Over">`
 
 $('.forecast').on('click', e => {
     $('.container').html(forecastHtml)
 })
}


//Loops the Array of doable activities determed in canIdo function and prints to the DOM

function suggestedActivities(doableStuff){
  let qualifiedActivities = 
  `
  <h1>The Weather seems right for...</h1>
  <section class= "activitiesList">

  <ul style="list-style: none;" class="js-suggested details">
  </section>
  `

 $('.container').on('click', '.activites', e => {
     
     $('.container').html(qualifiedActivities)
     
      
     for(let i = 0; i < doableStuff.length; i++){
      let activityCorrected = doableStuff[i].activity.replace("_", " ")
      $(".js-suggested").append(
      `<div class="${doableStuff[i].activity} activity">
      
      <img src=${doableStuff[i].imageico} class="activity-photo">
      
      <p>${activityCorrected}</p>
      </div>
      
      `
     )
      
    }   
    $(".container").append(
      `
      <br>
      <input class="home" type="button" value="Start Over">
      `
      )
      activityPages(doableStuff)
 })
}
// Creates specific activity information up clicking the activity element

function activityPages(doableStuff){
  for(let i = 0; i < doableStuff.length; i++){
    let activityCorrected = doableStuff[i].activity.replace("_", " ")
   $(`.${doableStuff[i].activity}.activity`).on('click', e=>{

    let pageHtml = 
    `
    
    <section class="box">
    <h1>${activityCorrected}</h1>
  
    <img src=${doableStuff[i].image} class="activity-photo-big" >
      
    <br>
    <ul>
      <li class="wikipedia details"><span class='details'>Excerpt from Wiki:</span><br></li>
      <br>
      <li class="duck details"><a href='https://duckduckgo.com/?t=ffab&q=${doableStuff[i].activity}+${locationGlobal}&ia=places'> ${activityCorrected} nearby  </a></li>
    </ul>
    <section class="buttonBlock">
    <input class="back" type="button" value="Back">
    <input class="home" type="button" value="Start Over">
    <section class="buttonBlock">
    </section>
    
    `

    $('.container').html(pageHtml)
    wikiSearch(doableStuff[i].activity);

  })
   
  }
  backButton(doableStuff);
}

//Edits the DOM and recreates the activities listing

function backButton(doableStuff){
$('.container').on('click',".back", e=> {
    
    let qualifiedActivities = 
    `
    <h1>Look at what you can do</h1>
    <section class= "activitiesList">

    <ul style="list-style: none;" class="js-suggested">
    </section>
    `
$('.container').html(qualifiedActivities)
     for(let i = 0; i < doableStuff.length; i++){
      let activityCorrected = doableStuff[i].activity.replace("_", " ")
      $(".js-suggested").append(
       `
       <div class="${doableStuff[i].activity} activity">
       <img src=${doableStuff[i].imageico} class="activity-photo">
       <p>${activityCorrected}</p>
       </div>
      `
      )}
      $(".container").append(
        `
        <br>
        <input class="home" type="button" value="Start Over">
        `
        )     
    activityPages(doableStuff);  
  })
  

}

//Edits DOM and recreates the home screen HTML

function homeButton(){
  $('.container').on('click',".home", e=> {
  $(".container").html(
    `
    <h1>Weather for Activities</h1>

    <form id="js-form" class="search-form css-search">
           
 
    <input type="text" name="location" class="location-query" placeholder="Enter a zip, address or city">
    <button type="submit">Submit</button>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <input class="click" type="button" value="Use current Location">
    <br>
    <input class="forecast" type="button" value=" Check your forecast">
    </form>
    <main>
        <section class="flex-container">
           <section class="js-results results hidden">
           
            </section>
        </section>
    </main>
    `
  )
  
  $(allfunctions);
  
        
      
  })
}

//MediaWiki API 

function wikiSearch(searchterm){
var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "query",
    list: "search",
    srsearch: searchterm,
    format: "json"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
           $('.wikipedia').append(
            `
            ${response.query.search[0].snippet}.....
            <a href='https://en.wikipedia.org/wiki/${searchterm}'>continue here</a>

            `)
      })
    .catch(function(error){console.log(error);});
 
}


//Uses the user input of thier coordinates to find the weather grid area to report on.
function getWeather(coords) {
    const url = `https://api.weather.gov/points/${coords}/`
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        
        .then(
          responseJson => getGridData(responseJson.properties.forecastGridData),
         
        )
        .catch(err => {
            displayError(err.message);
        });
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        
        .then(
          responseJson => getforecastOverview(responseJson.properties.forecast),
         
        )
        .catch(err => {
            displayError(err.message);
        });        
         
} 

//Gets actual weather properties to examine
function getGridData(newURL) {
    const url = newURL;
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        
       
        .then(responseJson => 
         
         displayResults(responseJson)
        )
        .catch(err => {
            displayError(err.message);
        });
        
}

//Gets infor for forecast overview
function getforecastOverview(newURL) {
  const url = newURL;
  fetch(url)
      .then(response => {
          if (response.ok) {
              return response.json();
          }
          throw new Error(response.statusText);
      })
      
     
      .then(responseJson => 
       
        displayForecast(responseJson)
      )
      .catch(err => {
          displayError(err.message);
      });
      
}


//HTML for error scenario
function displayError(error) {
    console.log('displayError ran');
    $('.js-results').html(`<h3 class="error">Something went wrong: ${error}</h3>`)
    $('.loading').addClass('hidden');
    $('.js-results').removeClass('hidden')
}



//relays position object
function success(geoLocationPos){
  let user = geoLocationPos.coords;

  relayPosition(user)
}

//calls navigator and runs sucess function
function getPos(){
 $('.click').on('click', e =>{
  $('#js-form').html(`<input class="forecast" type="button" value=" Check your forecast">`)
  
  window.navigator.geolocation.getCurrentPosition(success)
  
  })
}

//sets coordinates to varibale
function relayPosition(user){

    let latt = user.latitude
    let long = user.longitude
   

    //the rest of the code in this function and display position isnt needed
    let coords = latt + "," + long;
    locationGlobal = coords;

    getWeather(coords)
}


//listens for input from user for a location query then passes value to coordinates conversion.
function locationQuery() {
  $('#js-form').submit(function(event) {
    event.preventDefault();
    
    let query = $('.location-query').val();
    locationGlobal= query;
    $('.location-query').val('');
    
    queryBasedCoords(query)

  });
}

//BING API fetch call to serach location entered by user.
function queryBasedCoords(query) {
  $('#js-form').html(`<input class="forecast" type="button" value=" Check your forecast">`)
  
  const url = `http://dev.virtualearth.net/REST/v1/Locations/${query}?maxResults=1&key=AonXLGNhvKvknSiJ_NL7Mi9R0_I2uy-wUaFmSeR7AdvlMVZ1fe3rRiFDqNcL1spi`
 
  fetch(url)
  .then(function(response){return response.json();})
  .then(function(response) {
        coordsFormat(response.resourceSets[0].resources[0].point.coordinates);
    })
  .catch(function(error){console.log(error);});

}

//converts coordinate Array from Bing API into usable string for National Weather Service API

function coordsFormat(bingArray){
  let newstring = bingArray.toString();
   
  getWeather(newstring);


}


//Invokes all functinons not invoked within others

function allfunctions(){
getPos();
homeButton();
locationQuery();
}




$(allfunctions);

