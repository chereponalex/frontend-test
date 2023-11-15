import React, { useEffect } from "react"
import { DialogOverlay } from "@/client/components/Dialog/wrappers/DialogOverlay";
import { StyledDialog, Close } from "@/client/components/Dialog/wrappers";

type DialogProps = {
    value: boolean
    onChange?: (val: boolean) => any | React.Dispatch<React.SetStateAction<boolean>>
    className?: string
    notClosable?: boolean
    id?: string | number
    fullscreenOnMobile?: boolean
}

export const Dialog: React.FC<DialogProps> = ({ children, fullscreenOnMobile, onChange, notClosable, value, id }) => {
    const close = () => {
        onChange && onChange(false)
    }

    const documentKeypressHandler = (e: KeyboardEvent) => {
        if (e.keyCode === 27 && !notClosable) {
            close()
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", documentKeypressHandler)
        return () => document.removeEventListener("keydown", documentKeypressHandler)
    }, [])

    return (
        <>
            {value && (
                <DialogOverlay id={id} onClick={close}>
                    <StyledDialog
                        onClick={e => e.stopPropagation()}
                        data-fullscreen-on-modile={fullscreenOnMobile}
                    >
                        {!notClosable ? <Close onClick={close}>Закрыть</Close> : null}
                        {children}
                    </StyledDialog>
                </DialogOverlay>
            )}
        </>
    )
}
