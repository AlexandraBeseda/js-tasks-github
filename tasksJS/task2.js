//1 Welcome!
//https://www.codewars.com/kata/577ff15ad648a14b780000e7
//This task was in task1.js, I just changed a bit
function greet(language) {
  const GREETING = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",

    DEFAULT_GREETING: "Welcome",
  };

  return GREETING[language] || GREETING.DEFAULT_GREETING;
}

//2 Lario and Muigi Pipe Problem
// https://www.codewars.com/kata/56b29582461215098d00000f
//This task was in task1.js
//Dima showed me best practice solution, i understood
const pipeFix = (num) =>
  Array(num[num.length - 1] - num[0] + 1)
    .fill(num[0])
    .map((element, index) => element + index);

//3 Regular Ball Super Ball
//https://www.codewars.com/kata/53f0f358b9cb376eca001079
//This task was in task1.js, i propose second solution through "Class"
class Ball {
  constructor(ballType = "regular") {
    this.ballType = ballType;
  }
}

//4 Crash Override
//https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f
//This task was in task1.js, I just changed a bit
let firstName = { A: "Alpha", B: "Beta", C: "Cache" };
let surname = { A: "Analogue", B: "Bomb", C: "Catalyst" };

function aliasGen(firstname, lastname) {
  const FIRST_NAME = firstname[0].toUpperCase();
  const LAST_NAME = lastname[0].toUpperCase();
  return !firstName[FIRST_NAME] || !surname[LAST_NAME]
    ? "Your name must start with a letter from A - Z."
    : firstName[FIRST_NAME] + " " + surname[LAST_NAME];
}

//5 Grasshopper - Terminal Game #1
//https://www.codewars.com/kata/55e8aba23d399a59500000ce
function Hero(name) {
  this.name = name || "Hero";
  this.position = "00";
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}

//6 Job Matching #1
//https://www.codewars.com/kata/56c22c5ae8b139416c00175d
const match = (candidate, job) => {
  if (!candidate.minSalary || !job.maxSalary) throw new Error("");
  return candidate.minSalary * 0.9 <= job.maxSalary;
};

//7 Make a function that does arithmetic!
//https://www.codewars.com/kata/583f158ea20cfcbeb400000a
function arithmetic(a, b, operator) {
  const OP = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  };
  return OP[operator](a, b);
}

//8 Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
//https://www.codewars.com/kata/582746fa14b3892727000c4f
function countDevelopers(list) {
  return list.filter(
    (elem) => elem.continent === "Europe" && elem.language === "JavaScript"
  ).length;
}

//9 Welcome!
//https://www.codewars.com/kata/577ff15ad648a14b780000e7
// This task was in task1.js, i propose third solution
const LANGUAGES = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso",
};

const greet = (lang) => LANGUAGES[lang] || "Welcome";

//10 Lario and Muigi Pipe Problem
//https://www.codewars.com/kata/56b29582461215098d00000f
//I propose 3d solution for this task
function pipeFix(numbers) {
  const MAX = Math.max(...numbers);
  const MIN = Math.min(...numbers);
  return new Array(MAX - MIN + 1)
    .fill(MIN)
    .map((element, index) => element + index);
}
