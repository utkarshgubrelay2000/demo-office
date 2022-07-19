import axios from "axios";
import { baseUrl } from "./components/Base_url";

const localData = JSON.parse(sessionStorage.getItem("recoil-persist-rocket-app-012034220"));

export const loginUser = async (data) => {
    try {
      const res = await axios.post(`${baseUrl}/auth/login`, data);
      return { error: false, res: res };
    } catch (e) {
      const err = { error: true, data: e.response.data.data };
      return err;
    }
  };