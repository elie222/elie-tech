import * as React from "react"
import styled from "@emotion/styled"

const MOBILE_BREAK_POINT = 500

const Wrapper = styled.a`
  display: flex;
  @media (min-width: ${MOBILE_BREAK_POINT + 1}px) {
    height: 124px;
  }
  @media (max-width: ${MOBILE_BREAK_POINT}px) {
    flex-direction: column;
  }
  border-radius: 5px;
  border: solid 1px #ececec;
  background-color: #f4f7f6;
  color: #000000;
  /* margin-bottom: 30px; */
  line-height: 1.42857em;
  /* height: 200px; */
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
  width: 100%;

  :hover {
    border: solid 1px #288ade;
  }
`
const Image = styled.img`
  width: 159px;
  height: 124px;
  object-fit: cover;
  @media (max-width: ${MOBILE_BREAK_POINT}px) {
    width: 100%;
    height: 100px;
  }
  /* @media (max-width: 1000px) {
    width: 250px;
  }
  @media (max-width: ${MOBILE_BREAK_POINT}px) {
    width: 150px;
  } */
`
const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 18px 22px;
  justify-content: space-between;

  @media (max-width: ${MOBILE_BREAK_POINT}px) {
    padding: 16px 19px;
  }
`
const Title = styled.h3`
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 12px;
`
// const Description = styled.div`
//   font-size: 14px;
//   flex: 1;
//   padding-top: 8px;
//   max-height: 100px;
//   overflow: hidden;
// `
const Bottom = styled.div`
  display: flex;
  font-size: 16px;
`
const Likes = styled.div`
  margin-right: 43px;
`
const Tags = styled.div`
  flex: 1;
`
const PostedAt = styled.div``

export interface ArticleItemProps extends React.HTMLProps<HTMLDivElement> {
  title: string
  link: string
  image: string
  date: Date
  tags: string[]
  likes?: number
  // removed
  description?: string
}

export default (props: ArticleItemProps) => {
  return (
    <Wrapper href={props.link} target="_blank">
      <Image src={props.image} />
      <Main>
        <Title>{props.title}</Title>
        {/* <Description>
          {props.description.substr(0, 140)}
          {props.description.length >= 140 && "..."}
        </Description> */}
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
