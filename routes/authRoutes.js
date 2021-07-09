import express from 'express';
// const authController = require('../controllers/authController.js')
import { signup_post,login_post } from '../controllers/authController.js';
const router = express.Router();

router.post("/signup",signup_post);
router.post("/login",login_post);

export default router;