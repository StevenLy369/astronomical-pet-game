import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Alien } from '../src/alien';

const urlFun = "https://api.giphy.com/v1/gifs/pHYLxGVWf4J4DmS6k6?api_key=WZ6j341npaXaXQsbdICWWvyAE14rr9lY";
const urlHealth = "http://api.giphy.com/v1/gifs/1itJk0YC7kUYF6yv70?q=cute+cartoon+bandaid&api_key=5a0es7p3EfdqyxbDjaa2K7vQEL5m7V7i";
const urlBathroom = "http://api.giphy.com/v1/gifs/2wS9xmYJNsFUTzcNKU?q=cute+bathroom&api_key=5a0es7p3EfdqyxbDjaa2K7vQEL5m7V7i";
const urlFood = "http://api.giphy.com/v1/gifs/mB9gnpgb6q2TLAqOrW?q=cute+cake&api_key=5a0es7p3EfdqyxbDjaa2K7vQEL5m7V7i";
const urlBed = "http://api.giphy.com/v1/gifs/26DN5KMrgPam7qtYA?q=cute+cartoon+bed&api_key=5a0es7p3EfdqyxbDjaa2K7vQEL5m7V7i"

function displayGif(gifUrl){
  $(`#gif`).css("background-image",  "url("+ gifUrl + ")");
}


function hideGif(){
  setTimeout(() => {
    $("#gif").slideUp();
    $(".button").prop("disabled", false)
  }, 3200)
}


function displayAlien(alien){
  $("#pet-name").text(`Name: ${alien.name}`);
  $("#health").text(`Health:  ${alien.health}`);
  $("#bathroom").text(`Bathroom:  ${alien.bathroom}`);
  $("#hunger").text(`Hunger Level:  ${alien.hungry}`);
  $("#age").text(`Age: ${alien.increaseLife()}`);
  $("#happy").text(`Happiness: ${alien.happy}`);
}


function onDeath(alien, interval){
  $("#stats-row").hide();
  $("#img-div").hide();
  $("#btn-row").hide();
  $("#dead").show();
  $("#dead").text(`${alien.name} has died oh no!!!`)
  $("#funeral").show();
  clearTimeout(interval)
}


function update(alien){
  let interval = setInterval(() => {
    if(alien.alive === true){
      displayAlien(alien);
    } else {
     onDeath(alien, interval);
    }
  }, 250);
}

function engine(alien){
  alien.increaseHappy();
  alien.decreaseHappy();
  alien.increaseAge();
  alien.increaseBathroom();
  alien.increaseHunger();
  update(alien);
}


$(document).ready(function(){
  let alien;

  $("#create-btn").click(function(event){
    event.preventDefault();
    alien = new Alien($("#input-box").val());
    displayAlien(alien);
    $("#name-input-div").hide();
    $("#pet-display").show();
    engine(alien);
    alien.nameToString()
    console.log(alien.name)
  });

  $("#feed-btn").click(function(event){
      event.preventDefault();
      alien.feedFood();
      fetch(urlFood)
      .then(function(response){
        return response.json();
      })
      .then(function(jsonifiedResponse){
        let gifUrl = jsonifiedResponse.data.images.downsized_large.url;
        displayGif(gifUrl);
        $("#gif").slideDown();
        $(".button").prop("disabled", true);
        hideGif();

      })
  })
  
  $("#bath-btn").click(function(event){
    event.preventDefault();
    alien.goBathroom();
    fetch(urlBathroom)
    .then(function(response){
      return response.json();
    })
    .then(function(jsonifiedResponse){
      let gifUrl = jsonifiedResponse.data.images.downsized_large.url;
      displayGif(gifUrl);
      $("#gif").slideDown();
      $(".button").prop("disabled", true);
      hideGif();
  })
})
  
  $("#med-btn").click(function(event){
    event.preventDefault();
    alien.healthButton();
    fetch(urlHealth)
    .then(function(response){
      return response.json();
    })
    .then(function(jsonifiedResponse){
      let gifUrl = jsonifiedResponse.data.images.downsized_large.url;
      displayGif(gifUrl)
      $("#gif").slideDown();
      $(".button").prop("disabled", true);
      hideGif();
    })
  })
  
  $("#play-btn").click(function(event){
    event.preventDefault();
    alien.increaseHappy();
    fetch(urlFun)
    .then(function(response){
      return response.json();
    })
    .then(function(jsonifiedResponse){
      let gifUrl = jsonifiedResponse.data.images.downsized_large.url;
      displayGif(gifUrl)
      $("#gif").slideDown();
      $(".button").prop("disabled", true);
      hideGif();
    })
  })

  $("#sleep-btn").click(function(event){
    event.preventDefault();
    $("#sleep").toggle();
    $("#alien-pic").toggle();
    $("#house").toggle();
    fetch(urlBed)
    .then(function(reponse){
      return reponse.json();
    })
    .then(function(jsonifiedResponse){
      let gifUrl = jsonifiedResponse.data.images.downsized_large.url;
      displayGif(gifUrl)
      $("#gif").slideDown();
      $(".button").prop("disabled", true);
      hideGif();
    })
  })

  
  
});