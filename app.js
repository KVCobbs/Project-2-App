//const { link } = require("fs");

const deployedURL = ""
const URL = deployedURL ? deployedURL:"http://localhost:3000" //This is the URL being deployed and 

///////////////////
//Global Variables
///////////////////
const $insultInput = $("#createinput");
const $insultsSelect = $("#createselect");
//button with the property create
const $button = $("#createbutton");
const $insultEditInput = $("#editinput");
//button with the property edit
const $editButton = $("#editbutton");
const $ul = $("ul");

//////////////////////////////
//Define your functions here
///////////////////////////////

//Get from Api and populate
const getInsult = async () => {
    //API call using Async and Await
    const response = await fetch(`${URL}/Insults`); //This line is sticking to line 4 
    const data = await response.json();
}
//Get all insults
const getInsults = async () => {
  //gets the insults
  const response = await fetch(`${URL}/insults`);
  const data = await response.json();

  //This helped me put my database on screen
    //populate DOM with Insults
   // data.forEach((insult) => {
    const randomInsultIndex = Math.floor(Math.random()*data.length)
      const $p = $(`<p>`).text(data[randomInsultIndex].name)
       $(`.first`).append($p)
    
    console.log(data.length);
}

getInsults();

//hamburger menu
$(document).ready(function(){
  $('.burger').on('click',
  function () {
    $('nav').toggle(600)
  });
});



/*
//Populate selector with Data
data.forEach((Insults) => {
    const $option = $('<option>').attr('value',Insults._id).text(Insults.name)
    $insultSelect.append($option);

    const $option2 = $('<option>').attr('value',Insults._id).text(Insults.name)
    $pizzaEditSelect.append($option2);
});
*/
