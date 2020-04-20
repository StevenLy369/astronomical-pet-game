import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Alien } from '../src/alien';





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
    } else {
      console.log(alien.alive);
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
});