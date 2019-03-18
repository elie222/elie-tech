import * as React from "react"
import styled from "@emotion/styled"
import SubHeading from "../SubHeading/SubHeading"
import Button from "../Button/Button"
import closeIcon from "./close.svg"

const Wrapper = styled.div`
  background-image: linear-gradient(90deg, #4286f4, #373b44);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  /* padding: 31px 16% 24px; */
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`

const WrapperInner = styled.div`
  width: 60%;
`

const Text = styled.div`
  margin-bottom: 30px;
`

const CloseIcon = styled.img`
  top: 10%;
  position: absolute;
  right: 10%;
  cursor: pointer;
`

interface DescriptionProps extends React.HTMLProps<HTMLDivElement> {
  title: string
  description: string
  close: () => void
  link?: string
}

export default (props: DescriptionProps) => {
  return (
    <Wrapper>
      <CloseIcon src={closeIcon} alt="x" onClick={props.close} />
      <WrapperInner>
        <SubHeading color="#ffffff">{props.title}</SubHeading>
        <Text>{props.description}</Text>
        {props.link && (
          <Button transparentHover onClick={() => window.open(props.link, "_blank")}>
            VIEW
          </Button>
        )}
      </WrapperInner>
    </Wrapper>
  )
}