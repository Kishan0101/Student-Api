const express = require('express');
const app = express();
const studentRoute = require('./api/routes/students'); // Make sure the path is correct
const bodyParser = require('body-parser');




// Body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



// for faculties routes
app.use('/faculties', facultiesRoute);

// for students routes
app.use('/student', studentRoute);

//Error handling
app.use((req, res, next)=>{
    res.status(404).json({
        error: "url not found"
        
        
    })
})


// MongoDB connection
const mongooes = require('mongoose');

mongooes.connect('mongodb+srv://kishan7355:kishan7355@cluster0.ud125.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

// for error link
mongooes.connection.on('error', err=>{
    console.log("connection failed")
});

// for connected
mongooes.connection.on('connected', connected=>{
    console.log("Sucessfully connected with database")
})

app.use((req, res, next) => {
    res.status(200).json({
        message: "app is running"
    });
});

module.exports = app;
