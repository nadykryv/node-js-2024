import { Router } from "express";

import { authController } from "../controllers/auth.controller";

const router = Router();

router.post(
  "/sign-In",
  //commonMiddleware.validateBody(UserValidator.create),
  authController.signIn,
);

export const authRouter = router;
