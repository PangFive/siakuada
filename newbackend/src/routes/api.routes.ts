import { Elysia } from "elysia";
import apiController from "../controllers/api.controller";
import authController from "../controllers/auth.controller";
import { isAuthenticated } from "../middleware/auth.middleware";

const app = new Elysia({ prefix: "/api/v1" });

app.get('/login', ({ request, headers, }) => {


});

app.get("/", apiController.index, { beforeHandle: isAuthenticated });
app.get("/auth", apiController.index, { beforeHandle: isAuthenticated });
app.post("/auth/sigin", authController.sigin);
app.get("/test/:id", apiController.testId, { beforeHandle: isAuthenticated });

export {
  app as appRouter
};



