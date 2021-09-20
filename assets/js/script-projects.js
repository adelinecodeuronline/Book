window.onload = function() {

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



/////////////////////////////////////////////////////filters

const filters = document.querySelectorAll('.white-filters');
filters.forEach(button => {
  button.addEventListener('click', filterCards);
} );

const reset = document.querySelector('#all');
reset.addEventListener('click', allDisplay);

}


//////////filters


function filterCards() {
  let filtering = this.dataset.filter;
  let cards = document.querySelectorAll('.card');
  
  cards.forEach(item => {
    if(item.classList.contains(filtering)){
      item.style.display = "inline-block"; 
    } else {
      item.style.display = "none";
    }
  });
  
  }

function allDisplay() {
  let cards = document.querySelectorAll('.card');
  
  for(i = 0; i < cards.length; i++) {
  cards[i].style.display = "inline-block";
}

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

//KoolCake's overlay

function onKoolcake() {
  document.querySelector('#overlay-koolcake').style.display = "block";
}

function offKoolcake() {
  document.querySelector('#overlay-koolcake').style.display = "none";
}


 ///////////////////////////////////////////// 

//Media query
/*let styleDesktop = document.querySelector('#desktop');
const mediaQuery = window.matchMedia('(max-width: 576px)')
const mediaDesktop = window.matchMedia('(min-width: 970px)')
if(mediaQuery.matches) {
  styleDesktop.disabled = true;
} else if (mediaDesktop.matches) {
  styleDesktop.disabled = false;
}*/
