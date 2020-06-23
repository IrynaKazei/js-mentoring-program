//conditional

/** TODO
 * Task - rewrite IF..ELSE to ternary operator
 */
{
    const a = 3,
        b = 2;

    const message = a + b < 4 ? 'wrong' : 'too much';
    console.log(message);
}

/** TODO
 * The system receives two params x and y.
 * Implement the logic when z equal to sum of x and y in case both of them less than 10 or multiplication in case of greater or equal than 10
 * Task 1 - if else
 * Task 2 - ternary operator
 */

//Task1
{
    const x = 3;
    const y = 7;
    let z;

    if (x < 10 && y < 10) {
        z = x + y;
    } else {
        z = x * y;
    }
    console.log(z);
}

//Task2
{
    const x = 3;
    const y = 7;
    const z = (x < 10 && y < 10) ? x + y : x * y;
    console.log(z);
}


/** TODO
 * The system receives 3 params - x, y, operator.
 * Operator can pass 4 possible values - "add", "subtract", "multiply", "divide".
 * Implement the logic when the system does appropriate operation based on passed operator param.
 */

{
    const x = 3;
    const y = 7;
    let result;
    const operator = "add";

    switch (operator) {
        case "add":
            result = x + y;
            break;
        case "subtract":
            result = x - y;
            break;
        case  "multiply":
            result = x * y;
            break;
        case "divide":
            result = x / y;
            break;
        default:
            console.log("Something went wrong. Try again :)");
            break;
    }
}
