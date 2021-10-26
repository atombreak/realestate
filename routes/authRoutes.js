const express = require("express")
const router = express.Router()
const authControlers = require("../controlers/authControls")
const validate = require("../middleware/validator")


router.get("/sign", authControlers.sign_get)
router.post("/sign", validate, authControlers.sign_post)
router.get("/login", authControlers.login_get)
router.post("/login", authControlers.login_post)
router.get("/loginout", authControlers.loginout_get)


module.exports = router;


