import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Alien } from '../src/alien';

// const urlFun = "api.giphy.com/v1/gifs/pHYLxGVWf4J4DmS6k6?q=cute+cartoon+dog&api_key=WZ6j341npaXaXQsbdICWWvyAE14rr9lY";
// const urlBandaid = "http://api.giphy.com/v1/gifs/1itJk0YC7kUYF6yv70?q=cute+cartoon+bandaid&api_key=5a0es7p3EfdqyxbDjaa2K7vQEL5m7V7i";
// const urlBathroom = "http://api.giphy.com/v1/gifs/2wS9xmYJNsFUTzcNKU?q=cute+bathroom&api_key=5a0es7p3EfdqyxbDjaa2K7vQEL5m7V7i";
// const urlFood = "http://api.giphy.com/v1/gifs/mB9gnpgb6q2TLAqOrW?q=cute+cake&api_key=5a0es7p3EfdqyxbDjaa2K7vQEL5m7V7i";
// const urlBed = "http://api.giphy.com/v1/gifs/jp8ubVlWwJ8w8?q=cute+cartoon+bed&api_key=5a0es7p3EfdqyxbDjaa2K7vQEL5m7V7i"



function displayAlien(alien){
  $("#pet-name").text(`Name: ${alien.name}`);
  $("#health").text(`Health:  ${alien.health}`);
  $("#bathroom").text(`Bathroom:  ${alien.bathroom}`);
  $("#hunger").text(`Hunger Level:  ${alien.hungry}`);
  $("#age").text(`Age: ${alien.increaseLife()}`);
  $("#happy").text(`Happiness: ${alien.happy}`);
}


function update(alien){
  setInterval(() => {
    if(alien.alive === true){
      displayAlien(alien);
      console.log(alien.age);
      console.log(alien.alive);
    } else {
      return alien.alive == false;   
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
  });

  $("#feed-btn").click(function(event){
      event.preventDefault();
      alien.feedFood();
  })
  
  $("#bath-btn").click(function(event){
    event.preventDefault();
    alien.goBathroom();
  })
  
  $("#med-btn").click(function(event){
    event.preventDefault();
    alien.healthButton();
  })
  
  $("#play-btn").click(function(event){
    event.preventDefault();
    alien.increaseHappy();
  })

  $("#sleep-btn").click(function(event){
    event.preventDefault();
    $("#sleep").toggle();
    $("#alien-pic").toggle();
    $("#house").toggle();
  })

  
  
});