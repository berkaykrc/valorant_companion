import axios from "axios";
import {
    fetchBuddiesDataSuccess,
    fetchBuddiesDataFailure,
} from "../reducers/buddiesReducer";


const BASE_URL = "https://valorant-api.com/v1";

export const fetchBuddiesData = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                `${BASE_URL}/buddies`
            );
            const { data } = response.data;
            dispatch(fetchBuddiesDataSuccess(data));
        } catch (error) {
            const errorMessage = error.message;
            dispatch(fetchBuddiesDataFailure(errorMessage));
        }
    };
}