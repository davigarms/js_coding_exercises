const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  if (nums.indexOf(n) < 0 || nums.indexOf(n) == nums.length - 1) return null;
  return nums[nums.indexOf(n)+1];
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  var total0s = str.split("").sort((a, b) => a - b).filter(item => item == 0);
  var total1s = str.split("").sort((a, b) => a - b).filter(item => item == 1);
  return ({"0": total0s.length, "1": total1s.length});
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return parseInt(n.toString().split("").reverse().join(""));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  return arrs.map(item => item.reduce((a, b) => a + b, 0)).reduce((a, b) => a + b, 0);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  if (arr.length < 2) return arr;
  var firstElement = arr.shift();
  arr.unshift(arr.pop());
  arr.push(firstElement);
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  var hasFound = false;
  Object.values(haystack).some(function(value){
    if (value.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
      hasFound = true;
      return;
    }
  });
  return hasFound;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  var words = str.toLowerCase().replace(/[!?.,:;]/g, "").split(" ");
  var uniqueWords = words.filter((item, index) => words.indexOf(item) === index);
  var countObj = {};
  uniqueWords.forEach(function(uniqueWord){
    var eachWord = words.filter((word) => word === uniqueWord);
    countObj[uniqueWord] = eachWord.length;
  });
  return(countObj);
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
