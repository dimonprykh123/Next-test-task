import styled from "styled-components";

export const PostsContainer = styled("div")`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  max-width: 100%;
  //background-color: #F1EDF7;
`

export const PostContainer = styled("div")`
  max-width: 340px;
  width: 100%;
  margin: 10px;
  padding: 18px;
  border-radius: 12px;
  box-shadow: 0px 2px 4px 0px rgba(34, 60, 80, 0.2);
  background-color: white;
`
export const ImgPostBoxContainer = styled("div")`
  border-radius: 12px;
  margin-top: 8px;
  max-width: 336px;
  width: 100%;
`

export const TitlePostBox = styled("p")`
  margin-top: 8px;
  font-size: 1.5rem;
  font-weight: bold;
`

export const BodyPostBox = styled("p")`
  height: 115px;
  text-overflow:clip;
  white-space: normal;
  overflow: hidden;
  margin-top: 16px;
  margin-bottom: 5px;
`
