import React from 'react'

import MultipleAnswers from 'singleAnswers/MultipleAnswers';
import questionForms from 'questionForms';
import { QuestionFormType, Survey } from 'types';

interface Props {
    survey: Survey
}

const SingleSurveyItem = ({survey}: Props) => {
    const {submitTime, submitDate, answers} = survey
    const renderAnswer = (question: QuestionFormType) => {
        const answerItem = answers?.find(answer => answer.id === question.id)
        if(question.type === "singleChoice" || question.type === "open" ) {return answerItem?.answer ? answerItem.answer : "Brak odpowiedzi"}
        if(question.type === "multipleChoice" && question.answers) {return <MultipleAnswers answers={question.answers} userAnswers={answerItem?.answer as string[]}/>}
    }

    return ( 
    <>
    <div className='flex flex-column'>
        {submitDate && (<div><h4 className='my-1'>Wypełniono: {submitDate.toString()}</h4></div>)}
        {submitTime && (<div><h4 className='my-1'>Czas trwania: {submitTime}</h4></div>)}
    </div>
    <div>
        {questionForms.map((questionItem, index) => {return(
            <div>
            <div><h4>Pytanie {index + 1}</h4></div>
            <div><h4>{questionItem.question}</h4></div>
            <div className='my-4'>
            {renderAnswer(questionItem)}
            </div>
            </div>
        )})}
    </div>
    </>
     );
}
 
export default SingleSurveyItem;