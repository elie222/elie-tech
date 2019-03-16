import { render, configure } from "enzyme"
import "jest"
import * as React from "react"
import VideoItem from "./VideoItem"

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16")
configure({ adapter: new Adapter() })

describe("VideoItem component", () => {
  it("should render correctly", () => {
    const title: string = null // TODO assign real value
    const image: string = null // TODO assign real value
    const link: string = null // TODO assign real value

    const wrapper = render(<VideoItem title={title} image={image} link={link} />)
    expect(wrapper).toMatchSnapshot()
  })
})
