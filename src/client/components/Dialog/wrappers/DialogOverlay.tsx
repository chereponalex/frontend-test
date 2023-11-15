import React from "react"
import styled from "styled-components"

type DialogOverlayTypes = {
    children: React.ReactChild | React.ReactChild[]
    onClick?: () => void
    className?: string
    id?: string | number
}

export const DialogOverlay = (props: DialogOverlayTypes) => {
    return (
        <StyledDialogOverlay className={props.className} onClick={props.onClick}>
            <DialogOverlayContainer>{props.children}</DialogOverlayContainer>
        </StyledDialogOverlay>
    )
}

const StyledDialogOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 999;
  background: rgba(50, 50, 50, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
`

const DialogOverlayContainer = styled.div`
  max-height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: auto;
  padding: 20px;

  @media screen and (max-width: 480px) and (orientation: landscape) {
    padding: 0;
  }
`
