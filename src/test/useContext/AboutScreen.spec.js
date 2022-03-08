import { mount } from "enzyme";
import "@testing-library/jest-dom";
import toJson from "enzyme-to-json";
import { AboutScreen } from "../../Components/useContext";
import { UserContext } from "../../Components/useContext/UserContext";

describe("Testo to AboutScreen component", () => {
  const user = { name: "alicha", email: "euche@test.com" };
  const setUser = jest.fn();
  const container = mount(
    <UserContext.Provider value={{ user, setUser }}>
      <AboutScreen />
    </UserContext.Provider>
  );
  it("snapshot to AboutScreen", () => {
    expect(toJson(container)).toMatchSnapshot();
  });

  it("Delete the user object information in component", () => {
    container.find("button").simulate("click", () => {
      setUser();
    });
    expect(setUser).toHaveBeenCalledWith({});
  });
});
