const {
    callbackFunction,
    promiseFunction,
    callbackFunctionError,
    promiseFunctionError
} = require("./async_api");

/**
 * console.log data got from callbackFunction
 */
function printDataCallback() {
    function printData(data, data1) {
        console.log(data1);
    }
    callbackFunction(printData);
}

/**
 * console.log data got from promiseFunction
 */
function printDataPromise() {
    promiseFunction().then((data) => {
        console.log(data);
    });
}

/**
 * console.log data got from promiseFunction using async/await
 */
async function printDataAsyncAwait() {
    const data = await promiseFunction();
    console.log(data);
}

/**
 * throw error data from callbackFunctionError
 */
function handleErrorCallback() {
    function printData(error) {
        throw error;
    }
    callbackFunctionError(printData);
}

/**
 * throw error come from promiseFunctionError
 */
function handlePromiseError() {
    promiseFunctionError.catch((error) => {
        throw error;
    });
}

/**
 * throw error come from promiseFunctionError using async/await
 */
async function handleAsyncAwaitError() {
    try {
        await promiseFunctionError();
    } catch (error) {
        throw error;
    }
}

module.exports = {
    printDataCallback,
    printDataPromise,
    handleErrorCallback,
    handlePromiseError,
    printDataAsyncAwait,
    handleAsyncAwaitError
};
