// ApiController
import res from "../app/helpers/return";
import { Elysia } from "elysia";

const index = async ({ set, request, headers, cookie }: any) => {

  const data = {
    title: "Home",
    message: "Hello World",
  };

  return headers["x-access-token"];
}

const test = async () => {
  return { halo: "nama saya SIAKUADa" };
}

const testId = async ({ params }: any) => {
  return {
    halo: "nama saya SIAKUADa",
    id: params.id
  };
}

export default { index, test, testId };