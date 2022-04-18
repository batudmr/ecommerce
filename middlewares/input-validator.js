const { validationResult } = require('express-validator');

const inputValidator = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array({ onlyFirstError: true }) });
  } else {
    next();
  }
};

module.exports = inputValidator;
