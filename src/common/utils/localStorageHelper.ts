import SecureLS from "secure-ls"; // secure local storage
import AppConsts from "../../library/Appconsts";
const ls = new SecureLS({
  encodingType: "aes",
  encryptionSecret: AppConsts.reactAppSecureLsSecret,
});

export const setStore = (key: string, value: string) => {
  try {
    ls.set(key, value);
  } catch (e) {
    throw new Error("An error occured while setting local storage.");
  }
};
export const getStore = (key: string) => {
  try {
    return ls.get(key);
  } catch (e) {
    throw new Error("An error occured while getting local storage.");
  }
};
export const removeStore = (key: string) => {
  try {
    ls.remove(key);
  } catch (e) {
    throw new Error("An error occured while removing local storage.");
  }
};