import express from 'express';
import {
  loginUser,
  registerUser,
  adminLogin,
} from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser); // Route for user registrationAdd commentMore actions
userRouter.post('/login', loginUser); // Route for user login
userRouter.post('/admin', adminLogin); // Route for admin login

export default userRouter;
