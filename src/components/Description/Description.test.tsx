import { render, configure } from "enzyme"
import "jest"
import * as React from "react"
import Description from "./Description"

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16")
configure({ adapter: new Adapter() })

describe("Description component", () => {
  it("should render correctly", () => {
    const title: string = null // TODO assign real value
    const description: string = null // TODO assign real value

    const wrapper = render(<Description title={title} description={description} />)
    expect(wrapper).toMatchSnapshot()
  })
})
