import { siteName } from "../constants/constants";

export const saveAuthDataLocalStorage = (data) => {
  localStorage.setItem(siteName, JSON.stringify(data));
};

export const getAuthDataFromLocalStorage = () => {
  try {
    const data = localStorage.getItem(siteName);
    if (!data) {
      return null;
    }
    return JSON.parse(data);
  } catch (error) {
    return null;
  }
};
