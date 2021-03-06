const User = require('../models/User');

var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/');
    } else {
        next();
    }    
};

var employeeChecker = (req, res, next) => {
    if (req.session.user && req.session.user.isEmployee) {
        res.redirect('/adddish');
    } else {
        next();
    }    
};

module.exports = sessionChecker;

module.exports = employeeChecker;