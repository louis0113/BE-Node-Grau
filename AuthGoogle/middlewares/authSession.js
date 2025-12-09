const authenticateSession = (req, res, next) => {
  if (req.session && req.session.isAuthenticated) {
    return next();
  }
  res.status(401).json({ message: "Faça primeiro o login" });
};

module.exports = authenticateSession;
