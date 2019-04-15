import styled from "@emotion/styled"

const Card = styled.a`
  border-radius: 5px;
  border: solid 1px #ececec;
  background-color: #f4f7f6;
  color: #000000;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
  width: 100%;
  box-shadow: rgba(39, 44, 49, 0.06) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;

  :hover {
    transform: translate3D(0, -2px, 0);
    box-shadow: rgba(39, 44, 49, 0.1) 8px 24px 38px, rgba(39, 44, 49, 0.1) 1px 3px 8px;
  }
`

export default Card
