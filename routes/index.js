import { Router } from "express";
import adminRouter from "./admin.route.js";
import userRouter from "./user.route.js";

const router = Router();

router.use('/',adminRouter)
router.use('/',userRouter)

export default router;