import React, { useState } from "react";
import styled from "styled-components";
import { DropDown } from "../Dropdown/Dropdown";
import { DropdownStatus } from "@/client/network/types";

const InputStyled = styled.input<{ error?: boolean }>`
    width: 300px;
    height: 30px;
    border-radius: 5px;
    font-family: 'Jura', sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 20px;
    border: ${({ error }) =>
        `1px solid ${error ? "#FF6B00" : "#C6C6C6"}`};
    &:focus {
       border: 1px solid #C6C6C6;
    }
`

const TextArea = styled.textarea<{ error?: boolean }>`
    border-radius: 8px;  
    border: ${({ error }) =>
        `1px solid ${error ? "#FF6B00" : "#C6C6C6"}`}; 
    width: 100%; 
    resize: none;
    padding: 10px;
    min-height: 150px;
    &:focus{
        outline: none;
    }
`;

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Label = styled.div<{ error?: boolean }>`
  display: flex;
  align-items: flex-start;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 2px;
  color: ${({ error }) => error ? "#FF6B00" : "#656565"};  
`

const statusOptions: DropdownStatus[] = [
    DropdownStatus.DRAFT,
    DropdownStatus.PUBLISHED
]

type ErrorTypes = {
    [key: string]: boolean
}

export type FormTypes = {
    [key: string]: string  | DropdownStatus
}

export type FormAdditionType = {
    label: string
    element: 'dropdown' | 'input' | 'textarea'
    keyName: string
    required?: boolean
    type?: string
}[]

type FormAdditionPropsType = {
    children: React.ReactChild | React.ReactChild[]
    formElements: FormAdditionType
    submitForm: (v: FormTypes) => void
    initialData?: FormTypes | null
}


export const FormAddition = (props: FormAdditionPropsType) => {
    const initData = props.initialData ? { ...props.initialData } : {}
    const [formValues, setValues] = useState<FormTypes>(initData);
    const [formErrors, setErrors] = useState<ErrorTypes>({});

    const onInputChange = (key: string, value: string) => {
        setValues({ ...formValues, [key]: value })
    }

    const onDropdownChange = (key: string, val: DropdownStatus) => {
        setValues({ ...formValues, [key]: val })
    }

    const submitForm = (e: any) => {
        e.preventDefault()

        let hasErrors = false
        let errors: ErrorTypes = {}
        props.formElements.forEach((el, i) => {
            if (el.required && !formValues[el.keyName]) {
                hasErrors = true
                errors[el.keyName] = true
            }
        })

        if (!hasErrors) {
            props.submitForm(formValues)
        } else {
            setErrors({ ...errors })
        }
    }

    return (
        <form onSubmit={submitForm}>
            <FormWrapper>
                {
                    props.formElements.map((el, i) => {
                        switch (el.element) {
                            case 'dropdown':
                                return (
                                    <React.Fragment key={i}>
                                        <Label>{el.label}</Label>
                                        <DropDown
                                            value={formValues[el.keyName] as DropdownStatus}
                                            placeholder={'Выберите статус'}
                                            options={statusOptions}
                                            error={formErrors[el.keyName]}
                                            onChange={(v: DropdownStatus) => onDropdownChange(el.keyName, v)}
                                        />
                                    </React.Fragment>
                                )
                            case 'input':
                                return (
                                    <React.Fragment key={i}>
                                        <Label>{el.label}</Label>
                                        <InputStyled
                                            value={formValues[el.keyName] as string}
                                            type={el?.type || 'text'}
                                            error={formErrors[el.keyName]}
                                            onChange={e => onInputChange(el.keyName, e.target.value)}
                                        />
                                    </React.Fragment>
                                )
                            case 'textarea':
                                return (
                                    <React.Fragment key={i}>
                                        <Label>{el.label}</Label>
                                        <TextArea
                                            value={formValues[el.keyName] as string}
                                            maxLength={50}
                                            error={formErrors[el.keyName]}
                                            onChange={e => onInputChange(el.keyName, e.target.value)}
                                        />
                                    </React.Fragment>
                                )
                            default:
                                return null
                        }
                    })
                }
                {props.children}
            </FormWrapper>
        </form>
    )
}
