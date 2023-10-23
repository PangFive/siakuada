import { Elysia } from "elysia";
import res from "../app/helpers/return";

const error = new Elysia();

error.onError(({ code, error, set }) => {
  if (code === 'NOT_FOUND') {
    set.status = 404

    return res({ status: "error", message: "Not Found" })
  }
});

export default error;