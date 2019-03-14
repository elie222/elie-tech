import { render, configure } from "enzyme"
import "jest"
import * as React from "react"
import Footer from "./Footer"

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16")
configure({ adapter: new Adapter() })

describe("Footer component", () => {
  it("should render correctly", () => {
    const wrapper = render(<Footer />)
    expect(wrapper).toMatchSnapshot()
  })
})
