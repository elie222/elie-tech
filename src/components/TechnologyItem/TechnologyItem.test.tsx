import { render, configure } from "enzyme"
import "jest"
import * as React from "react"
import TechnologyItem from "./TechnologyItem"

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16")
configure({ adapter: new Adapter() })

describe("TechnologyItem component", () => {
  it("should render correctly", () => {
    const title: string = null // TODO assign real value
    const image: string = null // TODO assign real value

    const wrapper = render(<TechnologyItem title={title} image={image} />)
    expect(wrapper).toMatchSnapshot()
  })
})
