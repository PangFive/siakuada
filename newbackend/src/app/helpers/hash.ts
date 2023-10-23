import CryptoJS from "crypto-js";

function encrypt(string: string, key: string): string {
  const encrypted = CryptoJS.AES.encrypt(string, key);
  return encrypted.toString();
}

function decrypt(encryptedString: string, key: string): string {
  const decrypted = CryptoJS.AES.decrypt(encryptedString, key);
  return decrypted.toString(CryptoJS.enc.Utf8);
}

export { encrypt, decrypt }
