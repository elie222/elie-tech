import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { withKnobs, text } from "@storybook/addon-knobs"
import VideoItem from "./VideoItem"

storiesOf("VideoItem", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    const title = text("Title", "Great Video")
    const link = text("Link", "#")
    const image = "TODO"

    return <VideoItem title={title} image={image} link={link} />
  })
