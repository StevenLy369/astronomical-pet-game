import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Alien } from '../src/alien'





function displayAlien(alien){
$("#pet-name").text(`Name: ${alien.name}`)
$("#health").text(`Health:  ${alien.health}`);
$("#bathroom").text(`Bathroom:  ${alien.bathroom}`);
$("#hunger").text(`Hunger Level:  ${alien.hungry}`);
$("#age").text(`Age: ${alien.increaseLife()}`);
$("#happy").text(`Happiness: ${alien.happy}`)
}




$(document).ready(function(){
    let alien;


    $("#create-btn").click(function(event){
        event.preventDefault();
        alien = new Alien($("#input-box").val());
        displayAlien(alien);
        $("#name-input-div").hide();
        $("#pet-display").show();
        console.log("works");
    })
})