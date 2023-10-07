import { configureStore } from "@reduxjs/toolkit";
import agentsReducer from "../reducers/agentsReducer";
import gunsReducer from "../reducers/gunsReducer";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: { 
    agents: agentsReducer,
    //agent: agentReducer,
    //maps: mapsReducer,
    //mapsDetail: mapsDetailReducer,
    //buddies: buddiesReducer,
    guns: gunsReducer
  },
});

function MainProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default MainProvider;
