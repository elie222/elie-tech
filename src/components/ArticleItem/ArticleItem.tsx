import * as React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  display: flex;
  border-radius: 5px;
  border: solid 1px #ececec;
  background-color: #f4f7f6;
  font-family: Open Sans;
  color: #000000;
`
const Image = styled.img`
  width: 364px;
  height: 202px;
`
const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 28px 43px 19px;
`
const Title = styled.h3`
  font-size: 24px;
  font-weight: 800;
`
const Description = styled.div`
  font-size: 18px;
  flex: 1;
  padding-top: 8px;
`
const Bottom = styled.div`
  display: flex;
  font-size: 18px;
`
const Likes = styled.div`
  margin-right: 43px;
`
const Tags = styled.div`
  flex: 1;
`
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
      <Main>
        <Title>{props.title}</Title>
        <Description>{props.title}</Description>
        <Bottom>
          <Likes>{props.likes || 0} likes</Likes>
          <Tags>{props.tags.map((tag) => `#${tag.toLowerCase()}`).join(", ")}</Tags>
          <PostedAt>
            {props.date.getMonth() + 1}/{props.date.getFullYear()}
          </PostedAt>
        </Bottom>
      </Main>
    </Wrapper>
  )
}
