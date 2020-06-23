/**
 * Write the function that will calculate the amount of discount
 * considering the redemption amount
 * Rules are the following:
 * - 0    - 350:  0%
 * - 351  - 1350: 15%
 * - 1351 - 2700: 30%
 * - 2701 - 6500: 45%
 * @param {number} redemption amount (0 - 9999)
 * @returns {number} discount in percent
 */

function calculateDiscount(redemption) {
    let discount;
    if (redemption >= 0 && redemption <= 350) {
        discount = 0;
    } else if (redemption >= 351 && redemption <= 1350) {
        discount = 15;
    } else if (redemption >= 1351 && redemption <= 2700) {
        discount = 30;
    } else if (redemption >= 2701 && redemption <= 6500) {
        discount = 45;
    } else {
        discount = 0;
    }
    return discount;
}

/** TODO
 * implement factorial algorithm using for, while, do..while operators
 */
{
    const i = 10; //10! = 3628800
    let factorial = 1;
    for (let j = 1; j <= i; j++) {
        factorial *= j;
    }
    console.log(factorial);
}
// While
{
    const i = 10; //10! = 3628800
    let factorial = 1;
    let j = 1;
    while (j <= i) {
        factorial *= j;
        j++;
    }
    console.log(factorial);
}
//Do...while
{
    const i = 10; //10! = 3628800
    let factorial = 1;
    let j = 1;
    do {
        factorial *= j;
        j++;
    }
    while (j <= i);
    console.log(factorial);
}


/**
 * return concatenated string from an array of substring
 */
{
    const substr = ["I", "love", "JS"];
    let phrase= '';
    for (let i = 0; i < substr.length; i++) {
        phrase += substr[i] + " ";

    }
    console.log(phrase);
}

/**
 * calculate a total of income of certain person
 */
{
    const personIncomes = {
        salary: 1985,
        rent: -600,
        interestOnDeposit: 250,
        otherExpences: -300
    };
    let income = 0;
    for (let property in personIncomes) {
        income += personIncomes[property];
    }
    console.log(income);
}

module.exports = calculateDiscount;
