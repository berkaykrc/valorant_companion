import axios from 'axios';

export const fetchEndpointData = (endpoint) => async (dispatch) => {
  try {
    const response = await axios.get(`https://valorant-api.com/v1/${endpoint}`);
    dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_DATA_FAILURE', payload: error });
  }
};
