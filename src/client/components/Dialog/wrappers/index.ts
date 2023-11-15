import styled from "styled-components";

export const Close = styled.span`
  cursor: pointer;
  position: absolute;
  right: 16px;
  top: 20px;
  z-index: 1000;
  text-decoration: underline;

  @media screen and (max-width: 720px) and (orientation: landscape) {
    left: auto;
    top: 24px;
    right: 24px;
    width: 48px;
    height: 48px;
  }
`

export const StyledDialog = styled.div`
  padding: 24px;
  margin: 0 auto 150px auto;
  background: white;
  border-radius: 8px;
  cursor: default;
  position: relative;
  min-height: 300px;
  min-width: 300px;
  @media screen and (max-width: 480px) and (orientation: landscape) {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    overflow: hidden;
  }
`