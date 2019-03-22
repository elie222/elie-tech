import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { withKnobs, text, number } from "@storybook/addon-knobs"
import VideoList from "./VideoList"

storiesOf("VideoList", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    const videos = []

    const numberOfVideos = number("Number of videos", 3)

    for (let i = 0; i < numberOfVideos; i++) {
      videos.push({
        title: `Great Video #${i}`,
        link: "#",
        image: "TODO",
      })
    }

    return <VideoList videos={videos} />
  })
