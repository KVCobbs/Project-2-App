//const { link } = require("fs");

const deployedURL = ""
const URL = deployedURL ? deployedURL:"http://localhost:3000" //This is the URL being deployed and 

//Global Variables
///////////////////
//const $insultInput = $("#createinput");
//const $insultsInput = $("#createselect");

//button with the property create
const $button = $("#createbutton");
const $insultEditInput = $("#editinput");

//button with the property edit
const $editButton = $("#editbutton");
const $ul = $("ul");

//Define your functions here
///////////////////////////////

//Get from Api and populate
const getInsult = async () => {
    //API call using Async and Await
    const response = await fetch(`${URL}/Insults`); //This line is sticking to line 4 
    const data = await response.json();
}

/*
//Populate selector with Data
data.forEach((Insults) => {
    const $option = $('<option>').attr('value',Insults._id).text(Insults.name)
    $insultSelect.append($option);

    const $option2 = $('<option>').attr('value',Insults._id).text(Insults.name)
    $pizzaEditSelect.append($option2);
});
*/

//Get all insults
const getInsults = async () => {
    //gets the insults
    const response = await fetch(`${URL}/insults`);
    const data = await response.json();
  //  console.log(data);

//This helped me put my database on screen
    //populate DOM with Insults
   // data.forEach((insult) => {
    const randomInsultIndex = Math.floor(Math.random()*data.length)
      const $p = $(`<p>`).text(data[randomInsultIndex].name)
       $(`.first`).append($p)
    
    console.log(data.length);
   // const randomInsultIndex = Math.floor(Math.random()*data.length)
}


getInsults();

//const insultsArray = [ ]






/* Potential throwaway code
//select insults container div
const insults = document.querySelector('.insults')
//select submit button
  //select submit-edit button
const editSubmit = document.getElementById('submit-edit')
//select delete button
const deleteButton = document.getElementByIdById('delete')

//stores which item edit/delete when the edit model is up 
let currentlyEditing = ''
*/


//hamburger menu
   $(document).ready(function(){
    $('.burger').on('click',
    function () {
      $('nav').toggle(600)
    });
  });
