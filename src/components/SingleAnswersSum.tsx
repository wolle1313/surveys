import React from "react";

import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

import { QuestionFormType, Survey } from "types";

interface Props {
    surveys: Survey[];
    questionItem: QuestionFormType;
}

const columns = [
    {
        field: 'option',
        header: 'Wybór'
    },
    {
        field: 'part',
        header: 'Udział'
    },
    {
        field: 'sum',
        header: 'Suma'
    }
]

const SingleAnswersSum = ({surveys, questionItem }: Props) => {
console.log(surveys)
     const renderTableData = () => {
      const questionUsersAnswers = surveys.map(survey => {
       const matchingAnswer = survey.answers.find(answer => answer.id === questionItem.id)
       return matchingAnswer?.answer
        })
        const tableData = questionItem.answers?.map(answer => {
            let answerApperanceCount = 0

            questionUsersAnswers.forEach(userAnswers => {
                if(typeof userAnswers === 'string') {
                    const isAnswerThere = userAnswers === answer
                    if(isAnswerThere) answerApperanceCount++
                }
            })
            const answerPercent = (100 * (answerApperanceCount / surveys.length)).toFixed()
            return ({
                option: answer,
                part: `${answerPercent}%`,
                sum: answerApperanceCount
            })
        })
    
        return tableData
     }

    return ( <>
    <div>
        <DataTable value={renderTableData()}>
            {columns.map(column => {return <Column key={column.field} header={column.header} field={column.field} />})}
        </DataTable>
    </div>
    </> );
}
 
export default SingleAnswersSum;