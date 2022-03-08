import { HooksApp } from "../HooksApp";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import toJson from "enzyme-to-json";

describe("Snapshot to HooksApp", () => {
  it("should take a snapShot", () => {
    const wrapper = shallow(<HooksApp />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
