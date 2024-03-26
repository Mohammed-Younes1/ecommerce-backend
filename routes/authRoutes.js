const { Router } = require('express');
const authController = require('../controllers/authControllers');
const verifyToken = require("../middleware/authMiddleware");

const router = Router();

router.post('/signup', authController.signup_post);
router.post('/login', authController.login_post);
router.put('/update_profile',verifyToken,authController.update_profile);

module.exports = router;
