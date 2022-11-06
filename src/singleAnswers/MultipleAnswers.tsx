import React from 'react'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface Props {
    answers: string[];
    userAnswers: string[]
}

const columns = [
    {
        field: 'option',
        header: 'Opcja'
    },
    {
        field: 'userAnswer',
        header: 'Odpowiedź'
    }
]

const MultipleAnswers = ({answers, userAnswers}: Props) => {
    console.log(answers, userAnswers)
    const prepareRows = () => {
    const tableData = answers.map(answer => {
       const isSelected = userAnswers.includes(answer)
       //custom table titles
       return ({
        option: answer,
        userAnswer: isSelected ? "TAK" : "NIE"
       })
    })
    return tableData
}
    return ( 
    <div>
        <DataTable value={prepareRows()}>
        {columns.map(column => {
            return <Column key={column.field} field={column.field} header={column.header} />
        })}
        </DataTable>
    </div> 
    );
}

export default MultipleAnswers;