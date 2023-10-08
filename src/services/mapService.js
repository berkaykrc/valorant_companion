import axios from "axios";
import {
    fetchMapDataSuccess,
    fetchMapDataFailure,
} from "../reducers/mapsReducer";


const BASE_URL = "https://valorant-api.com/v1";

export const fetchMapData = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                `${BASE_URL}/maps`
            );
            const { data } = response.data;
            dispatch(fetchMapDataSuccess(data));
        } catch (error) {
            const errorMessage = error.message;
            dispatch(fetchMapDataFailure(errorMessage));
        }
    };
}