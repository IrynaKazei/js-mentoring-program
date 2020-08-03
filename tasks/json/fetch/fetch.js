/**
 * 1. You need to make a GET request for the resource: https://jsonplaceholder.typicode.com/posts using fetch method
 * 2. Save the response to response.json file
 * 3. Save only those items, where id < 20
 * DOCS: https://www.npmjs.com/package/node-fetch
 */
const fs = require('fs');
const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(result => result.json())
    .then(users => {
       const result = users.filter(user => user.id < 20);
        fs.writeFile('./response.json', JSON.stringify(result), err => {
            if (err) {
                throw err;
            }
            console.log('The file is created');
        });
    });