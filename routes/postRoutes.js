const express = require("express");
const PostControls = require("../controlers/postControls");
const { requireJwt, checkToken } = require("../middleware/authMiddleware");
const postValidate = require("../middleware/postValidate")

const router = express.Router()

router.get("/post", requireJwt, checkToken, PostControls.Post_get)

router.post("/post", postValidate, PostControls.Post_post)
router.get("/post/:id", PostControls.Post_detail)
router.delete("/post/:id", PostControls.Post_delete)
router.put("/post/:id", PostControls.Post_update)

module.exports = router;