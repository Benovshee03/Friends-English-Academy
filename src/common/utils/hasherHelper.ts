import CryptoJS from "crypto-js";
import AppConsts from "../../library/Appconsts";

export const encryptData = (value: string) => {
  const data = CryptoJS.AES.encrypt(
    JSON.stringify(value),
    `${AppConsts.reactAppSecureSecret}`
  ).toString();

  return data;
};

export const decryptData = (value: string) => {
  const bytes = CryptoJS.AES.decrypt(
    value,
    `${AppConsts.reactAppSecureSecret}`
  );
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};