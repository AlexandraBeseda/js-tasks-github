function getCount(str) {
    let vowelsCount = 0;
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            vowelsCount++;
        } else if (str[i] === 'e') {
            vowelsCount++;
        } else if (str[i] === 'i') {
            vowelsCount++;
        } else if (str[i] === 'o') {
            vowelsCount++;
        } else if (str[i] === 'u') {
            vowelsCount++;
        }
    }
    return vowelsCount;
}


function countBy(x, n) {
    let z = [];
    for (let i = x; i <= n; i++) {
        z.push(i * x);
    }
    return z;
}

function noSpace(x) {
    return x.split(" ").join("");
}

//console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));

function well(x) {
    let count = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] === "good") {
            count++;
        }
    }

    if (count > 2) {
        return 'I smell a series!';
    }
    if (count <= 0) {
        return 'Fail!';
    } else return 'Publish!';
}


let str = "How can mirrors be real if our eyes aren't real";


// String.prototype.toJadenCase = function () {
//     let sentence = [];
//     //  let words = this.toLowerCase().split(' ');
//     let words = this.split(' ');
//     console.log(words)
//     let word;
//     for (let i = 0; i < words.length; i++) {
//         word = words[i];
//         sentence.push(word[0].toUpperCase() + word.slice(1));
//     }
//     return sentence.join(" ");
// };


function factorial1(n) {
    if (n < 0 || n > 12) {
        throw new RangeError();
    }
    let sum = 1;
    for (let i = 1; i <= n; i++) {
        sum = sum * i;
    }
    return sum;
}



function disemvowel(str) {
    return str.replace(/[aeiouAEIOU]/g, "");
}

//console.log(disemvowel("kjnwhnbrlwnjvbrjfqqqqqqqinjnuuuuuu aa yguygueee"))

let capitals = function (word) {
    let arr = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            arr.push(i);
        }
    }
    return arr;
};


function sumDigits(number) {
    let str = Math.abs(number).toString();
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    return sum;
}

/*
console.log((sumDigits(10)))
console.log((sumDigits(99)))
console.log((sumDigits(-32)))*/


function openOrSenior(data) {
    let array = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] < 55) {
            array.push("Open")
        } else if (data[i][1] <= 7) {
            array.push("Open");
        } else array.push("Senior")
    }
    return array;
}

function isIsogram(str) {
    str = str.toLowerCase();
    for (let i = 0; i < str.length; ++i) {
        for (let j = i + 1; j < str.length; ++j) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;

}


function sumTo1(n) {
    let result = 0;

    for (let i = 0; i <= n; i++) {
        result += i;
    }
    return result
}


function sumTo2(n) {
    if (n === 1) return 1;
    return n + sumTo2(n - 1);
}


function sumTo3(n) {
    return n * (n + 1) / 2;
}

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}


function fib(n) {
    if (n === 0) return 0;

    if (n === 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

//console.log(fib(3)); // 2
//console.log(fib(7)); // 13
//console.log(fib(77)); // 5527939700884757 тут все плохо

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList1(list) {
    let tmp = list;

    while (tmp) {
        tmp = tmp.next;
    }

}

//console.log(printList1(list));

function printList2(list) {

    if (list.next) {
        printList2(list.next);
    }
}

//console.log(printList2(list));


function printReverseList1(list) {

    if (list.next) {
        printReverseList1(list.next);
    }

    //alert(list.value);
}

printReverseList1(list);

function printReverseList2(list) {
    let arr = [];
    let tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        //alert( arr[i] );
    }
}

printReverseList2(list);

function sumTwoSmallestNumbers(numbers) {
    let arr = numbers.sort((a, b) => a - b);


    console.log(arr[0] + arr[1])
}

//sumTwoSmallestNumbers([5, 8, 12, 19, 22])
//sumTwoSmallestNumbers([15, 28, 4, 2, 43])
//sumTwoSmallestNumbers([5, 8, 12, 19, 22])

function flattenAndSort(array) {
    let fullArr = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            fullArr.push(array[i][j])
        }
    }
    return fullArr.sort((a, b) => a - b);
}


//flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]])

function solution(string) {
    let str = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            str += ` ${string[i]}`
        } else str += string[i];
    }
    return str;
}

//solution('camelCasing');


function getSum(a, b) {
    if (a === b) {
        return a;
    } else if (a > b) {
        let sum = 0;
        for (let i = b; i <= a; i++) {
            sum += i;
        }
        return sum;
    } else {
        let sum = 0;
        for (let i = a; i <= b; i++) {
            sum += i;
        }
        return sum;
    }
}


/*assert.strictEqual(getSum(0,-1),-1);
assert.strictEqual(getSum(0,1),1);*/


function balance(left, right) {
    let leftWeight = weight(left);
    let rightWeight = weight(right);
    if (leftWeight === rightWeight) {
        return "Balance"
    } else if (leftWeight > rightWeight) {
        return "Left";
    } else
        return "Right"
}

function weight(str) {
    let array = str.split("");
    let weight = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "!") {
            weight += 2;
        } else {
            weight += 3;
        }
    }
    return weight;
}

/*

console.log(balance("!!","??"))
console.log(balance("!??","?!!"))
console.log(balance("!?!!","?!?"))
console.log(balance("!!???!????","??!!?!!!!!!!"))*/
function decipherThis(str) {
    const words = str.split(' ');
    const char_codes = {
        "65": "A", "66": "B", "67": "C", "68": "D", "69": "E", "70": "F",
        "71": "G", "72": "H", "73": "I", "74": "J", "75": "K", "76": "L",
        "77": "M", "78": "N", "79": "O", "80": "P", "81": "Q", "82": "R",
        "83": "S", "84": "T", "85": "U", "86": "V", "87": "W", "88": "X",
        "89": "Y", "90": "Z", "97": "a", "98": "b", "99": "c", "100": "d",
        "101": "e", "102": "f", "103": "g", "104": "h", "105": "i",
        "106": "j", "107": "k", "108": "l", "109": "m", "110": "n", "111": "o",
        "112": "p", "113": "q", "114": "r", "115": "s", "116": "t", "117": "u",
        "118": "v", "119": "w", "120": "x", "121": "y", "119": "w", "120": "x",
        "121": "y", "122": "z"
    };
}


/*
decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'), 'Have a go at this and see how you do')*/


/*for (let i = 0; i < 10; i++) {
    //debugger
    setTimeout(() => {
        console.log(i)
    }, 0)
}*/


for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, 0)
}

function isNice(arr) {

    let isNiceArray = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i] + 1) || arr.includes(arr[i] - 1)) {
            isNiceArray = true;
        } else {
            isNiceArray = false;
            break
        }
    }
    return isNiceArray
}

function updateLight(current) {
    return current === "green" ? "yellow" : current === "yellow" ? "red" : "green";
}

//Топ! Ничего непонятно, но оч круто!
//const updateLight = current => ({
//   green: 'yellow',
//   yellow: 'red',
//   red: 'green',
// })[current]


let longestPalindrome = function (s) {
    //your code here
    if (s.length === 0) {
        return 0;
    }
    let ar = s.split(' ');
    let longestElement = ar.sort(function (a, b) {
        return b.length - a.length;
    })[0]
    //let longestElemet=ar
    return longestElement.length

}



const reverseSeq = n => {
    let arr = [];
    for (let i = n; i > 0; i--) {
        arr.push(i)
    }
    return arr;
};
//reverseSeq(5);
//    assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);


function rentalCarCost(d) {
    let discount;
    (7 > d && d >= 3) ? discount = 20 : (d < 3) ? discount = 0 : discount = 50;
    debugger;
    return d * 40 - discount;
}


function nameShuffler(str) {
    return str.split(" ").reverse().join(" ");
}

function sumMix(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum = sum + +x[i];
    }
    return sum;
}

//не могу найти недостающий пробел
//15 минут
function multiTable(number) {
    let res = '';
    for (let i = 1; i <= 10; i++) {
        res += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`;
    }
    return res;
}

function abbrevName(name) {
    let arr1 = name.toUpperCase().split(" ");
    let arr11 = arr1[0];
    let arr12 = arr1[1];
    return `${arr11[0]}.${arr12[0]}`
    // code away

}

function solution1(str) {
    return str.split("").reverse().join("");
}

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

function countSheeps(arrayOfSheep) {
    let sumSheeps = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            sumSheeps++;
        }
    }
    return sumSheeps;
}


function doubleChar(str) {
    return str.split("").map(w => w.repeat(2)).join("");

}

function pipeFix(numbers) {
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

var summation = function (num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

function _if(bool, func1, func2) {
    return bool ? func1() : func2();
}

_if(true, function () {
    console.log("True")
}, function () {
    console.log("false")
    debugger
})


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

class Person {
    constructor(name,age) {
        this.name=name;
        this.age=age;
    }
    //Синтаксис get связывает свойство объекта с функцией, которая будет вызываться при обращении к этому свойству.
    get info() {
        return `${this.name}s age is ${this.age}`
    }
}
