const models = require("../models");

const checkIfUserExists = (req, res, next) => {
  // We just wanna check if user exist with this mail
  const { pseudo } = req.body;
  models.user
    .findByPseudo(pseudo)
    .then(([users]) => {
      if (users[0]) {
        // if user exist, push it to req.user so we can access like req.user.id, req.user.firstname, etc
        [req.user] = users;
        next();
      } else {
        // If user with this mail doesnt exist
        res.status(401).send("Pseudo doesn't exist");
      }
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

module.exports = {
  checkIfUserExists,
};
