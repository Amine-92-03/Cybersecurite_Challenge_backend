const contact = require("../Models/contact");

module.exports.getHomedata = (req, res) => {
  return res.render("index", { title: "Cybersécurité Challenge" });
};

module.exports.getListViews = (req, res) => {
  contact.User.find({})
    .then((users) => {
      return res.render("listeUsers", {
        title: "Cybersécurité Challenge",
        users: users,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "User not saved to collection!",
        flagIntegration: false,
        erreur: err,
      });
    });
};
