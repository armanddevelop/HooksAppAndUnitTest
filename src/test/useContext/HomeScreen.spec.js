import { mount } from "enzyme";
import "@testing-library/jest-dom";
import toJson from "enzyme-to-json";
import { HomeScreen } from "../../Components/useContext";
import { UserContext } from "../../Components/useContext/UserContext";

describe("Test to HomeScreen Component", () => {
  const user = {
    name: "alicha",
    email: "euche@test.com",
  };
  const container = mount(
    <UserContext.Provider value={{ user }}>
      <HomeScreen />
    </UserContext.Provider>
  );
  it("Snapshot to HomeScreen Component", () => {
    expect(toJson(container)).toMatchSnapshot();
  });
  it("data in pre label", () => {
    const dataJson = container.find("pre").text();
    expect(dataJson).toEqual(JSON.stringify(user));
  });
});
