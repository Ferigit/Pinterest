import {
  setCookie as setCookieAct,
  getCookie as getCookieAct,
  deleteCookie as deleteCookieAct,
} from "cookies-next";

const useCookie = () => {
  const getCookie = (key: string) => getCookieAct(key);

  const setCookie = (key: string, value: string) => setCookieAct(key, value);

  const removeCookie = (key: string) => deleteCookieAct(key);

  return { setCookie, getCookie, removeCookie };
};

export default useCookie;
