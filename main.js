// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.getElementById("modal");
modal.classList.add("hidden");

const likeButtons = document.querySelectorAll(".like-glyph");
likeButtons.forEach(handleLike);

function handleLike(item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    if(e.target.innerText === EMPTY_HEART){
      mimicServerCall()
      .then(() => {
        e.target.innerText = FULL_HEART;
        e.target.classList.add("activated-heart");
      })
      .catch((error) => {
        document.getElementById("modal").classList.remove("hidden");
        document.getElementById("modal-message").innerText = error.message;
        setTimeout(() => document.getElementById("modal").classList.add("hidden"), 3000);
      })      
    }
    else{
      e.target.innerText = EMPTY_HEART;
      e.target.classList.remove("activated-heart");
    }   
  });
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------


function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
