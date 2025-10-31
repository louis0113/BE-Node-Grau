const authenticateSession = (req, res, next) => {
  if (req.session && req.session.isAuthenticated) {
    return next();
  }
  res.status(401).json({ message: "Faça primeiro o login" });
};

const authorizedRole = (...AllowedRoles) => {
  return (req, res, next) => {
    if (!req.session || !req.session.isAuthenticated) {
      return res.status(401).json({ message: "Unathorized" });
    }

    if (!AllowedRoles.includes(req.session.role)) {
      return res.status(403).json({ message: "Forbidden" });
    }

    next();
  };
};
module.exports = { authenticateSession, authorizedRole };
