import axios from "axios";
import { fetchDataSuccess, fetchDataFailure } from "../reducers/agentsReducer";

const BASE_URL = "https://valorant-api.com/v1";

export const fetchAgentsData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/agents?isPlayableCharacter=true`
      );
      const { data } = response.data;
      console.log(response.status);
      console.log(data);
      const a = fetchDataSuccess(data);
      console.log(a);
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      const errorMessage = error.message;
      dispatch(fetchDataFailure(errorMessage));
    }
  };
};

export const fetchAgentById = ({ uuid }) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}/agents/${uuid}`);
      const { data } = response.data;
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      const errorMessage = error.message;
      dispatch(fetchDataFailure(errorMessage));
    }
  };
};
