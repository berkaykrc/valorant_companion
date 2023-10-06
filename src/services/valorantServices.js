import axios from 'axios';
import { fetchDataSuccess, fetchDataFailure } from '../reducers/valorantReducer';

const BASE_URL = 'https://valorant-api.com/v1/';

export const fetchValorantData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}/agents`);
      const data = response.data;
      console.log(data);
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      const errorMessage = error.message;
      dispatch(fetchDataFailure(errorMessage));
    }
  };
};

/* export const fetchWeaponData = () => {
  return async (dispatch) => {
  const response = await axios.get(`${BASE_URL}/weapons`);}
};
 */