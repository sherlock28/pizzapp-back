const { User } = require("../../models");
const jwt = require("jsonwebtoken");

/**
 * This middleware check if the token is valid
 * @param {Request} req
 * @param {Response} res
 * @param {function} next
 * @returns {Response || function} Respond a json if the token is invalid or the execution of next if the token is valid
 */
const tokenValidation = async (req, res, next) => {
  /*Se obtiene el token enviado */
  const authorization = req.header("Authorization");

  /*Se comprueba que se haya recido el token*/
  if (!authorization)
    return res.status(401).json({
      status: "Denied",
      message: "Access denied",
    });

  try {
    if (authorization.toLowerCase().startsWith("bearer")) {
      /*Se obtiene el token y se comprueba que sea válido*/
      const token = authorization.split(" ")[1];
      /*Utilizando jwt se verifica el token y se obtiene su contenido */
      const decode = jwt.verify(token, process.env.SECRET_KEY);
      /*Con los datos obtenidos del token se verifica que el mismo
          pertenece al usuario consultando en la db*/
      const user = await User.findOne({
        $and: [{ _id: decode._id }, { token: token }],
      });
      /*Si la consulta anterio devuelve null significa que el token no pertece al usuario o bien que el usuario no esta logueado y por lo tanto no tiene su token registrado en la db*/
      if (user === null) {
        return res.status(401).json({
          status: "Denied",
          message: "Access denied 1",
        });
      }
      next(); /* El si el token es valido se ejecuta next() */
    } else {
      return res.status(401).json({
        status: "Denied",
        message: "Access denied 2",
      });
    }
  } catch (err) {
    return res.status(401).json({
      status: "Denied",
      message: "Invalid token 3",
    });
  }
};

module.exports = tokenValidation;
