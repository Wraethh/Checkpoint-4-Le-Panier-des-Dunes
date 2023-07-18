const yup = require("yup");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const { JWT_SECRET, JWT_TIMING } = process.env;

const validateLogin = (req, res, next) => {
  // --- Définition du schéma de validation ---
  const authSchema = yup.object({
    pseudo: yup
      .string()
      .typeError("Le pseudo doit être constitué d'une chaîne de caratères")
      .required("Veuillez entrer votre pseudo"),
    password: yup
      .string()
      .typeError(
        "Le mot de passe doit être constitué d'une chaîne de caratères"
      )
      .required("Veuillez entrer votre mot de passe"),
  });

  // --- Validation du schema ---
  authSchema
    .validate(req.body)
    .then(() => next())
    .catch((error) => res.status(422).json({ [error.path]: error.message }));
};

module.exports = {
  validateLogin,
};

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const verifyPassword = (req, res) => {
  argon2
    // Verifie si le password hashé dans la BDD correspond au password en clair founit par la requête
    .verify(req.user.hashed_password, req.body.password, hashingOptions)
    // Si c'est bon, création d'un token
    .then((isVerified) => {
      if (isVerified) {
        const token = jwt.sign(
          {
            sub: req.user,
          },
          JWT_SECRET,
          {
            expiresIn: JWT_TIMING,
          }
        );

        delete req.body.password;
        delete req.user.hashed_password;

        // Insère le token dans le cookie et renvoi l'utilisateur
        res
          .cookie("access_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
          })
          .send(req.user);
      } else res.sendStatus(401);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const verifyToken = (req, res, next) => {
  try {
    // Récupère le token dans le cookie
    const token = req.cookies.access_token;
    if (!token) return res.sendStatus(403);

    // Vérifie que le token et le JWT_SECRET correspondent bien
    req.payloads = jwt.verify(token, JWT_SECRET);
    return next();
  } catch (err) {
    console.error(err);
    return res.sendStatus(403);
  }
};

const logout = (req, res) => {
  res.clearCookie("access_token").sendStatus(200);
};

module.exports = {
  validateLogin,
  verifyPassword,
  verifyToken,
  logout,
};
