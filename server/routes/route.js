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

module.exports = router;