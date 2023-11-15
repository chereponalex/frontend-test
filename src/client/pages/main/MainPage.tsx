import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { logout } from '../../../utils/logout';
import { Button } from "@/client/components/Button/Button";

const MainPageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: start;
    -webkit-box-align: center;
    align-items: center;
`;

const BtnContainer = styled.div`
    width: 20%;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
`;

export const MainPage = () => {

  const history = useHistory();

  return (
    <MainPageContainer>
      <h1>Главная страница</h1>
      <BtnContainer>
        <Button onClick={() => history.push('/reviews')}>Отзывы</Button>
        <Button onClick={() => logout()}>Выйти</Button>
      </BtnContainer>

    </MainPageContainer >
  )
}

export default React.memo(MainPage);