// Kung Fu Panda Character Look Up

// HTML element variables
let nameDisplay = document.getElementById('character-name');
let charImg = document.getElementById('main-img');
let quote = document.getElementById('quote');
let searchBtn = document.getElementById('search');

// Event Listener
searchBtn.addEventListener('click', searchClicked);

// Event Function
function searchClicked() {
  // Get Input Value (what character to look for?)
  let name = document.getElementById('input-name').value;
  name = name.toLowerCase();

  // Test Input Variable and update the page
  if (name === 'po' || name === 'dragon warrior') {
    // Update page to Po

    nameDisplay.innerHTML = 'Po';
    charImg.src = 'img/po.png';
    quote.innerHTML =
      'Buddy, I am the Dragon Warrior.';
  } else if (name === 'tigress' || name === 'master tigress') {
    // Update page to Tigress

    nameDisplay.innerHTML = 'Master Tigress';
    charImg.src = 'img/tigress.png';
    quote.innerHTML = 'That was pretty hardcore!';
  } else if (name === 'mantis' || name === 'master mantis') {
    // Update page to Mantis

    nameDisplay.innerHTML = 'Master Mantis';
    charImg.src = 'img/mantis.png';
    quote.innerHTML = 'Fear the bug!';
  } else if (name === 'monkey' || name === 'master monkey') {
    // Update page to Monkey

    nameDisplay.innerHTML = 'Master Monkey';
    charImg.src = 'img/monkey.png';
    quote.innerHTML = 'We should hang out.';
  } else if (name === 'crane' || name === 'master crane') {
    // Update page to Crane

    nameDisplay.innerHTML = 'Master Crane';
    charImg.src = 'img/crane.png';
    quote.innerHTML =
      'You can chain my body, but you will never chain my warrior spirit!';
  } else if (name === 'viper' || name === 'master viper') {
    // Update page to Viper

    nameDisplay.innerHTML = 'Master Viper';
    charImg.src = 'img/viper.png';
    quote.innerHTML =
      "I don't need to bite to fight!";
  } else if (name === 'shifu' || name === 'master shifu') {
    // Update page to Master Shifu

    nameDisplay.innerHTML = 'Master Shifu';
    charImg.src = 'img/shifu.png';
    quote.innerHTML = 'There is now a Level Zero.';
  } else if (name === 'ping' || name === 'mr. ping') {
    // Update page to Mr. Ping

    nameDisplay.innerHTML = 'Mr. Ping';
    charImg.src = 'img/mr-ping.png';
    quote.innerHTML =
      'We are noodle folk, broth runs through our veins!';
  } else {
    // Update page to Question Mark

    nameDisplay.innerHTML = '?????';
    charImg.src = 'img/question-mark.png';
    quote.innerHTML = 'Character Not Found';
  }
}

function setCharacter(charName, ) {


}
