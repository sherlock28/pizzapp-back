const fieldUserValidation = (req, res, next) => {
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

  const fullnameRegex = /^[A-ZÁÉÍÓÚÑ ]+$/i;

  const { fullname, username, email, password, confirmpass } = req.body;

  if (fullname === undefined || fullname.length === 0) {
    res.status(400).json({ status: "Error", message: "Full name is required" });
    return;
  }

  if (fullname.toString().match(fullnameRegex) === null) {
    res.status(400).json({
      status: "Error",
      message: "The name can only contain letters (A-Z) or (a-z)",
    });
    return;
  }

  if (username === undefined || username.length === 0) {
    res.status(400).json({ status: "Error", message: "Username is required" });
    return;
  }

  if (email === undefined || email.length == 0) {
    res.status(400).json({ status: "Error", message: "Email is required" });
    return;
  }

  if (password === undefined || password.length == 0) {
    res.status(400).json({ status: "Error", message: "Password is required" });
    return;
  }

  if (confirmpass === undefined || confirmpass.length == 0) {
    res
      .status(400)
      .json({ status: "Error", message: "Confirmpass is required" });
    return;
  }

  if (email.toString().match(emailRegex) === null) {
    res.status(400).json({
      status: "Error",
      message: "Invalid email",
    });
    return;
  }

  if (password != confirmpass) {
    res.status(400).json({ status: "Error", message: "Password not match" });
    return;
  }
  if (password.length < 8) {
    res.status(400).json({
      status: "Error",
      message: "Password must be at least 8 chars long",
    });
    return;
  }

  next();
};

module.exports = fieldUserValidation;
