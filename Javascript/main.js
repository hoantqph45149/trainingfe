var scoreOfString = function (s) {
  let score = 0;
  for (let i = 1; i < s.length; i++) {
    score += Math.abs(s[i].charCodeAt(0) - s[i - 1].charCodeAt(0));
  }
  return score;
};

console.log(scoreOfString("hello"));

var finalValueAfterOperations = function (operations) {
  let x = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "++X" || operations[i] === "X++") {
      x++;
    } else {
      x--;
    }
  }
  return x;
};

console.log(finalValueAfterOperations(["X++", "X--", "--X"]));

var defangIPaddr = function (address) {
  for (let i = 0; i < address.length; i++) {
    if (address[i] === ".") {
      address = address.slice(0, i) + "[.]" + address.slice(i + 1);
      i += 2;
    }
  }
  return address;
};

console.log(defangIPaddr("1.2.3.4.5"));

var findPermutationDifference = function (s, t) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (t.indexOf(s[i]) === -1) {
      result += i;
    } else {
      result += Math.abs(i - t.indexOf(s[i]));
    }
  }
  return result;
};

console.log(findPermutationDifference("abcde", "edbac"));

var numJewelsInStones = function (jewels, stones) {
  let count = 0;

  for (let stone of stones) {
    if (jewels.includes(stone)) {
      count++;
    }
  }

  return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));

var findWordsContaining = function (words, x) {
  const result = [];
  words.forEach((item, index) => {
    if (item.includes(x)) {
      result.push(index);
    }
  });
  return result;
};

console.log(findWordsContaining(["apple", "banana", "cherry"], "a"));
