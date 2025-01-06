import dotenv from "dotenv";

dotenv.config({ path: ".env" });
export const config = {
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGGO_URI || "mongodb://localhost:27017/express-mongo",
};
