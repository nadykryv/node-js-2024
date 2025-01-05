import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";

import { ApiError } from "./errors/api-error";
import { userRouter } from "./routers/user.router";
import { read, write } from "./services/fs.service";

dotenv.config({ path: ".env" });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);

app.get(
  "/users/:userId",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const users = await read();

      const user = users.find((user) => user.id === +req.params.userId);
      res.json(user);
    } catch (e) {
      next(e);
    }
  },
);

app.put(
  "/users/:userId",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const users = await read();
      const index = users.findIndex(
        (user) => user.id === Number(req.params.userId),
      );

      if (index === -1) {
        throw new ApiError("User Not Found", 400);
      }
      const user = users[index];
      user.name = req.body.name;
      user.email = req.body.email;
      user.password = req.body.password;

      await write(users);
      res.status(201).json(user);
    } catch (e) {
      next(e);
    }
  },
);
app.delete(
  "/users/:userId",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const users = await read();
      const index = users.findIndex(
        (user) => user.id === Number(req.params.userId),
      );

      if (index === -1) {
        throw new ApiError("User Not Found", 400);
      }
      console.log(index);
      users.splice(index, 1);
      await write(users);
      res.sendStatus(204);
    } catch (e) {
      next(e);
    }
  },
);

app.use(
  "*",
  (error: ApiError, req: Request, res: Response, next: NextFunction) => {
    const status = error.status ?? 500;
    const message = error.message ?? "Something went wrong";
    res.status(status).json({ status, message });
  },
);

process.on("uncaughtException", (error: Error) => {
  console.error("UncaughtException", error);
  process.exit(1);
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
