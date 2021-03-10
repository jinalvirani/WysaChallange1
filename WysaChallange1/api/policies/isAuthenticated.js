module.exports = function (req, res, next) {
  if (!req.headers.authorization) {
    return res.forbidden();
  }
  const token = String(req.headers.authorization).replace("Bearer ", "");

  CipherService.verifyJwtToken(token, async (err, payload) => {
    if (!payload || err) {
      return res.forbidden();
    }
    req.user = payload.user;
    req.token = token;
    next();
  })
};