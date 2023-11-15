import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Table } from '@/client/components/Table/Table';
import styled from 'styled-components';
import { Dialog } from '@/client/components/Dialog/Dialog';
import { FormAddition, FormTypes } from '@/client/components/Form/FormAddition';
import { logout } from '../../../utils/logout';
import { FormAdditionType } from "@/client/components/Form/FormAddition";
import { Button } from "@/client/components/Button/Button";
import { getReviews } from "@/client/network/review/get-reviews";
import { createReview } from "@/client/network/review/create-review";
import { ReviewType } from "@/client/network/types";


const AddButton = styled(Button)`
  margin-top: 40px;
`

const ContainerReviewPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Description = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
`;

const ContainerBtn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
    width: 40%;
`;



const addReviewForm: FormAdditionType = [
    { keyName: 'name', label: 'Email', type: 'text', element: 'input', required: true },
    { keyName: 'text', label: 'Текст отзыва', type: 'text-area', element: 'textarea', required: true },
    { keyName: 'status', label: 'Статус', type: '', element: 'dropdown', required: true },
]

export const ReviewPage = () => {

    const history = useHistory();
    const [reviewsData, setReviewsData] = useState<ReviewType[] | null>(null);
    const [userEmail, setUserEmail] = useState<string>('');

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const getTableData = () => {
        getReviews()
            .then((res) => {
                setReviewsData(res.data.reviewsByUser.reviews)
                setUserEmail(res.data.reviewsByUser.email)
            })
            .catch(e => console.log(e))
    }

    const submitForm = (data: FormTypes) => {
        createReview({ name: data.name, text: data.text, status: data.status })
            .then(() => {
                getTableData()
                setIsOpen(false)
            })
            .catch(e => console.log(e))
    }

    useEffect(() => {
        getTableData()
    }, [])

    const columns = ['Email', 'Текст', 'Добавлено', 'Обновлено', 'Статус'];

    return (
        <div>
            <ContainerReviewPage>
                <Description>
                    <h1>Отзывы</h1>
                    <ContainerBtn>
                        <Button onClick={() => history.push('/main')}>На главную</Button>
                        <Button onClick={() => setIsOpen(!isOpen)}>Добавить отзыв</Button>
                        <Button onClick={logout}>Выйти</Button>
                    </ContainerBtn>
                </Description>
                <Dialog value={isOpen} onChange={setIsOpen}>
                    <FormAddition initialData={{ name: userEmail }} formElements={addReviewForm} submitForm={submitForm}>
                        <AddButton color={'black'} type='submit'>Добавить отзыв</AddButton>
                    </FormAddition>
                </Dialog>
                <Table columns={columns} data={reviewsData} getTableData={getTableData} />
            </ContainerReviewPage>
        </div >
    );
};


export default React.memo(ReviewPage);