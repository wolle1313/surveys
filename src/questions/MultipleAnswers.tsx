import React from 'react'

import { QuestionFormType } from 'types';

import { Checkbox } from 'primereact/checkbox';
import { Control, Controller, FieldValues } from 'react-hook-form';

interface Props {
    questionForm: QuestionFormType;
    index: number
    control: Control<FieldValues, any>
}
interface AnswerType {
    id: number | string;
    answer: string[]
}

const MultipleAnswers = ({questionForm, index, control}: Props) => {
    const {answers, question, id} = questionForm;
const changeAnswer = (e: { value: string, checked: boolean }, onChange: (answer: AnswerType) => void, value: AnswerType) => {
    const answer = value?.answer ? [...value.answer] : []
    if(e.checked) answer.push(e.value)
    else answer.splice(answer.indexOf(e.value), 1)
    onChange({id, answer})
}
    return (
        <div>
            <h1>Pytanie {index}</h1>
            <div>
                <h2>{question}</h2>
            </div>
            <div>
                {answers?.map(answer => {
                    return(
                        <div className='col-12' key={answer}>
                            <Controller
                                name={question}
                                control={control}
                                defaultValue={{id: id, answer: []}}
                                render={({field: { onChange, value }}) => (
                            <Checkbox inputId={answer} value={answer} onChange={(e) =>changeAnswer(e, onChange, value)} checked={value?.answer?.includes(answer)} />
                                )} 
                                />
                            <label className='ml-2' htmlFor={answer}>{answer}</label>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
 
export default MultipleAnswers;