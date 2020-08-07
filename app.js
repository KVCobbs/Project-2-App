//const { link } = require("fs");

//const signIn = require("../Project-2-App-Backend/Models/Signin");

const deployedURL = ""
const URL = deployedURL ? deployedURL:"http://localhost:3000" //This is the URL being deployed and running

///////////////////
//Global Variables
///////////////////
const $insultInput = $("#createinput");
const $insultsSelect = $("#createselect");
//button with the property create
const $button = $("#createbutton");
const $insultEditInput = $("#updateInsult");
//button with the property edit
const $updateButton = $("#updatebutton");
console.log($updateButton);
const $ul = $("ul");
let insults = [] 
let users = [] 

//////////////////////////////
//Define your functions here
///////////////////////////////

//Get from Api and populate 

//Get all insults
const getInsults = async () => {
  //gets the insults
  const response = await fetch(`${URL}/insults`); //this line connects to line 4
  const data = await response.json();
  insults = await data; //To bring the data here we brought it from the seed to the app using await data which is the seed.

 /*
The code below helped me put my database on screen and the line below that
The line below helped me put all my insults from my seed on screen but what I wanted was a 
random insult from my seed so thanks to Jordan I figured out how to use math.random to grab a 
random insult from the seed and put it on the page as a starter for the user. 
*/

    ////populate DOM with Insult
    // data.forEach((insult) => { 
      renderInsults()
        
  }
        const renderInsults = () => {
          console.log("whatever.")
          const randomInsultIndex = Math.floor(Math.random()*insults.length)
      //So here is where we made the insults generate randomly using Math.Random and at the end of this line
      //.attr we are using it to look for the ID of the insult evertime one is generated and makes a new paragrah.
        const $p = $(`<p>`).text(insults[randomInsultIndex].name).attr("id", insults[randomInsultIndex]._id)
        $p.on('click',) //Then here we changed the data to insult. so insults = await data meaning it's 
        $(`.first`).empty().append($p) //Just waiting for the data to come. 
        console.log(insults.length);
        getUsers()
        }
      
//This function makes insults appear on screen
$('#generatebutton').on('click', renderInsults)

      getInsults()

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


    //Delete an insult
    const deleteInsult = async(event) => {
      //make request to delete insult. 
      //This is suppose to select the first p tag that is the child of another element. 
        const delInsult = $("p:first-child").attr("id")
          const response = await fetch(`${URL}/insults/${delInsult}`, {
          method:"DELETE"
          })
          $("p:first-child").remove()
        };
     //update the DOM
      //This button will delete an insult from the Insult Index. 
      $('#deletebutton').on('click', deleteInsult)


            //The idea I was going for with update is that user can update insults. like if you wanted to fix a typo
          //Update an Insult
          const updateInsult = async(event) => {
            console.log("This is alot of insults jesus christ.");
              const $pupdate = $(`p`).attr("id")

            //create updated insult Object.
              const updatedInsult = {
                "name":$insultEditInput.val()
              } 
              console.log(updatedInsult);
              //make our put request
              const response = await fetch(`${URL}/insults/${$pupdate}`, {
                method:"PUT",
                headers:{
                  "Content-Type":"application/json"
                },
                  body:JSON.stringify(updatedInsult)
            // })
        })
        const data = await response.json()
        console.log(data);
        getInsults();
        }
                //update the DOM
                $updateButton.on('click', updateInsult)
                getInsults();
                //What I learned with Alex is that update is the hardest and I need to make sure that I double check things 4 times before testing

//////////////////////////////////////////////////////////////////////////

    //hamburger menu
    $(document).ready(function(){
      $('.burger').on('click',
      function () {
        $('nav').toggle(600)
      });
    });
  

    //////////////////////////////////////////////////////////////////////
    const getUsers = async () => {
      //gets the insults
      const response = await fetch(`${URL}/signIn`); //this line connects to line 4
      const data = await response.json();
        users = await data; //To bring the data here we brought it from the seed to the app using await data which is the seed.
    
     /*
    The code below helped me put my database on screen and the line below that
    The line below helped me put all my insults from my seed on screen but what I wanted was a 
    random insult from my seed so thanks to Jordan I figured out how to use math.random to grab a 
    random insult from the seed and put it on the page as a starter for the user. 
    */
   const renderUsers = () => {
    console.log("whatever2.")
    const randomsignInIndex = Math.floor(Math.random()*users.length)
//So here is where we made the insults generate randomly using Math.Random and at the end of this line
//.attr we are using it to look for the ID of the insult evertime one is generated and makes a new paragrah.
  const $p2 = $(`<p>`).text(users[randomsignInIndex].name).attr("id", users[randomsignInIndex]._id)
  $p2.on('click',) //Then here we changed the data to insult. so insults = await data meaning it's 
  $(`.first`).append($p2) //Just waiting for the data to come. 
  console.log(users.length);
  }
        ////populate DOM with Insult
          renderUsers()
            
      }
          
    //This function makes insults appear on screen
    //$('#generatebutton').on('click', renderUsers)
    
        //  getUsers()

      /*
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
          */