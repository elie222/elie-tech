import { render, configure } from "enzyme";
import "jest";
import * as React from "react";
import Header from "./Header";

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

describe("Header component", () => {
  it("should render correctly", () => {
    const wrapper = render(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
