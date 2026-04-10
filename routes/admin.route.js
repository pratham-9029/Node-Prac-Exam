import { Router } from "express";
import adminController from "../controllers/admin.controller.js";
import userAuth from "../middleware/userAuth.js";

const adminRouter = Router();

adminRouter.get('/dashboard',userAuth,adminController.dashboard);



export default adminRouter;