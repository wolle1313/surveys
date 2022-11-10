import React, {useContext, useId} from 'react'

import { useForm } from "react-hook-form";

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import QuestionNotFound from './QuestionNotFound';
import MultipleAnswers from '../questions/MultipleAnswers';
import Open from '../questions/Open';
import SingleAnswer from '../questions/SingleAnswer';
import { SurveyContext } from './SurveyContext';
import questionForms from '../questionForms';
import { Answer } from 'types';


interface Props {
    setIsSubmitted: (value: string) => void
}

const SurveryForm = ({setIsSubmitted}: Props) => {
    const { setSurveys } = useContext(SurveyContext) 
    const { handleSubmit, control } = useForm();
    const id = useId()
    let timeOfSubmitting = 0
    const timerForSubmitting = () => setTimeout(() => {
        timeOfSubmitting += 1
        timerForSubmitting()
    }, 1000)
    timerForSubmitting()

    const createSubmitLength = () => {
       const hours = Math.floor(timeOfSubmitting / 3600)
       const minutes = Math.floor((timeOfSubmitting % 3600) / 60)
       const seconds = Math.floor((timeOfSubmitting % 3600) % 60)
       return `${hours && hours > 0 ? `${hours}h ` : ''}${minutes && minutes > 0 ? `${minutes}min ` : ''}${seconds && seconds > 0 ? `${seconds}sec` : ''}`
    }

    const onSubmit = (data: any) => {
        if(data) {
            const d = new Date()
            const date = d.toLocaleString('en-GB', { timeZone: 'UTC' })
            const submitTime = createSubmitLength()
            const dataKeys = Object.keys(data);
            const transformedData: Answer[] = []
            dataKeys.forEach(key => transformedData.push(data[key]))
            setSurveys(prevSurveys => [...prevSurveys, {
                id,
                submitDate: date,
                answers: transformedData,
                submitTime: submitTime
            }])
            localStorage.setItem('submitted', 'true');
            setIsSubmitted('true')
        }
        else { throw new Error('could not submit results')}
    };

    return ( 
    <Card style={{ width: 600, margin: '50px auto 0px auto', padding: 40 }}>
    <form onSubmit={handleSubmit(onSubmit)}>
    {questionForms.map((questionForm, index) => {
        const {type} = questionForm
        const questionNumber = index + 1
        if(type === "singleChoice") return <SingleAnswer control={control} key={questionForm.id} index={questionNumber} questionForm={questionForm}/>
        if(type === "multipleChoice") return <MultipleAnswers control={control} key={questionForm.id} index={questionNumber} questionForm={questionForm} />
        if(type === "open") return <Open control={control} key={questionForm.id} index={questionNumber} questionForm={questionForm} />
        return <QuestionNotFound key={questionForm.id} index={questionNumber}/>
    })}
    <Button type='submit' label='Wyślij'/>
    </form>
    </Card> 
    );
}
 
export default SurveryForm;