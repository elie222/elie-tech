import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import VideoItem from "./VideoItem"

storiesOf("VideoItem", module).add("default", () => {
  const title = "Great Video"
  const image = "TODO"
  const link = "#"

  return <VideoItem title={title} image={image} link={link} />
})
