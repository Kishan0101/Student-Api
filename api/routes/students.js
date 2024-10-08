const express = require('express');
const router = express.Router();
const Student = require('../model/students');
const mongooes = require('mongoose');
const { name } = require('body-parser');



// Get data from database
router.get('/', (req, res, next) => {
    Student.find()
    .then(result =>{
        res.status(200).json({
            studentData:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
});




//Get Data by ID

router.get('/:id', (req, res, next)=>{
    console.log(req.params.id);
    Student.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            student:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})


// here receive data from fronted site by thunder app
router.post('/', (req, res, next) => {
    const student = new Student({
        _id:new mongooes.Types.ObjectId,
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        gender:req.body.gender

    })
    student.save()
    .then(result=>{
        console.log(result);
        res.status(200).json({
            newStudent:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
});





// Delete Request by ID
router.delete('/:id', (req, res, next) => {
    Student.findByIdAndDelete(req.params.id)
        .then(result => {
            res.status(200).json({
                message: 'Successfully deleted',
                result: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});



// Put request by ID
router.put('/:id', (req, res, next) => {
    console.log(req.params.id);
    Student.findOneAndUpdate(
        { _id: req.params.id },
        {
            $set: {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                gender: req.body.gender
            }
        },
        { new: true } // Optional: Returns the updated document
    )
    .then(result => {
        res.status(200).json({
            updated_student: result
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});



// Export the router to use in app.js
module.exports = router;
