const nextButton = document.querySelector('.next-button');
const levelOne = document.querySelector('.level-one');
const levelTwo = document.querySelector('.level-two');
const uiLevel = document.querySelector('.ui-level');
const uiMessage = document.querySelector('.ui-message');
const spookyPicture = document.querySelector('.spooky-picture');
const screamSound = document.querySelector('.scream-sound');
const collisionCheck = (value) => {
     if(value === 'maze-border'){
          alert('you lost..... try again.');
     }
     if(value === 'finish'){
          nextButton.style.opacity = 1;
          nextButton.style.pointerEvents = 'all';
          levelOne.style.pointerEvents = 'none';
     }
     if(value === 'end-game'){
          screamSound.play();
          spookyPicture.style.display = 'block';
          document.body.style.backgroundColor = 'black';
     }
};
window.addEventListener('mousemove',(event) => {
     let check = event.target.classList.value;
     collisionCheck(check);
});
nextButton.addEventListener('click',() => {
     levelOne.style.display = 'none';
     levelTwo.style.display = 'block';
     nextButton.style.opacity = 0;
     nextButton.style.pointerEvents = 'none';
     uiLevel.textContent = 'Level 2';
     uiMessage.textContent = 'One more to go.....';
});