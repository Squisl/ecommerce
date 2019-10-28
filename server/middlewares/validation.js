const Joi = require("@hapi/joi");
// Schemas
const register = Joi.object({
  first_name: Joi.string()
    .min(1)
    .required(),
  last_name: Joi.string()
    .min(1)
    .required(),
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string().required()
});

const login = Joi.object({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string().required()
});

const schemas = {
  register,
  login
};

// Validation middleware
const check = (schema, param) => (req, res, next) => {
  const { error } = schema.validate(req[param], { abortEarly: false });

  if (error) {
    return res.status(422).send(
      error.details.reduce((acc, curr) => {
        acc[curr.path] = curr.message;
        return acc;
      }, {})
    );
  } else {
    next();
  }
};

module.exports = {
  schemas,
  check
};
