// AUTHCONTROLLER
import res from "../app/helpers/return";
import authService from "../services/auth.service";


const sigin = async ({ set, body, setCookie, jwt }: any) => {
  const { username, password }: { username: string, password: string } = body;

  try {

    const user: any = await authService.getUserByUsername(username);

    if (!user) {
      set.status = 401;
      return res({
        status: "error",
        message: "Username dan Password salah",
      });
    }

    const isPasswordValid = await Bun.password.verify(password, user.password);

    if (!isPasswordValid) {
      set.status = 401;
      return res({
        status: "error",
        message: "Username dan Password salah",
      });
    }

    const token = await jwt.sign(
      {
        tahun: 2023,
        id: user.id,
        id_pemda: user.id_pemda,
        username: user.username,
        email: user.email,
        name: user.name,
      });

    authService.updateTokenUser(user.id, token);

    setCookie('x-access-token', token);

    const data = {
      id: user.id,
      token: token,
      nama: user.name,
      username: user.username,
      email: user.email,
    }

    return res({
      status: "success",
      data: data
    });

  } catch (error) {

    set.status = 403;

    return res({
      status: "error",
      message: "Gagal Login Error",
    });
  }
};

const checkAuth = async ({ set, headers, jwt, cookie }: any) => {
  let token: string = headers["x-access-token"] || cookie["x-access-token"];

  if (!token) {
    set.status = 403;

    return res({
      status: "error",
      message: "No token provided!",
    });
  }

  const profile = await jwt.verify(token);

  return res({
    status: "success",
    data: profile
  });
};


export default { sigin, checkAuth }