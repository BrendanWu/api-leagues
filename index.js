const express = require('express')
const path = require('path')
const app = express()

process.on('SIGINFO', (code)=> {
	console.log("Process pid", process.pid);
});



app.use(express.static(path.join(__dirname,"/apidoc")))
app.get("/api", (req,res)=> {
	res.sendFile(path.join(__dirname,"/apidoc/index.html"));
})

/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup Invitation
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

app.get("/api/t", (req,res)=> {
	res.send("hi")
})


app.listen(3000, ()=>{
	console.log("Leagues API v1.0 is running on port 3000");
})


module.exports = app;
