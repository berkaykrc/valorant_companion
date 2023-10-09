import axios from "axios";
import {
    fetchMapDataSuccess,
    fetchMapDataFailure,
} from "../reducers/mapsReducer";
import { API_BASEURL } from "@env";

export const fetchMapData = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                `${API_BASEURL}/maps`
            );
            const { data } = response.data;
            dispatch(fetchMapDataSuccess(data));
        } catch (error) {
            const errorMessage = error.message;
            dispatch(fetchMapDataFailure(errorMessage));
        }
    };
}