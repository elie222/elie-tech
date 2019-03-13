import * as React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div``
const Image = styled.img``
const Title = styled.h3``
const Description = styled.div``
const Likes = styled.div``
const Tags = styled.div``
const PostedAt = styled.div``

interface ArticleItemProps extends React.HTMLProps<HTMLDivElement> {
  title: string
  description: string
  image: string
  date: Date
  tags: string[]
  likes?: number
}

export default (props: ArticleItemProps) => {
  return (
    <Wrapper>
      <Image />
      <div>
        <Title>{props.title}</Title>
        <Description>{props.title}</Description>
        <div>
          <Likes>{props.likes}</Likes>
          <Tags>{props.tags}</Tags>
          <PostedAt>
            {props.date.getMonth() + 1}/{props.date.getFullYear()}
          </PostedAt>
        </div>
      </div>
    </Wrapper>
  )
}
