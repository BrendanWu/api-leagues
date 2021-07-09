const { stringIsLiftedAppName } = require("../utils/isLiftedApp");

const liftedAppContext = (req, res, next) => {
    //TODO: connect to auxillary databases
  
    const liftedApp = req.headers.liftedApp;
    if (stringIsLiftedAppName(liftedApp) === false) {
      res
        .status(403)
        .send(
          "Not a valid liftedApp name. Double check you are sending a valid liftedApp name in the headers"
        );
    }
    next();
  }
module.exports = liftedAppContext;