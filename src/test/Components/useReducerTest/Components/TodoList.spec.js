import { TodoList } from "../../../../Components/useReducer/Components/TodoList";
import { demosTodos } from "../../../fixtures/demosTodos";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import toJson from "enzyme-to-json";

describe("Unit Test to TodoList component", () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  const container = shallow(
    <TodoList
      todos={demosTodos}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  it("Snapshot to TodoList", () => {
    expect(toJson(container)).toMatchSnapshot();
  });

  it("TodoListItem component exist", () => {
    expect(container.find("TodoListItems").exists()).toBeTruthy();
  });

  it("Should have TodoListItem", () => {
    expect(container.find("TodoListItems").length).toBe(demosTodos.length);
    //console.log(container.find("TodoListItems").at(0).props());
    const { description, done, id, handleDelete, handleToogle } = container
      .find("TodoListItems")
      .at(0)
      .props();
    expect(description).toBe(demosTodos[0].description);
    expect(done).toBe(demosTodos[0].done);
    expect(id).toBe(demosTodos[0].id);
    expect(handleDelete).toEqual(expect.any(Function));
    expect(handleToogle).toEqual(expect.any(Function));
  });
});
