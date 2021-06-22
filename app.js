const path = require('path') //i have windows so be better have the correct path strings

//import the library express server and etc

const express = require('express');

const PORT = 3000; 

const app = express();

app.use(express.static('public'));

app.all('/', mainHandler)
function mainHandler(request, response){
    response.sendFile(path.join(__dirname, 'views/home.html'))
}

app.all('/about', aboutHandler)
function aboutHandler (request, response){
    response.sendFile(path.join(__dirname + 'views/about.html'))
} 


app.all('/about', worksHandler)
function worksHandler (request, response){
    response.sendFile(path.join(__dirname + 'views/works.html'))
}


app.listen( 3000, () => {
    console.log('Hello from the other side!')
  });
