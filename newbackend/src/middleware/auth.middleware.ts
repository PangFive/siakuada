import res from "../app/helpers/return";

const isAuthenticated = async ({ set, headers, jwt, cookie, setCookie }: any) => {

  let token: string = headers["x-access-token"] || cookie["x-access-token"];

  if (!token) {
    set.status = 403;

    return res({
      status: "error",
      message: "No token provided!",
    });
  }

  const profile = await jwt.verify(token);

  if (!profile) {
    set.status = 401;

    return res({
      status: "error",
      message: "Token is not valid",
    });
  }

  setCookie('x-access-token', token);

};

export { isAuthenticated };