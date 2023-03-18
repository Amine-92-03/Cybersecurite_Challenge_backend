const contact = require("../Models/contact");

module.exports.getAllUsers = async (req, res) => {
  contact.User.find({})
    .then((users) => {
      res.status(200).json({
        status_code: 200,
        flagIntegration: true,
        data: users,
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

module.exports.saveUser = (req, res) => {
  // Create a new user document
  const userForm = req.body;
  const user = new contact.User(userForm);
  // Save the user document to the database
  user
    .save()
    .then(() => {
      res.status(200).json({
        status_code: 200,
        flagIntegration: true,
        message: "User saved to collection!",
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

module.exports.testApi = (req, res) => {
  res.status(200).json({
    status_code: 200,
    data: {
      user: "amine",
      company: "EPSI",
      project: "CYBER SECURITE CHALLENGE BACKEND",
      date: new Date(),
    },
    message: "Salut Romain c'est un test pour toi",
  });
};
