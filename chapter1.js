//Question 1
// Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
// cannot use additional data structures?

const isStringUnique = (str) => {
  let strArr = str.toLowerCase().split('');
  let uniqueArr = [];
  for (let i = 0; i < strArr.length; i++) {
    let el = strArr[i];
    if (i > 0 && uniqueArr.includes(el) && el !== ' ') return false;
    uniqueArr.push(el);
  }
  return true;
};

/* TESTS */
console.log(everyCharUnique('abcd'), 'true');
console.log(everyCharUnique('abccd'), 'false');
console.log(everyCharUnique('bhjjb'), 'false');
console.log(everyCharUnique('mdjq'), 'true');
//Question 2
// Check Permutation: Given two strings, write a method to decide if one is a permutation of the other
// *Assuming case doesn't matter.
const isStringPermutation = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let str1Arr = str1.toLowerCase().split('');

  for (let i = 0; i < str2.length; i++) {
    if (str1Arr.indexOf(str2[i]) === -1) return false;
    str1Arr.splice(str1Arr.indexOf(str2[i]), 1);
  }
  return true;
};

//alternative way
const isStringPermutation2 = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let str1Arr = str1.toLowerCase().split('').sort().join();
  let str2Arr = str2.toLowerCase().split('').sort().join();
  return str1Arr == str2Arr;
};
// Tests
console.log(isStringPermutation('aba', 'aab'), 'true');
console.log(isStringPermutation('aba', 'aaba'), 'false');
console.log(isStringPermutation('aba', 'aa'), 'false');

//Question 3
// URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string.
const urlIfy = (str, length) => {
  let strArr = str.trim().split('');
  strArr = strArr.map((el) => {
    if (el === ' ') return '&20';
    return el;
  });
  return strArr.join('');
};

console.log(urlify('Mr John Smith    ', 13), 'Mr%20John%20Smith');

//Question 4
// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
// is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
const palinPerm = (str) => {
  str = str.toLowerCase();
  let hash = {};
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let strChar = str[i];
    if (strChar === ' ') {
      continue;
    } else if (hash[strChar]) {
      delete hash[strChar];
    } else {
      hash[strChar] = true;
    }
    count++;
  }
  if (count % 2 === 0) {
    console.log(Object.keys(hash));
    return Object.keys(hash).length === 0;
  } else {
    console.log(Object.keys(hash));
    return Object.keys(hash).length === 1;
  }
};

console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');

//Question 5
// One Away: There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to check if they are
// one edit (or zero edits) away.
const oneAway = (origStr, modiStr) => {
  let longestStr;
  let shortestStr;
  let similarityCount = 0;
  if (origStr.length > modiStr.length) {
    longestStr = origStr;
    shortestStr = modiStr;
  } else {
    longestStr = modiStr;
    shortestStr = origStr;
  }
  for (let i = 0; i < longestStr.length; i++) {
    if (longestStr[i] === shortestStr[i]) {
      similarityCount++;
      continue;
    }
    if (longestStr[i + 1] === shortestStr[i] && shortestStr[i] !== undefined) {
      similarityCount++;
    }
  }
  return similarityCount === longestStr.length - 1;
};

console.log(oneAway('pale', 'ple'), true);
console.log(oneAway('pales', 'pale'), true);
console.log(oneAway('pale', 'bale'), true);
console.log(oneAway('pale', 'bake'), false);

//Question 6
// String Compression: Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
// "compressed" string would not become smaller than the original string, your method should return
// the original string. You can assume the string has only uppercase and lowercase letters (a - z).
// *Assuming upper and lowercase letters stack.
// compressStr(aaAAbCC) = > a2A2b1C2

const compressStr = (str) => {
  let count = 1;
  let cStr = '';

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    let nextChar = str[i + 1];
    if (currentChar === nextChar) {
      count += 1;
    } else {
      cStr += str[i] + count;
      count = 1;
    }
  }
  return cStr.length < str.length ? cStr : str;
};

console.log('aaaaaa', compressStr('aaaaaa'), 'a6');
console.log('aabcccccaaa', compressStr('aabcccccaaa'), 'a2b1c5a3');

//Question 7
// Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
const rotateMatrix = (matrix) => {
  let rotatedMatrix = [];
  for (let y = matrix.length - 1; y >= 0; y--) {
    let transposedArr = [];
    for (let x = 0; x < matrix.length; x++) {
      transposedArr.push(matrix[y][x]);
    }
    rotatedMatrix.push(transposedArr);
    console.log(transposedArr);
  }
  return rotatedMatrix;
};

let testMatrix = [
  [1, 2, 3, 4],
  [0, 1, 2, 3],
  [0, 0, 1, 2],
  [1, 0, 0, 1],
];

let rotatedMatrix = [
  [1, 0, 0, 1],
  [0, 0, 1, 2],
  [0, 1, 2, 3],
  [1, 2, 3, 4],
];

console.log(rotatedMatrix, rotateMatrix(testMatrix));

//Question 8
//Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
//column are set to 0.
