import React from 'react'
import { RadioButton } from 'primereact/radiobutton';

import { QuestionFormType } from '../types';
import { Control, Controller, FieldValues } from 'react-hook-form';

interface Props {
    questionForm: QuestionFormType;
    index: number;
    control: Control<FieldValues, any>
}

const SingleAnswer = ({questionForm, index, control}: Props) => {
    const {question, answers, id} = questionForm

    return (
        <div>
            <h1>Pytanie {index}</h1>
            <div>
                <h2>{question}</h2>
            </div>
            <div>
                {answers?.map(answer => {
                return(
                <div key={answer} className="field-radiobutton">
                <Controller
                control={control}
                defaultValue={{id: id, answer: ''}}
                name={question}
                render={({field: { onChange, value }}) => (
                    <RadioButton inputId={answer} value={answer} onChange={(e) => onChange({id: id, answer: e.value})} checked={value?.answer === answer}/>
                 )} />
                <label htmlFor={answer}>{answer}</label>
                </div>
                )})}
            </div>
        </div>
    );
}
 
export default SingleAnswer;