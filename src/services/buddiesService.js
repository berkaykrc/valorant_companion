import axios from "axios";
import {
    fetchBuddiesDataSuccess,
    fetchBuddiesDataFailure,
} from "../reducers/buddiesReducer";
import { API_BASEURL } from "@env";

export const fetchBuddiesData = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                `${API_BASEURL}/buddies`
            );
            const { data } = response.data;
            dispatch(fetchBuddiesDataSuccess(data));
        } catch (error) {
            const errorMessage = error.message;
            dispatch(fetchBuddiesDataFailure(errorMessage));
        }
    };
}