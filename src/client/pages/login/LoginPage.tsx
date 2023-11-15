import React from 'react';
import { useHistory } from "react-router-dom";
import {
    LoginPageContainer,
    FormContainer
} from '../login/LoginPage.style';
import { sessionToken } from "../../../utils/cookie";
import { FormAddition, FormAdditionType } from "@/client/components/Form/FormAddition";
import styled from "styled-components";
import { Button } from "@/client/components/Button/Button";
import { FormTypes } from "@/client/components/Form/FormAddition";
import { loginUser } from "@/client/network/auth/login-user";


const AddButton = styled(Button)`
  margin-top: 40px;
`

const loginForm: FormAdditionType = [
    { keyName: 'email', label: 'Email', type: 'email', element: 'input', required: true},
    { keyName: 'password', label: 'Пароль', type: 'password', element: 'input', required: true},
]

const LoginPage = () => {

    const history = useHistory();
    const submitForm = (dataCredentials: FormTypes) => {
        loginUser({ email: dataCredentials.email, password: dataCredentials.password })
            .then(response => {
                if (response.status === 200) {
                    sessionToken.set(response.data.access_token)
                    history.push("/main")
                }
            }).catch(error => console.log(error));
    }

    return (
        <LoginPageContainer>
            <FormContainer>
                <FormAddition formElements={loginForm} submitForm={submitForm}>
                    <AddButton color={'black'} type='submit'>Войти</AddButton>
                </FormAddition>
            </FormContainer>
        </LoginPageContainer>
    )
}

export default React.memo(LoginPage);