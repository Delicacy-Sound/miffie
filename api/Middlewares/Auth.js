let config;
try {
  devconfig = require("../../dev-config");
} catch {
  config = require("../../botconfig");
}

const Auth = (req, res, next) => {
  if (!req.user) return res.redirect(config.CallbackURL);
  else next();
};

module.exports = Auth;
