import { mount } from "enzyme";
import "@testing-library/jest-dom";
import toJson from "enzyme-to-json";
import { LognScreen } from "../../Components/useContext";
import { UserContext } from "../../Components/useContext/UserContext";

describe("Test to LognScreen", () => {
  const setUser = jest.fn();
  const container = mount(
    <UserContext.Provider value={{ setUser }}>
      <LognScreen />
    </UserContext.Provider>
  );

  it("Snapshot to LognScreen", () => {
    expect(toJson(container)).toMatchSnapshot();
  });

  it("Simulate onclick event", () => {
    container.find("button").simulate("click", () => {
      setUser();
    });
    const objectTest = {
      id: 123,
      name: "creting",
    };
    expect(setUser).toHaveBeenCalledWith(objectTest);
  });
});
