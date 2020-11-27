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
  var subjects = people.map(item => item.subjects);
  var subjectsArr = subjects.reduce((p,n) => p.concat(n),[]);
  return(subjectsArr.length);
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  
  // Your code here!
  var ingredients = menu.map(item => item.ingredients);
  var ingredientsArr = ingredients.reduce((p,n) => p.concat(n),[]);
  if (ingredientsArr.indexOf(ingredient) > -1) return true;
  return false;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
  var concatArr = arr1.concat(arr2);
  var repeatedArr = concatArr.filter ((item, index) => concatArr.indexOf(item) !== index).sort();
  return(repeatedArr.filter ((item, index) => repeatedArr.indexOf(item) === index));
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
