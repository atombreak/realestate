const validator = require("email-validator");

const validate = (req,res,next) => {
    if (!req.body.fullName || req.body.fullName.length < 4) {
        return res.status(400).json({ massage: "Please Enter a valide Name"})
    }
    if (!req.body.password || req.body.password.length < 6) {
        return res.status(400).json({ massage: "Password must be atleast 6 characters "})
    }
    if (!req.body.email || !validator.validate(req.body.email) ) {
        return res.status(400).json({ massage: "Enter Correct Email "})
    }
    if (!req.body.phone || isNaN(req.body.phone) || req.body.phone.length < 10 || req.body.phone.length > 11 || req.body.phone[0] > 1) {
        return res.status(400).json({ massage: "Phone number is invalide"})
    }
    next();
}

module.exports = validate;



 
