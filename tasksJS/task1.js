//----Strings----//

//1 Remove String Spaces
//https://www.codewars.com/kata/57eae20f5500ad98e50002c5

function noSpace(x){
    return x.split(" ").join("");
}

//2 Name Shuffler
//https://www.codewars.com/kata/559ac78160f0be07c200005a 

function nameShuffler(str){
    return  str.split(" ").reverse().join(" ");
}

//3 Sum Mixed Array
//https://www.codewars.com/kata/57eaeb9578748ff92a000009 

function sumMix(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum =sum + +x[i];
    }
    return sum;
}

//4 Multiplication table for number
//https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce

//не могу найти недостающий пробел
//30 минут
function multiTable(number) {
    let res = '';
    for (let i = 1; i <= 10; i++) {
        res += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`;
    }
    return res;
}

//5 Remove First and Last Character
//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

function removeChar(str){
    return str.substring(1, str.length-1);;
};

//6 Abbreviate a Two Word Name
//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

function abbrevName(name){
    let arr1=name.toUpperCase().split(" ");
    let arr11=arr1[0];
    let arr12=arr1[1];
    return `${arr11[0]}.${arr12[0]}`
}

//7 Convert a string to an array
//https://www.codewars.com/kata/57e76bc428d6fbc2d500036d
function stringToArray(string){
    return string.split(" ");
}

//8 Reversed Strings
//https://www.codewars.com/kata/5168bb5dfe9a00b126000018
function solution(str){
    return str.split("").reverse().join("");
 }

//----Array----//

//1 Count of positives / sum of negatives
//https://www.codewars.com/kata/576bb71bbbcf0951d5000044
function countPositivesSumNegatives(input) {
    if (input === null || input.length < 1) {
        return [];
    } else {
        let pozitiveNum = 0;
        let negativeSum = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i] > 0) {
                pozitiveNum++;
            } else
                negativeSum += input[i];
        }
        return [pozitiveNum, negativeSum];
    }
}

//2 Counting sheep...
//https://www.codewars.com/kata/54edbc7200b811e956000556
function countSheeps(arrayOfSheep) {
    let sumSheeps = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
      if (arrayOfSheep[i] === true) {
          sumSheeps++;
      }
  }
  return sumSheeps;
}

// 3 
//https://www.codewars.com/kata/5513795bd3fafb56c200049e
function countBy(x, n) {
    let z = [];
    for(let i=1;i<=n;++i){
      z.push(i*x);
    }
    return z;
}

//4 Abbreviate a Two Word Name
//Strings 6 task

//5 Logical calculator
//https://www.codewars.com/kata/57096af70dad013aa200007b
function logicalCalc(array, op){
    let result = array[0];
    for(let i = 1; i < array.length; i++) {
        if(op == "AND") {
            result = result && array[i];
        }
        if(op == "OR") {
            result = result || array[i];
        }
        if(op == "XOR") {
            result = result != array[i];
        }
    }
    return result;
}

//----Loops----//

//1 Sentence Smash
//https://www.codewars.com/kata/53dc23c68a0c93699800041d
function smash (words) {
    "use strict";
    return words.join(" ");
    
};

//2 Double Char
//https://www.codewars.com/kata/56b1f01c247c01db92000076
function doubleChar(str) {
    return str.split("").map(w=>w.repeat(2)).join("");
}

//----Regexp----//
//Тут проблема, я никогда не пользовалась шаблонными выражениями, в этом месте у меня 0 знаний.

//1 Do you speak "English"?
//https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058
function spEng(sentence){
    let sent = sentence.toLowerCase();
    return sent.includes('english');
}

//2 Lario and Muigi Pipe Problem
//Objects task 1

//3 Grasshopper - Summation
//https://www.codewars.com/kata/55d24f55d7dd296eb9000030
var summation = function (num) {
    let sum=0;
    for (let i = 1; i <=num; i++) {
        sum+=i;
    }
    return sum;
}

//----Functions----//

//1 The 'if' function
//https://www.codewars.com/kata/54147087d5c2ebe4f1000805
function _if(bool, func1, func2) {
    return bool ? func1() : func2()
 }

//----Objects----//

//1 Lario and Muigi Pipe Problem
//https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f
function pipeFix(numbers){
    let max = numbers[0];
    let min = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]
        } else if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    let array = [];
    for (let i = min; i <= max; i++) {
        array.push(i)
    }
    return array
}

//2 Regular Ball Super Ball
//https://www.codewars.com/kata/53f0f358b9cb376eca001079
var Ball = function(ballType="regular") {
    this.ballType=ballType;
};

//3 Welcome!
//https://www.codewars.com/kata/577ff15ad648a14b780000e7
  function greet(language) {
    switch (language) {
          case "english": {
              return "Welcome"
            }
          case "czech": {
              return 'Vitejte'
            }
          case "danish": {
              return 'Velkomst'
          }
          case  "dutch": {
              return 'Welkom'
          }
          case "estonian": {
              return 'Tere tulemast'
          }
          case "finnish": {
              return 'Tervetuloa'
          }
          case"flemish": {
              return 'Welgekomen'
          }
          case "french": {
              return 'Bienvenue'
          }
          case "german": {
              return 'Willkommen'
          }
          case "irish": {
              return 'Failte'
          }
          case "italian": {
              return 'Benvenuto'
          }
          case  "latvian": {
              return 'Gaidits'
          }
          case "lithuanian": {
              return 'Laukiamas'
          }
          case "polish": {
              return 'Witamy'
          }
          case "spanish": {
              return 'Bienvenido'
          }
          case "swedish": {
              return 'Valkommen'
          }
          case "welsh": {
             return 'Croeso'
          }
          case "IP_ADDRESS_INVALID": {
              return 'Welcome'
          }
          default: {
              return 'Welcome'
          }
      }
  }

//4 Crash Override
//https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f
function aliasGen(firstname, lastname){
    let firstLeterfirstName = firstname.substr(0,1).toUpperCase( );
    let firstLeterlastName = lastname.substr(0,1).toUpperCase( );
    if (!firstName[firstLeterfirstName] || !surname[firstLeterlastName]) {
      return 'Your name must start with a letter from A - Z.';
    } else {
      return firstName[firstLeterfirstName] + ' ' + surname[firstLeterlastName];
    }
}

//----Classes----//

//1 Well of Ideas - Easy Version
//https://www.codewars.com/kata/57f222ce69e09c3630000212

function well(x){
    let count=0;
       for (let i = 0; i < x.length; i++) {
           if (x[i]==="good"){
               count++;
           }
       }
       if (count>2){
           return  'I smell a series!';
       }
       if (count<=0){
           return 'Fail!';
       }else return 'Publish!';
   }

//2 Regular Ball Super Ball
//Objects task 2

//3 Classy Classes
//https://www.codewars.com/kata/55a144eff5124e546400005a
class Person {
    constructor(name,age) {
    this.name=name;
    this.age=age;
  }
  get info() {
      return `${this.name}s age is ${this.age}`
    }
}

//----Others---//

//1 Remove String Spaces
//https://www.codewars.com/kata/57eae20f5500ad98e50002c5
function noSpace(x){
    return x.split(" ").join("");
}

//2 Name Shuffler
//Strings task 2