module.exports = function(app) {
  var arithmetic = require("./controllers/arithmeticController");
  var myToken = "9278b9f396e023a0680f6100ce9371b2e7619827";
  app.route("/arithmetic").get(arithmetic.calculate);
};
