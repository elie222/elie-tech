import * as React from "react"
import styled from "@emotion/styled"
import VideoItem, { VideoItemProps } from "../VideoItem/VideoItem"

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  grid-row-gap: 25px;
  grid-column-gap: 25px;
  margin-bottom: 42px;
`

interface VideoListProps extends React.HTMLProps<HTMLDivElement> {
  videos: VideoItemProps[]
}

export default (props: VideoListProps) => {
  return (
    <Wrapper>
      {props.videos.map(({ title, image, link }) => (
        <VideoItem key={title} title={title} image={image} link={link} />
      ))}
    </Wrapper>
  )
}
