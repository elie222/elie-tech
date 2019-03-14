import { render, configure } from "enzyme"
import "jest"
import * as React from "react"
import Section from "./Section"

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16")
configure({ adapter: new Adapter() })

describe("Section component", () => {
  it("should render correctly", () => {
    const wrapper = render(<Section />)
    expect(wrapper).toMatchSnapshot()
  })
})
