import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import toJson from "enzyme-to-json";
import { TodoListItems } from "../../../../Components/useReducer/Components/TodoListItems";

describe("Test for TodoListItems", () => {
  const handleDelete = jest.fn();
  const handleToogle = jest.fn();
  const container = shallow(
    <TodoListItems
      description="aprender Docker"
      done={false}
      idx={0}
      id={1}
      handleDelete={handleDelete}
      handleToogle={handleToogle}
    />
  );

  it("Take Snapshot to todoListItems", () => {
    expect(toJson(container)).toMatchSnapshot();
  });

  it("Should call handleDelete", () => {
    container.find("button").simulate("click", () => {
      handleDelete();
    });
    expect(handleDelete).toHaveBeenCalledWith(1);
  });

  it("Should call handleToogle", () => {
    container.find("p").simulate("click", () => {
      handleToogle();
    });
    expect(handleToogle).toHaveBeenCalledWith(1);
  });

  it("Should show className empty", () => {
    const text = container.find("p").text();
    const completeClass = container.find("p").hasClass("complete");
    expect(container.find("p").text()).toBe(text);
    expect(completeClass).toBeFalsy();
  });

  it("Should show className complete", () => {
    const container = shallow(
      <TodoListItems
        description="aprender Docker"
        done={true}
        idx={0}
        id={1}
        handleDelete={handleDelete}
        handleToogle={handleToogle}
      />
    );
    const completeClass = container.find("p").hasClass("complete");
    expect(completeClass).toBeTruthy();
  });
});
