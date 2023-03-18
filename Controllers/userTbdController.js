const contact = require("../Models/contact");

module.exports.addUserView = (req, res) => {
  return res.render("addUserView", {
    title: "Cybersécurité Challenge",
  });
};

module.exports.addUser = (req, res) => {
  // Create a new user document
  const userForm = req.body;
  const user = new contact.User(userForm);
  // Save the user document to the database
  user
    .save()
    .then(() => {
      res.redirect("/getlistUsers");
    })
    .catch((err) => {
      res.status(500).json({
        message: "User not saved to collection!",
        flagIntegration: false,
        erreur: err,
      });
    });
};
