import * as React from "react"
import styled from "styled-components"
import { ButtonWrapper } from "@/client/components/Button/wrappers";
import { MouseEvent } from "react"

export const Button = styled((props) => {

    const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
        props.onClick && props.onClick(e)
    }

    return (
        <ButtonWrapper onClick={handleOnClick} { ...props}>
            {props.children}
        </ButtonWrapper>
    )
})``
