const validator = require("email-validator");

const validate = (req,res,next) => {
    if (!req.body.title || req.body.title.length < 4) {
        return res.status(400).json({ massage: "Please Enter a  valid title for the estate"})
    }
    if (!req.body.description || req.body.description.length < 8) {
        return res.status(400).json({ massage: "Description must be atleast 4 words "})
    }
    if (!req.body.price || isNaN(req.body.price) ) {
        return res.status(400).json({ massage: "Enter the ammount in digits"})
    }
    if (!req.body.location ) {
        return res.status(400).json({ massage: "Location is required"})
    }
    if (!req.body.category ) {
        return res.status(400).json({ massage: "Estate category is required for search reasons"})
    }
    if (!req.body.option ) {
        return res.status(400).json({ massage: "Select either estate is for Sale or Rent"})
    }
    
    next();
}

module.exports = validate;