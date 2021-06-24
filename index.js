const express = require('express')

const app = express()

process.on('SIGINFO', (code)=> {
	console.log("Process pid", process.pid);
});

app.get("/", (req,res)=> {
	res.send("Leagues API v1.0");
})


app.listen(3000, ()=>{
	console.log("Leagues API v1.0 is running on port 3000");
})


module.exports = app;
