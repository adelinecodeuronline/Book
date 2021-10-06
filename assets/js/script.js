window.onload = function() {

//portrait's click
let img= document.querySelector('#portrait');
img.addEventListener("click", hoverProfile);

let pictureLink = document.querySelector('#picture');
pictureLink.addEventListener("click", picture);

let github = document.querySelector('#github');
github.addEventListener("click", githubLink);

}


//portrait's click
function hoverProfile() {
    let profile = document.querySelector("#about2");
    profile.style.display = "block"; 
    
}



//bubble contact
function bubble() {
    let popup = document.querySelector("#myPopup");
    popup.classList.toggle("show");
  }

  function bubbleOff() {
    document.querySelector(".popup").style.display = "none";
  }



//Profile's overlay
function onProfile() {
    document.querySelector("#overlay-profile").style.display = "block";
  }
  
  function offProfile() {
    document.querySelector("#overlay-profile").style.display = "none";
  } 



//CV's overlay
function cv() {
    document.querySelector("#overlay-cv").style.display = "block";
  }
  
  function offCv() {
    document.querySelector("#overlay-cv").style.display = "none";
  } 


//Projects's link

function picture() {
    window.open('./projets.html', '_blank');
       
}

//Github's link

function githubLink() {
    window.open('https://github.com/adelinecodeuronline', '_blank'); 
}
    
    







  
