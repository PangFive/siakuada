// AUTHCONTROLLER
import res from "../app/helpers/return";
import authService from "../services/auth.service";


const sigin = async ({ set, body, setCookie, jwt }: any) => {
  const { username, password }: { username: string, password: string } = body;

  try {

    const user = await authService.getUserByUsername(username);

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
        id: user.id,
        username: user.username,
        email: user.email,
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

export default { sigin }