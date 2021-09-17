window.onload = function() {

//Media query
/*let styleDesktop = document.querySelector('#desktop');
const mediaQuery = window.matchMedia('(max-width: 576px)')
const mediaDesktop = window.matchMedia('(min-width: 970px)')
if(mediaQuery.matches) {
  styleDesktop.disabled = true;
} else if (mediaDesktop.matches) {
  styleDesktop.disabled = false;
}*/

 
////////////drag and scroll section  
const slider = document.querySelector('.parent');
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
  mouseDown = false;
};

slider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);

}



////////Open overlay's project detail
//ACS's overlay
function on() {
  document.querySelector("#overlay-acs").style.display = "block";
}

function off() {
  document.querySelector("#overlay-acs").style.display = "none";
} 


//Azuream's overlay
function onAzuream() {
  document.querySelector("#overlay-azuream").style.display = "block";
}

function offAzuream() {
  document.querySelector("#overlay-azuream").style.display = "none";
} 

//Challeng'o' matic's overlay
function onChallengomatic() {
  document.querySelector("#overlay-challengomatic").style.display = "block";
}

function offChallengomatic() {
  document.querySelector("#overlay-challengomatic").style.display = "none";
} 



