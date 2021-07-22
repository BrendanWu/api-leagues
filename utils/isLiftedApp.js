const stringIsLiftedAppName = (a) => {
    const liftedApps = ["ellicot", "leagues", "solutions"];

    if (typeof a != "string") {
      return false;
    }
    if (liftedApps.includes(a)) {
      return true;
    }
    return false;
  };

  module.exports = {
      stringIsLiftedAppName
  }