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
