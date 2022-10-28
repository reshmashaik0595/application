const mongoose = require('mongoose');

const MemberSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    jobPosition: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    homeAddress: {
        type: String,
        required: true
    },
    officeAddress: {
        type: String,
        required: true
    },
    memberPhoto: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true
    },
    homeLandline: {
        type: String,
        required: true
    },
    officeLandline: {
        type: String,
        required: true
    },
    hobby: {
        type: String,
        required: true
    },
    PreviousOrganisation: {
        type: String,
        required: true
    },
    memberRankLevel: {
        type: String,
        required: true
    },
    memberstatus: {
        type: String,
        required: true
    },
    memberEarnedPoints: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Member', MemberSchema)