const { stringIsLiftedAppName } = require("../utils/isLiftedApp");

const liftedAppContext = (req, res, next) => {
    //TODO: connect to auxillary databases
  
    const liftedapp = req.headers.liftedapp;
  
    if (stringIsLiftedAppName(liftedapp) === false) {
      res
        .status(403)
        .send(
          "Not a valid liftedapp name. Double check you are sending a valid liftedapp name in the headers"
        );
    }
    next();
  }
module.exports = liftedAppContext;