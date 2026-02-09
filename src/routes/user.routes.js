import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { app } from "../app.js";

const userRouter = Router();

userRouter.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },{
            name:"coverImage",
            maxCount:1
        },{

        }

    ]), //middleware
registerUser)

userRouter.route("/login").post(loginUser)

userRouter.route("/logout").post(logoutUser)


export default userRouter;