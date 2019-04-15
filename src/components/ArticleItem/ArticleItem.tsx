import * as React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import Card from "../Card/Card"
import { ReactComponent as Favorite } from "../../assets/icons/favorite.svg"

const MOBILE_BREAK_POINT = 500

const Wrapper = styled(Card)`
  display: flex;
  @media (min-width: ${MOBILE_BREAK_POINT + 1}px) {
    height: 124px;
  }
  @media (max-width: ${MOBILE_BREAK_POINT}px) {
    flex-direction: column;
  }
`
const ImageWrapper = styled.div`
  width: 159px;
  height: 124px;
  /* object-fit: cover; */
  @media (max-width: ${MOBILE_BREAK_POINT}px) {
    width: 100%;
    height: 100px;
  }
`
const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* padding: 18px 22px; */
  padding: 12px 18px;
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
const Bottom = styled.div`
  display: flex;
  font-size: 16px;
  /* justify-content: space-between; */
`
const Likes = styled.div`
  display: flex;
  align-items: center;
`
const Tags = styled.div`
  flex: 1;
  margin: 0 10px;
  overflow: hidden;
`
const PostedAt = styled.div`
  white-space: nowrap;
  display: flex;
  align-items: center;
`

export interface ArticleItemProps extends React.HTMLProps<HTMLDivElement> {
  title: string
  link: string
  image: any
  date: string
  tags: string[]
  likes?: number
}

export default (props: ArticleItemProps) => {
  return (
    <Wrapper href={props.link} target="_blank">
      {/* <Image src={props.image} /> */}
      <ImageWrapper>
        <Img fluid={props.image} style={{ height: "100%" }} />
      </ImageWrapper>
      <Main>
        <Title>{props.title}</Title>
        <Bottom>
          <Likes>
            {props.likes || 0}
            <Favorite />
          </Likes>
          <Tags>{props.tags.map((tag) => `#${tag.toLowerCase()}`).join(", ")}</Tags>
          <PostedAt>{props.date}</PostedAt>
        </Bottom>
      </Main>
    </Wrapper>
  )
}
