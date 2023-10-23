import { Elysia } from "elysia";
import { appRouter } from "../routes/api.routes";
import error from "../error/404.error";
import { cookie } from '@elysiajs/cookie';
import { jwt } from "@elysiajs/jwt";
import { cors } from "@elysiajs/cors";
import authConfig from "../config/auth.config";

const app = new Elysia();

app.use(cors());
app.use(cookie());
app.use(jwt({
  name: "jwt",
  secret: String(authConfig.secret),
  exp: "7d",
  alg: "HS256"
}));
app.use(error);
app.use(appRouter);

export { app };
