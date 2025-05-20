import * as CryptoJS from 'crypto-js';

const SECRET_KEY = 'g9vS$7rLp@2xE!fWqZ#mNc8DYtUB^1AJ'; 

export const encrypt = (text: string): string => {
  return CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
};

export const decrypt = (ciphertext: string): string => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};