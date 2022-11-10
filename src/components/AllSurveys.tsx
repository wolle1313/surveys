import React, { useContext } from 'react'

import questionForms from 'questionForms';
import { QuestionFormType } from 'types';

import { SurveyContext } from 'components/SurveyContext';

import NumberOfAnswers from './NumberOfAnswers';
import MultipleAnswersSum from './MultipleAnswersSum';
import SingleAnswersSum from './SingleAnswersSum';
import OpenAnswersSum from './OpenAnswersSum';

const AllSurveys = () => {
    const { surveys } = useContext(SurveyContext)
    const renderAnswerSum = (questionItem: QuestionFormType) => {
        const { type } = questionItem
        if(type === "multipleChoice") {return <MultipleAnswersSum surveys={surveys} questionItem={questionItem} />}
        if(type === "singleChoice") {return <SingleAnswersSum surveys={surveys} questionItem={questionItem} />}
        if(type === "open") {return <OpenAnswersSum surveys={surveys} questionItem={questionItem} />}
    }

    return ( 
    <div>
        {
            questionForms.map((questionItem, index) => (
                <div className='mb-4' key={questionItem.id}>
                    <div><h2 className='my-1'>Pytanie {index + 1}</h2></div>
                    <div><h2 className='my-1'>{questionItem.question}</h2></div>
                    <div>
                    {<NumberOfAnswers surveys={surveys} questionId={questionItem.id}/>}
                    {renderAnswerSum(questionItem)}
                    </div>
                </div>
            ))
        }
    </div>
     );
}
 
export default AllSurveys;