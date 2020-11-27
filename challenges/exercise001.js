function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  if (word.substring(0,1) == word.substring(0,1).toUpperCase()) return word;
  return word.substring(0,1).toUpperCase() + word.substring(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
  return firstName.substring(0,1) + "." + lastName.substring(0,1);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  // Add your code here!
  if (vatRate === undefined) throw new Error("vatRate is required");
  return Number((originalPrice + originalPrice * vatRate / 100).toFixed(2));
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  return Number((originalPrice - originalPrice * reduction / 100).toFixed(2));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  if (str.length % 2 == 0) return str.substr(str.length / 2 - 1, 2);
  return str.substr(parseInt(str.length / 2), 1);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
  var reversedWords = [];
  words.forEach(function(word) {
    reversedWords.push(word.split("").reverse().join(""));
  });
  return reversedWords;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  var linuxUsers = [];
  users.forEach(function(user) {
    if (user.type == "Linux") linuxUsers.push(user);
  });
  return linuxUsers.length;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  var total = 0;
  scores.forEach(function(score){
    total += score;
  });
  return Number((total/scores.length).toFixed(2));
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
