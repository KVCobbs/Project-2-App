# Project-2-App

Project Overview


Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline `backend` and `frontend`| Complete
|Day 2| Working RestAPI | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Incomplete
|Day 5| Final Touches and Present | Incomplete


Project Description:

My project is an insult library. The app will give you insults to save and use whenever you need. You can add your own special insults and even delete insults you dont think are good. 

Wireframes:
https://s3.amazonaws.com/assets.mockflow.com/app/wireframepro/fileexport/Export_Dcbee9f7213eb30a66ca34af5e7a27f9b.pdf

Time Martix:
https://docs.google.com/document/d/1hzmU1K8zH8t8FNEhCp88_mq8_iTX74kOZsqgFJ2UFyQ/edit?usp=sharing

MVP:

Hamburger menu

Frontend connected to Backend

Library to store/delete insults on seperate HTML page


PostMVP:

Slider for a clean insult version
Hamburger animation 


#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Hamburger menu | H | 6hr | 2hr | -hr|
| Frontend/Backend connection | H | 8hr | 6hr | 10hr|
|drop down menu from hamburger to functions| M | 8hr | 2hr | 3hr|



#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Clean version slider | L | 3hr | -hr | -hr|
| Hamburger animation | L | 6hr | 2hr | 2hr|
| User login | M | 6hr | 4hr | 4hr|
| Seperate library page | H | 8hr| -hr | -hr |


Additional Libraries:
N/A


Code Snippet:
Use this section to include a brief code snippet of functionality that you are proud of an a brief description

I call this code my fraken stien baby because I took bits and pieces of code and mixed it together and it worked.

const getInsults = async () => {
  //gets the insults
  const response = await fetch(`${URL}/insults`); //this line connects to line 4
  const data = await response.json();
  insults = await data; //To bring the data here we brought it from the seed to the app using await data which is the seed.    
  }
        const renderInsults = () => {
          console.log("whatever.")
          const randomInsultIndex = Math.floor(Math.random()*insults.length)
        const $p = $(`<p>`).text(insults[randomInsultIndex].name).attr("id", insults[randomInsultIndex]._id)
        $p.on('click',) //Then here we changed the data to insult.  
        $(`.first`).empty().append($p) 
        console.log(insults.length);
        getUsers()
        }


Issues and Resolutions:
Use this section to list of all major issues encountered and their resolution.

This line of code messed up my media query so hard cause I try to add too much stuff. my idea was to push everything to a 
certain point in both desktop and mobile and it just messed everything up in both. I took out line 95. 101. and 102.

#generatebutton{
   position:absolute
  background-color:#9E6840;
  border:white;
  color:white;
  text-align:center;
  text-decoration:none;
display:inline-block
left: -300px;
  font-size:55px;
  border-radius:25px;
  transition-duration:0.4s;
  cursor:pointer;
}


