type Secret = string | Buffer | {
  key: string | Buffer;
  passphrase: string;
}

type AuthConfig = {
  secret: Secret
}

const authConfig: AuthConfig = {
  secret: String(process.env.SECRET_KEY),
};

export default authConfig;