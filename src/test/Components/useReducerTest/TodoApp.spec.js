import "@testing-library/jest-dom";
import toJson from "enzyme-to-json";
import { shallow, mount } from "enzyme";
import { TodoApp } from "../../../Components/useReducer/TodoApp";
import { demosTodos } from "../../fixtures/demosTodos";
import { act } from "@testing-library/react";

describe("Test for TodoApp component", () => {
  const container = shallow(<TodoApp />);
  Storage.prototype.setItem = jest.fn(() => {});

  it("Snapshot to TodoApp component", () => {
    expect(toJson(container)).toMatchSnapshot();
  });

  it("Should add a to do", () => {
    const container = mount(<TodoApp />);
    act(() => {
      container.find("TodoAdd").prop("handleAddToDo")(demosTodos[0]);
      container.find("TodoAdd").prop("handleAddToDo")(demosTodos[1]);
    });
    expect(container.find("h1").text().trim()).toBe(
      `To do App (${demosTodos.length})`
    );
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    //expect(localStorage.setItem).toHaveBeenCalledWith({});
  });

  it("Should delete a todo", () => {
    act(() => {
      container.find("TodoAdd").prop("handleAddToDo")(demosTodos[0]);
      container.find("TodoList").prop("handleDelete")(demosTodos[0].id);
    });

    expect(container.find("h1").text().trim()).toBe(`To do App (${0})`);
  });
});
