//1 Simple validation of a username with regex
// https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023
function validateUsr(username) {
  return /^[a-z0-9_]{4,16}$/.test(username);
}

//2 Regex count lowercase letters
// https://www.codewars.com/kata/56a946cd7bd95ccab2000055
function lowercaseCount(str) {
  const RESULT = str.match(/[a-z]/g) || [];
  return RESULT.length;
}

//3 String cleaning
// https://www.codewars.com/kata/57e1e61ba396b3727c000251
function stringClean(s) {
  return s.replace(/[0-9]/gi, "");
}

//4 Regexp Basics - is it a digit?
// https://www.codewars.com/kata/567bf4f7ee34510f69000032
String.prototype.digit = function () {
  return /^\d$/.test(this);
};

//5 validate code with simple regex
// https://www.codewars.com/kata/56a25ba95df27b7743000016
function validateCode(code) {
  return /^[123]/.test(code);
}

//6 A Strange Trip to the Market
// https://www.codewars.com/kata/55ccdf1512938ce3ac000056
function isLockNessMonster(s) {
  return /tree fiddy|three fifty|3\.50/.test(s);
}

//7 Get number from string
// https://www.codewars.com/kata/57a37f3cbb99449513000cd8
function getNumberFromString(s) {
  return Number(s.replace(/\D/gi, ""));
}

//8 Simple validation of a username with regex
// https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023
//This task was in 1 task, i propose second solution
function validateUsr(username) {
  return /^[a-z_\d]{4,16}$/gm.test(username);
}

//9 Regex count lowercase letters
// https://www.codewars.com/kata/56a946cd7bd95ccab2000055
//This task was in 2 task, i propose second solution
function lowercaseCount(str) {
  return str.replace(/[^a-z]/g, "").length;
}
