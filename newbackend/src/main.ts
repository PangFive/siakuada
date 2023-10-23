import { app } from "./app/api";

const port: number = Number(process.env.PORT);

app.listen(port);

console.log(
  `🦊 SIAKUADa is running at ${app.server?.hostname}:${app.server?.port}`
);
