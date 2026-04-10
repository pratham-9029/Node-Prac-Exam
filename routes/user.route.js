import { Router } from "express";
import userController from "../controllers/user.controller.js";
import userAuth from "../middleware/userAuth.js";

const userRouter = Router();

userRouter.get('/dashboard',userAuth,userController.dashboard);
userRouter.get('/login',userController.loginPage);
userRouter.post('/login',userController.login);
userRouter.get('/register',userController.registerPage);
userRouter.post('/register',userController.register);

export default userRouter;