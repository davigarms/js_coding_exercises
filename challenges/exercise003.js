function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(x => x*x);
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let camelCaseArr = [];
  camelCaseArr.push(words[0]);
  for (let i = 1; i < words.length; i++) {
    camelCaseArr.push(words[i].substr(0,1).toUpperCase() + words[i].substr(1));
  }
  return camelCaseArr.join("");
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  const subjects = people.map(item => item.subjects);
  let subjectsArr = subjects.reduce((p,n) => p.concat(n),[]);
  return(subjectsArr.length);
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  
  const ingredients = menu.map(item => item.ingredients);
  let ingredientsArr = ingredients.reduce((p,n) => p.concat(n),[]);
  return ingredientsArr.indexOf(ingredient) > -1;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  const concatArr = arr1.concat(arr2);
  let repeatedArr = concatArr.filter ((item, index) => concatArr.indexOf(item) !== index).sort();
  return(repeatedArr.filter ((item, index) => repeatedArr.indexOf(item) === index));
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
