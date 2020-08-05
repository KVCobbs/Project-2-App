//const { link } = require("fs");

const deployedURL = ""
const URL = deployedURL ? deployedURL:"http://localhost:3000" //This is the URL being deployed and running

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

//Get all insults
const getInsults = async () => {
  //gets the insults
  const response = await fetch(`${URL}/insults`); //this line connects to line 4
  const data = await response.json();

 /*
The code below helped me put my database on screen and the line below that
The line below helped me put all my insults from my seed on screen but what I wanted was a 
random insult from my seed so thanks to Jordan I figured out how to use math.random to grab a 
random insult from the seed and put it on the page as a starter for the user. 
*/


    ////populate DOM with Insul
    // data.forEach((insult) => { 
      const randomInsultIndex = Math.floor(Math.random()*data.length)
        const $p = $(`<p>`).text(data[randomInsultIndex].name)
        $(`.first`).empty().append($p)
      
      console.log(data.length);
  }
//This function makes insults appear on screen
getInsults();



              //Create an Insult
        const addtoInsultIndex = async () => {
          //create new insult object from form data
              const newInsult = {
                "name":$('#newinsult').val(),
                }
          //send request to API to create insult
          const response = await fetch(`${URL}/insults`,{
          method:'POST',
            //lets server know to parse body as JSON data
            //Postmak makes headers for the user; next to body //can I make it paragraphs
            headers:{
              "content-Type":"application/json"
            },
            //pass in a js object and turn into a JSON string
            body:JSON.stringify(newInsult)
          })
        const data = response.json();
        //update the DOM and the submit input with new insult
        $('#newinsult').val("")
        getInsults();
    }

//This button from the index.html is what submits the new insult to the database. 
    $('#addbutton').on('click', addtoInsultIndex)

/*
    //Delete an insult
    const deleteInsult = async(event) => {
      //make request to delete rat.
      const response = await fetch('${URL}/rat/${event.target.id}', {
        method:"DELETE"
        //Nothing else is needed 
      })
      //update the DOM
      get Insults()
    };
*/





    //hamburger menu
    $(document).ready(function(){
      $('.burger').on('click',
      function () {
        $('nav').toggle(600)
      });
    });

