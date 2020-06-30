/**
 * write function that adds two numbers
 *
 */
function add(a, b) {
    return a + b;
}

/**
 * write function that return first and last name of given object
 * properties firstName and lastName
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 * }
 */
function getFullName(object) {
    return object.firstName + ' ' + object.lastName;
}


/**
 * write fuction that checks is number is odd
 * true if odd, false if even
 */
function isOdd(n) {
    let x = n % 2;
    if (x == 0) {
        return false;
    } else {
        return true;
    }
}

/**
 * write function that return shortest of words in given array
 * e.g ["one", "two", "three"] should return one
 */
function getShortest(wordArray) {
    let shortestWord = wordArray[0];
    for (const element of wordArray) {
        if (element.length < shortestWord.length) {
            shortestWord = element;
        }
    }

    return shortestWord;
}

/**
 * write function that returns word google with given numbers of "o" symbols
 * e.g getGoogle(5) should return "gooooogle"
 */
function getGoogle(n) {
    let google = "g";
    for (let j = 1; j <= n; j++) {
        google += "o";
    }
    return google + "gle";
}

/**
 * write function that returns object based on given information (params may be null)
 * getUser("John", "Dou", 42) should return
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 *    age: 42
 * }
 */
function getUser(firstName, lastName, age) {
    let person = {};
    person.firstName = firstName ? firstName : null;
    person.lastName = lastName ? lastName : null;
    person.age = age ? age : null;

    return person;
}

/**
 * write function that calculates total path traveled.
 * path represended as array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}]
 */

function getTotalPath(path) {
    let totalPath = 0;
    for (const element of path) {
        totalPath += element.distance;
    }
    return totalPath;
}


/**
 * write a function that will calculate a discount considering the Amount
 * and the percentage (hint: you need to use the Closure here)
 * @param {amount} num
 * @param {percentage} num
 */

function discountFunction(amount) {
    return function (percentage) {
        return percentage - percentage * amount / 100;
    };
}

/**
 * Write the methods inside the given objects that:
 * 1. console logs keys of the given object
 * 2. returns the string 'My name is John Doe and I am 25 years old. My best friend is Daniel'
 * reffering to the data stored in the object
 */

const myObject = {
    name: 'John',
    lastName: 'Doe',
    age: 25,
    friends: ['Mike', 'Alan', 'Daniel'],
    keys() {
        for (const key in this) {
            console.log(key);
        }
    },
    call() {
        return "My name is " + this.name + " " + this.lastName + " and I am " + this.age + " years old. My best friend is " + this.friends[2];
    }

};

module.exports = {
    add,
    getFullName,
    isOdd,
    getShortest,
    getGoogle,
    getUser,
    getTotalPath,
    discountFunction,
    myObject
};