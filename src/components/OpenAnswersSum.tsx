import React from "react";

import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

import { QuestionFormType, Survey } from "types";

interface Props {
    surveys: Survey[];
    questionItem: QuestionFormType;
}

const OpenAnswersSum = ({surveys, questionItem }: Props) => {
   const filteredSurveys = surveys.filter(survey => {
        const userAnswer = survey.answers.find(answer => answer.id === questionItem.id)
        return !!userAnswer?.answer.length
   })
   
    return ( <>
    <div className="mt-3">
        {filteredSurveys.map(survey => {
            const userAnswer = survey.answers.find(answer => answer.id === questionItem.id)

            return(
            <div className="flex justify-content-between border-1 p-2">
                <div>{userAnswer?.answer}</div>
                <div>{(survey.submitDate).toString()}</div>
            </div>
            )
            })}
    </div>
    </> );
}
 
export default OpenAnswersSum;