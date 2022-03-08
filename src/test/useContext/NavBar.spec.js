import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import toJson from "enzyme-to-json";
import { NavBar } from "../../Components/useContext/NavBar";

describe("Test to NavBar component", () => {
  const container = shallow(<NavBar />);
  it("snapshot to NavBar component", () => {
    expect(toJson(container)).toMatchSnapshot();
  });
  it("NavBar component contain NavLink", () => {
    const navLink = container.find("NavLink").exists();
    expect(navLink).toBeTruthy();
  });
});
