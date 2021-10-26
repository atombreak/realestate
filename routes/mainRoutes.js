const express = require("express")
const router = express.Router();

const mainControls = require("../controlers/mianControls");
const { requireJwt, checkToken } = require("../middleware/authMiddleware");


router.get("/", checkToken, mainControls.home)

router.get("/detail", checkToken, mainControls.detail)

router.get("/info", checkToken, mainControls.info)

router.get("/search", checkToken, mainControls.search)

router.get("/dashbord", checkToken, requireJwt, mainControls.search)

module.exports = router;