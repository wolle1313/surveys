import React from "react";

import { Survey } from "types";

interface Props {
    questionId: number;
    surveys: Survey[]
}

const NumberOfAnswers = ({questionId, surveys }: Props) => {
    const surveyCount = surveys.length;
    const answeredSurveyCount = surveys.reduce((prevCount, survey) => {
       const questionAnswer = survey.answers.find(answer => answer.id === questionId);
       return !!questionAnswer?.answer.length ? prevCount + 1 : prevCount
    }, 0);
    const unansweredCount = surveyCount - answeredSurveyCount;
    return (
        <div className='flex justify-content-end'>
            <div className='mr-2'><span>oczekiwane: {surveyCount}</span></div>
            <div className='mr-2'><span>odpowiedzi: {answeredSurveyCount}</span></div>
            <div className='mr-2'><span>pominięte: {unansweredCount}</span></div>
        </div>
    )
}

export default NumberOfAnswers