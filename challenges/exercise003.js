function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  return nums.map(x => x*x);
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  var camelCaseArr = [];
  camelCaseArr.push(words[0]);
  for (var i = 1; i < words.length; i++) {
    camelCaseArr.push(words[i].substr(0,1).toUpperCase() + words[i].substr(1));
  }
  return camelCaseArr.join("");
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
