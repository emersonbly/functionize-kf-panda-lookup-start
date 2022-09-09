// Kung Fu Panda Character Look Up

// HTML element variables
let nameDisplay = document.getElementById("character-name");
let charImg = document.getElementById("main-img");
let quote = document.getElementById("quote");
let searchBtn = document.getElementById("search");

// Event Listener
searchBtn.addEventListener("click", searchClicked);

// Event Function
function searchClicked() {
  // Get Input Value (what character to look for?)
  let name = document.getElementById("input-name").value;
  name = name.toLowerCase();

  // Test Input Variable and update the page
  if (name === "po" || name === "dragon warrior") {
    // Update page to Po

    setCharacter("Po", "po", "Buddy, I am the Dragon Warrior.");
  } else if (name === "tigress" || name === "master tigress") {
    // Update page to Tigress

    setCharacter("Tigress", "tigress", "That was pretty hardcore!");
  } else if (name === "mantis" || name === "master mantis") {
    // Update page to Mantis

    setCharacter("Mantis", "mantis", "Fear the bug!");
  } else if (name === "monkey" || name === "master monkey") {
    // Update page to Monkey

    setCharacter("Monkey", "monkey", "We should hang out.");
  } else if (name === "crane" || name === "master crane") {
    // Update page to Crane

    setCharacter(
      "Crane", "crane", 
      "You can chain my body, but you will never chain my warrior spirit!");
  } else if (name === "viper" || name === "master viper") {
    // Update page to Viper

    setCharacter("Viper", "viper", "I don't need to bite to fight!");
  } else if (name === "shifu" || name === "master shifu") {
    // Update page to Master Shifu

    setCharacter("Shifu", "shifu", "There is now a Level Zero.");
  } else if (name === "ping" || name === "mr. ping") {
    // Update page to Mr. Ping

    setCharacter(
      "Mr. Ping", "mr-ping", "We are noodle folk, broth runs through our veins!");
  } else {
    // Update page to Question Mark

    setCharacter("?????", "question-mark", "Character Not Found");
  }
}

function setCharacter(name, imgName, charQuote) {
  // Update page to given character information
  nameDisplay.innerHTML = name;
  charImg.src = `img/${imgName}.png`;
  quote.innerHTML = charQuote;
}
