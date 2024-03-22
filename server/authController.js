const User = require('./userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secret } = require('./config');

const generateAccessToken = (id, email) => {
  const payload = {
    id,
    email,
  };
  return jwt.sign(payload, secret, {
    expiresIn: '24h',
  });
};

class authController {
  async registration(req, res) {
    try {
      const { email, password } = req.body;
      const regExEmailValidate =
        /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if (
        email.length === 0 ||
        password.length === 0
      ) {
        throw new Error(
          `Email or password can't be empty`
        );
      }
      if (!regExEmailValidate.test(email)) {
        throw new Error('Email is invalid');
      }
      if (
        password.length < 4 ||
        password.length > 16
      ) {
        throw new Error(
          'The password length must be greater than 4 and less than 16'
        );
      }

      const candidate = await User.findOne({
        email,
      });
      if (candidate) {
        throw new Error(
          'This email already used'
        );
      }
      const hashPassword = bcrypt.hashSync(
        password,
        7
      );
      const user = new User({
        email,
        password: hashPassword,
      });
      await user.save();
      return res.json({
        message: 'User succesfully registred',
      });
    } catch (e) {
      res
        .status(400)
        .json({ message: e.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('User not found');
      }
      const validPassword = bcrypt.compareSync(
        password,
        user.password
      );
      if (!validPassword) {
        throw new Error('Wrong password');
      }
      const token = generateAccessToken(
        user._id,
        email
      );
      return res.json({ token });
    } catch (e) {
      res
        .status(400)
        .json({ message: e.message });
    }
  }
}

module.exports = new authController();
