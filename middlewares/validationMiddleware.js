// Middleware for validation
const validateMiddleware =(schema)=> (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {

    const { details } = error;
    const errors = details.map((i) => i.message);
    return res.status(400).json({ errors });
  }
  next();
};

module.exports = validateMiddleware;
