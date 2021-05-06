import styled, {createGlobalStyle} from "styled-components";

export const Header = styled("header")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: #FFFFFF;
  box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.1), 0px 0.4px 6.5px rgba(0, 0, 0, 0.05);
  height: 60px;
  width: 100%;
  padding: 10px 30px;
  z-index: 100;
`
export const Footer = styled("footer")`
`
export const MainWrapper = styled("div")`
  width: 100%;
  min-height: 100vh;
  background-color: #fbfafd;
`
export const MainContainer = styled("div")`
  max-width: 1140px;
  margin: auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 60px);
  //background-color: #F1EDF7;
`

export const Logo = styled("h1")`
  font-weight: bold;
  color: tomato;
`

export const LinkContainer = styled("a")`
  text-decoration: none;
  margin: 10px;

  &:hover {
    cursor: pointer;
  }
`

export const Btn = styled("button")`
  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #fbfafd;
    transition: 0.5s;
  }

  font-size: 1.5rem;
  border-radius: 2px;
  margin: 10px;
  border: none;
  padding: 5px 10px;
  background-color: #F1EDF7;
  color: tomato;
  max-width: 200px;
`

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:ital@1&display=swap');
  * {
    font-family: 'Zilla Slab', serif;
  }
`