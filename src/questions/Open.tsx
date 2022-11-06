import React from 'react'
import { QuestionFormType } from '../types';

import { InputTextarea } from 'primereact/inputtextarea';
import { Control, Controller, FieldValues } from 'react-hook-form';

interface Props {
    questionForm: QuestionFormType;
    index: number
    control: Control<FieldValues, any>
}

const Open = ({questionForm, index, control}: Props) => {
    const { question, id } = questionForm
    return (
        <div>
            <h1>Pytanie {index}</h1>
            <div>
                {question}
            </div>
            <Controller
                control={control}
                name={question}
                defaultValue={{id: id, answer: ''}}
                render={({field: { onChange, value }}) => (
                    <InputTextarea  
                    style={{width: '100%'}} 
                    placeholder='odpowiedz tutaj' 
                    rows={6} 
                    value={value?.answer} 
                    onChange={(e) => onChange({id: id, answer: e.target.value})} />
                    )} 
                />
        </div>
    );
}
 
export default Open;