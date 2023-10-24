import { prismaClient } from "../app/database"

const getUserByUsername = async (username: string) => {
  const user = await prismaClient.user.findUnique({
    where: {
      username: username
    },
    select: {
      id: true,
      username: true,
      password: true,
      name: true,
      email: true,
      id_pemda: true
    },
  });

  return user;
}

const updateTokenUser = async (id: number, token: string) => {
  const user = await prismaClient.user.update({
    data: {
      token: token,
    },
    where: {
      id: id
    },
    select: {
      token: true,
    },
  });

  return user;
}

export default { getUserByUsername, updateTokenUser };