const contact = require("../Models/contact");

module.exports.chartTest = (req, res) => {
  return res.render("chartstest", { title: "Cybersécurité Challenge" });
};
//  Partie page Utilisateurs

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

module.exports.deleteUserView = (req, res) => {
  const id = req.query.id_user;
  contact.User.findById(id)
    .then((user) => {
      return res.render("deleteUserView", {
        title: "Cybersécurité Challenge",
        user: user,
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

module.exports.deleteUser = (req, res) => {
  const id = req.query.id_user;
  contact.User.findByIdAndRemove(id)
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

module.exports.updateUserView = (req, res) => {
  const id = req.query.id_user;
  contact.User.findById(id)
    .then((user) => {
      return res.render("updateUserView", {
        title: "Cybersécurité Challenge",
        user: user,
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

module.exports.updateUser = (req, res) => {
  const id = req.query.id_user;
  const userForm = req.body;
  const user = new contact.User(userForm);
  contact.User.findByIdAndUpdate(
    id,
    {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      age: user.age,
    },
    { new: true }
  )
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
//  page principal HOME

module.exports.getHomedata = (req, res) => {
  return res.render("index", { title: "Cybersécurité Challenge" });
};
