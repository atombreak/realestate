const express = require("express");
const cookieParser = require("cookie-parser")
const cors = require("cors")
const morgan = require("morgan")
const { checkToken } = require("./middleware/authMiddleware")
const jwt = require("jsonwebtoken")
const mainRoutes = require("./routes/mainRoutes")
const postRoutes = require("./routes/postRoutes")
const upload = require("express-fileupload")


//imports areas is here
const authRoutes = require("./routes/authRoutes");


require('dotenv').config();

const app = express();
const port = 4040;


app.listen(port, () => {
    console.log(`running server on port ${port}`)
})

//intiallization
app.use(cors())
app.use(morgan("tiny"))
app.use(cookieParser())
app.use(upload())
app.use(express.urlencoded({extended: true}))

app.set("view engine", "ejs");

app.use(express.static("public"))
app.use("/scss", express.static("public/scss"))
app.use("/images", express.static("public/images"))
app.use("/main", express.static("public/main"))

//routes
app.get("*", checkToken)
app.use("/auth", authRoutes)
app.use("/estate", postRoutes)
app.use(mainRoutes)
    /*
    app.get("/*", (req, res) => {
        res.render("index")
    })
    */