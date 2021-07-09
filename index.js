const express = require("express");
const path = require("path");
const app = express();
const CognitoExpress = require("cognito-express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectLiftedDB = require("./services/connectLiftedDB");
const liftedAuth = require("./services/liftedAuth")
const liftedAppContext = require("./services/liftedAppContext");

//top level system configuration
dotenv.config();
//top level system processes
process.on("SIGINFO", () => {
  console.log("Leagues API pid", process.pid, "running Node js", process.version);
});
//top level api http configuration
connectLiftedDB();
app.use(express.json());
app.use(cors());
//top level api documentation
app.use(express.static(path.join(__dirname, "/apidoc")));
app.get("/docs", (req, res) => {
  res.sendFile(path.join(__dirname, "/apidoc/index.html"));
});
//auth routes (idtoken)
const authenticatedRoute = express.Router();
app.use("/api", authenticatedRoute);
//find the user (org context)
authenticatedRoute.use(liftedAuth);
//find the app (app context)
authenticatedRoute.use(liftedAppContext);
const PORT = process.env.PORT ? process.env.PORT : 5000
app.listen(PORT, () => {
  console.log(`Leagues API v${process.env.npm_package_version} is running on port ${PORT}`);
});

module.exports = app;
