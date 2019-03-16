import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import VideoList from "./VideoList"

storiesOf("VideoList", module)
  .add("default", () => {
    const videos: any[] = null // TODO assign real value

    return (
      <VideoList videos={videos} />
    )
  })
