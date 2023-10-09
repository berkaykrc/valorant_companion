import axios from "axios";
import {
  fetchDataSuccess,
  fetchDataFailure,
  agentById,
} from "../reducers/agentsReducer";
import { API_BASEURL } from "@env";

export const fetchAgentsData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_BASEURL}/agents?isPlayableCharacter=true`
      );
      const { data } = response.data;
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
      const response = await axios.get(`${API_BASEURL}/agents/${uuid}`);
      const { data } = response.data;
      dispatch(agentById(data));
    } catch (error) {
      const errorMessage = error.message;
      dispatch(fetchDataFailure(errorMessage));
    }
  };
};
