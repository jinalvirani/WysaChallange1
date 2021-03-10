/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  signUp: async function (req, res) {
    try {
      console.log(req.body)
      if (!req.body.nickname)
        return res.badRequest({ message: "NICKNAME_REQUIRED" });
      if (!req.body.password)
        return res.badRequest({ message: "PASSWORD_REQUIRED" });
      const user = await User.findOne({ nickname: req.body.nickname })
      console.log(user)
      if (!user) {
        const newUser = await User.create({ nickname: req.body.nickname, password: req.body.password }).fetch();
        const token = CipherService.createToken(newUser);
        newUser.token = token;
        return res.ok(newUser);
      }
      else
        return res.badRequest({ message: "USER_ALREADY_EXISTS" })
    }
    catch (err) {
      return res.serverError(err);
    }
  }
};

