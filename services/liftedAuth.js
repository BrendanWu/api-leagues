
const CognitoExpress = require("cognito-express");
const {cognitoConfigObject} = require("../constants");

const liftedAuth = (req, res, next) => {
    const idTokenFromClient = req.headers.idtoken;

    if (!idTokenFromClient)
      return res.status(401).send("Access Token missing from header");
  
    //TODO: Configure user pool route by origin
    //TODO: Create cognito validation middleware;open source package unstable
    const cognitoExpress = new CognitoExpress(cognitoConfigObject);
  
    cognitoExpress.validate(idTokenFromClient, async function (err, awsUser) {
      if (err) return res.status(401).send(err);

      res.locals.awsUser = awsUser;
      next();
    });
  }
module.exports = liftedAuth;