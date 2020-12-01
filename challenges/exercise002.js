function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.city == "Manchester") return true;
  return false;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return (Math.ceil(people/40));
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  return arr.filter(x => x=="sheep").length;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.address.postCode.indexOf("M") == 0 && person.address.city == "Manchester") return true;
  return false;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
