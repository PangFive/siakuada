import { Elysia } from "elysia";
import apiController from "../controllers/api.controller";
import authController from "../controllers/auth.controller";
import indikatorController from "../controllers/indikator.controller";
import { isAuthenticated } from "../middleware/auth.middleware";

const app = new Elysia({ prefix: "/api/v1" });

app.get('/login', ({ request, headers, }) => {


});

app.get("/", apiController.index, { beforeHandle: isAuthenticated });
app.get("/auth", authController.checkAuth, { beforeHandle: isAuthenticated }); // untuk pengecheckan authentication user
app.post("/auth/sigin", authController.sigin);

app.post("/indikator/save", indikatorController.saveIndikator, { beforeHandle: isAuthenticated });
app.get("/indikator/getJawabanKriteria/:aspekId", indikatorController.getJawabanKriteria, { beforeHandle: isAuthenticated });
app.get("/indikator/:indikator", indikatorController.indikator, { beforeHandle: isAuthenticated });
app.get("/indikator/:indikator", indikatorController.indikator, { beforeHandle: isAuthenticated });

export {
  app as appRouter
};



