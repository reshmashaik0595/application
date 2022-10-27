const express = require('express');
const router = express.Router();

const Employee = require('../models/employee');

router.get('/getemployees', async (req, res) => {
    res.send(await Employee.find());
});

router.post('/addemployee', async (req, res) => {
    let newEmployee = new Employee(req.body);
    res.send(await newEmployee.save());
});

router.delete('/deleteemployee/:id', async (req, res) => {
    res.send(await Employee.remove({ _id: req.params.id }));
});

router.delete('/deleteemployees', async (req, res) => {
    res.send(await Employee.remove());
});

router.get('/getemployee/:id', async (req, res) => {
    res.send(await Employee.find({ _id: req.params.id }));
});

router.put('/updateemployee/:id', async (req, res) => {
    res.send(await Employee.updateOne({ _id: req.params.id }, req.body));
});

module.exports = router;