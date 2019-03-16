import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import VideoItem from "./VideoItem"

storiesOf("VideoItem", module)
  .add("default", () => {
    const title: string = null // TODO assign real value
    const image: string = null // TODO assign real value
    const link: string = null // TODO assign real value

    return (
      <VideoItem title={title} image={image} link={link} />
    )
  })
