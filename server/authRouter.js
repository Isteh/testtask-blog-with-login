const Router = require('express');
const controller = require('./authController');
const router = new Router();

router.post(
  '/registration',
  controller.registration
);
router.post('/login', controller.login);

module.exports = router;
