import { configureStore } from "@reduxjs/toolkit";
import agentsReducer from "../../reducers/agentsReducer";
import gunsReducer from "../../reducers/gunsReducer";
import mapsReducer from "../../reducers/mapsReducer";
import buddiesReducer  from "../../reducers/buddiesReducer";  

describe("Redux Store", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: { 
        agents: agentsReducer,
        maps: mapsReducer,
        buddies: buddiesReducer,
        guns: gunsReducer
      },
    });
  });

  it("should have default state values", () => {
    const state = store.getState();

    expect(state.agents).toEqual([]);
    expect(state.maps).toEqual([]);
    expect(state.buddies).toEqual([]);
    expect(state.guns).toEqual([]);
  });

  it("should update state when dispatching actions", () => {
    /**
     * Represents an agent in the game.
     * @typedef {Object} Agent
     * @property {string} name - The name of the agent.
     * @property {string} role - The role of the agent.
     */

    /**
     * An example agent object.
     * @type {Agent}
     */
    const agent = { name: "Jett", role: "Duelist" };
    store.dispatch(addAgent(agent));

    const state = store.getState();
    expect(state.agents).toEqual([agent]);
  });
});