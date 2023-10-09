import axios from "axios";
import { fetchDataSuccess, fetchDataFailure } from "../reducers/gunsReducer";
import { API_BASEURL } from "@env";

export const fetchWeaponData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_BASEURL}/weapons`);
      const { data } = response.data;
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      const errorMessage = error.message;
      dispatch(fetchDataFailure(errorMessage));
    }
  };
};
