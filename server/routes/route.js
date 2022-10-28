const express = require('express');
const router = express.Router();

const Employee = require('../models/employee');
const Member = require('../models/member');

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

router.post('/addmember', async (req, res) => {
    let newMember = new Member(req.body);
    res.send(await newMember.save());
});
router.get('/getmembers', async (req, res) => {
    res.send(await Member.find());
});
router.get('/getmember/:id', async (req, res) => {
    res.send(await Member.find({ _id: req.params.id }));
});
router.put('/updatemember/:id', async (req, res) => {
    res.send(await Member.updateOne({ _id: req.params.id }, req.body));
});
router.delete('/deletemember/:id', async (req, res) => {
    res.send(await Member.remove({ _id: req.params.id }));
});
router.delete('/deleteallmembers', async (req, res) => {
    res.send(await Member.remove());
});



module.exports = router;