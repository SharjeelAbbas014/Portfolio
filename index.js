const express = require("express"),
    path = require("path");
var bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const keys = require("./key");
var app = express();
app.use(bodyParser.urlencoded({
    extended: !1
})), app.use(bodyParser.json()), app.use(express.static("client")), app.get("/", (req, res) => {
    res.sendFile("index.html", {
        root: path.join(__dirname, "/client")
    })
});
var user_name = "hello",
    email, message, subject;
app.post("/mail", function (req, res) {
    user_name = req.body.name.toString(), email = req.body.email.toString(), message = req.body.message.toString(), subject = req.body.subject.toString(), console.log(user_name + email + message + subject);
    var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: keys.user,
                pass: keys.pass
            }
        }),
        mailOptions = {
            from: "sharjeelabbas014@gmail.com",
            to: "sharjeelabbas014@gmail.com",
            subject: "*From Porfolio Site*" + subject,
            text: "from: " + email + "\nMessage: " + message
        };
    transporter.sendMail(mailOptions, function (error, info) {
        error ? console.log(error) : console.log("Email sent: " + info.response)
    }), res.sendFile("mail.html", {
        root: path.join(__dirname, "/client")
    })
});

app.get('/proj1',(req,res)=>{
    res.sendFile("index.html", {
        root: path.join(__dirname, "/client/proj/smoothies")
    })
});
const PORT = process.env.PORT || 5e3;
app.listen(PORT);