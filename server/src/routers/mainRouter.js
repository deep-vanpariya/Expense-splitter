import { Router } from "express"
import { userRouter } from "./userRouter.js";
import { groupRouter } from "./groupRouter.js";


const mainRouter = Router();
mainRouter.use("/user", userRouter);
mainRouter.use("/group", groupRouter);

export {
    mainRouter
}