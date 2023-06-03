const authOptional = (req, res, next) => {
  req.authNotMandatory = true;
  next(); // Indica que siga con la siguiente tarea, no le importa lo que es
}

module.exports = authOptional;
