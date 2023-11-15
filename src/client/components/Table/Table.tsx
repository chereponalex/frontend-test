import React, { useState } from 'react';
import { formatDate } from '../../../utils/formatDate';
import { Dialog } from '@/client/components/Dialog/Dialog';
import {FormAddition, FormAdditionType, FormTypes} from "@/client/components/Form/FormAddition";
import { updateReview } from "@/client/network/review/update-review";
import { deleteReview } from "@/client/network/review/delete-review";
import { ReviewType } from "@/client/network/types";
import styled from "styled-components";
import { Button } from "@/client/components/Button/Button";

interface TableProps<T> {
    getTableData: () => void
    columns: string[]
    data: T[] | null
}

const tableStyle = {
    width: '80%',
    background: '#a0a0a0',
    border: 'none',
    borderRadius: '5px',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 10px 10px 25px 2px',
    margin: '10px'
};
const headerStyle = {
    // width: '80%'
};
const cellStyle = {
    width: '10%'
};
const rowStyle = {
    cursor: 'pointer',
    height: '50px',
};

const changeReviewForm: FormAdditionType = [
    { keyName: 'name', label: 'Email', type: 'text', element: 'input', required: true},
    { keyName: 'text', label: 'Текст отзыва', type: 'text-area', element: 'textarea', required: true},
    { keyName: 'status', label: 'Статус', type: '', element: 'dropdown', required: true},
]

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

const AddButton = styled(Button)`
  margin-top: 40px;
`

export const Table: React.FC<TableProps<ReviewType>> = ({ columns, data, getTableData }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [activeRow, setActiveRow] = useState<number>(0);

    const openModal = (review: number) => {
        setIsOpen(!isOpen);
        setActiveRow(review);
    }

    const onDeleteClick = () => {
        if (data) {
            const id = data[activeRow].id
            deleteReview(id)
                .then(response => {
                    getTableData()
                    setIsOpen(false)
                }).catch(error => console.log(error));
        }
    }

    const submitForm = (reviewData: FormTypes) => {
        if (data) {
            const id = data[activeRow].id
            updateReview({ name: reviewData.name, text: reviewData.text, status: reviewData.status }, id)
                .then(response => {
                    getTableData()
                    setIsOpen(false)
                }).catch(error => console.log(error));
        }
    }


    return (
        <>
            <table style={tableStyle}>
                <thead style={headerStyle}>
                    <tr>
                        {columns.map((column, index) => (
                            <th style={cellStyle} key={index}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((row, rowIndex) => {

                        return (
                            <tr key={row.id} style={rowStyle} onClick={() => openModal(rowIndex)}>
                                <td>{row.name}</td>
                                <td>{row.text}</td>
                                <td>{formatDate(row.createdAt)}</td>
                                <td>{formatDate(row.updatedAt)}</td>
                                <td>{row.status}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table >
            <Dialog value={isOpen} onChange={setIsOpen}>
                <FormAddition initialData={data ? data[activeRow] : null} formElements={changeReviewForm} submitForm={submitForm}>
                    <ButtonsContainer>
                        <AddButton onClick={onDeleteClick}>Удалить</AddButton>
                        <AddButton color={'black'} type='submit'>Редактировать</AddButton>
                    </ButtonsContainer>
                </FormAddition>
            </Dialog>
        </>
    );
};
