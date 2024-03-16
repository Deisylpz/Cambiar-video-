let number = 0; //It allows to show the videos in order.
const data = [] //Array that save all the videos of the ajax.json

//Elements of the page.
const videoArea = document.getElementById("video");
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const button = document.getElementById('btn');

//Constructor to create Video Objects.
function Video(name, content, url) {
  this.name = name;
  this.content = content;
  this.url = url;
}

//It allows to change the videos. 
function changeVideo() {
  titleArea.innerText = data[number].name;          //Change the tittle.
  contentArea.innerText = data[number].content;     //Change the description of the viideo.
  videoArea.setAttribute("src", data[number].url);  //Put the link of the video in the iframe.
  number == 2 ? number = 0 : number++;              //If number == 2, then number 0. In any other case, numer++.
}

//It allows to get the data from the JSON.
function getData() {
  const request = new XMLHttpRequest(); //Create the XMLHTTPRequest Object.

  //Configurate the onreadystatechange to load the videos into the array data.
  request.onreadystatechange = function () {  
    if (request.readyState == 4 && request.status == 200) {
      for (i = 0; i < 3; i++) {
        data[i] = new Video(request.response[i].title, request.response[i].content, request.response[i].url)
      }
    }
  }
  //Make the operation GET.
  request.open("GET", "./js/ajax.json");
  request.responseType = "json";
  request.send();
}

window.onload = getData;      //When all the elements were loaded, then it will get the data.
button.onclick = changeVideo; //When the user clicks the button, the video will change.