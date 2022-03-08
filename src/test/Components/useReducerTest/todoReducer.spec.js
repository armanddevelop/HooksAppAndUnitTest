import { todoReducer } from "../../../Components/useReducer/todoReducer";
import { demosTodos } from "../../fixtures/demosTodos";

describe("Test for todoReducer", () => {
  it("Should return the default state", () => {
    const state = todoReducer(demosTodos, {});
    //console.log("Este es el valor de state ", state);
    expect(state).toEqual(demosTodos);
  });
  it("Should add todos in state", () => {
    const action = {
      type: "add",
      payload: {
        id: 3,
        description: "aprender Docker",
        done: false,
      },
    };
    const state = todoReducer(demosTodos, action);
    expect(state).not.toEqual(demosTodos);
    expect(state).toEqual([...demosTodos, action.payload]);
  });
  it("Should delete a todo in state", () => {
    const action = {
      type: "delete",
      payload: 1,
    };
    const defaultState = todoReducer(demosTodos, {});
    const state = todoReducer(demosTodos, action);
    expect(defaultState).not.toEqual(state);
  });
  it("Should toggle a todo in state", () => {
    const action = {
      type: "toggle",
      payload: 2,
    };
    const defaultState = todoReducer(demosTodos, {});
    const state = todoReducer(demosTodos, action);
    //console.log("Este es el valor de state ", state);
    expect(state.filter(({ done }) => done === true).length).toEqual(1);
    expect(defaultState).not.toEqual(state);
  });
});
