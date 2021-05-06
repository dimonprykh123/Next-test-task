import styled from "styled-components";


export const FormContainer = styled("div")`
  display: flex;
  flex-direction: column;
  //align-items: center;
  justify-content: center;
`

export const Input = styled("input")`
  min-height: 50px;
  border-radius: 12px;
  padding: 5px;
  margin: 10px;

  &:focus {
    outline: none;
  }
`

export const TextArea = styled("textarea")`
  resize: none;
  min-height: 300px;
  border-radius: 2px;
  padding: 5px;
  margin: 10px;
`

export const ErrorMessageStyled = styled("div")`
  color: tomato;
`