import { mount } from "enzyme";
import "@testing-library/jest-dom";
import toJson from "enzyme-to-json";
import { AppRouter } from "../../Components/useContext/AppRouter";
import { UserContext } from "../../Components/useContext/UserContext";

describe("Test to AppRouter component", () => {
  const user = {
    name: "alicha",
    email: "euche@test.com",
  };
  const container = mount(
    <UserContext.Provider value={user}>
      <AppRouter />
    </UserContext.Provider>
  );
  it("Snapshot to AppRouter component", () => {
    expect(toJson(container)).toMatchSnapshot();
  });
});
