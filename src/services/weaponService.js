import axios from "axios";
import { fetchDataSuccess, fetchDataFailure } from "../reducers/gunsReducer";

const BASE_URL = "https://valorant-api.com/v1";

export const fetchWeaponData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}/weapons`);
      const { data } = response.data;
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      const errorMessage = error.message;
      dispatch(fetchDataFailure(errorMessage));
    }
  };
};
