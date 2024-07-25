import http from 'http';

// const querystring = require('querystring');

// Your JSON data (replace with your actual data)
const jsonData = {
    key1: 'value1',
    key2: 'value2',
    // ... other properties
};

// Convert JSON data to a query string
const postData = JSON.stringify(jsonData);

// Request options
const options = {
    hostname: 'localhost',
    port: 8080, // Default HTTPS port
    path: '/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json', // Set the content type
        "Connection": "keep-alive",
        // 'Content-Length': Buffer.byteLength(postData),
    },

};

// Create the request
const req = http.request(options, (res) => {
    let responseBody = '';

    res.on('data', (chunk) => {
        responseBody += chunk;
    });

    res.on('end', () => {
        // Handle the response (parsed JSON)
        const parsedResponse = JSON.parse(responseBody);
        console.log('Response:', parsedResponse);
    });
});

req.on('error', (error) => {
    console.error('Error making request:', error);
});

// Write the JSON data to the request body
req.write(postData);

// let counter = 0
// setInterval(() => {

//     console.log(`loop count: ${counter}`);
//     req.write(`loop count: ${counter}`)
//     counter++;
// }, 5000);


// Don't forget to end the request

req.end();