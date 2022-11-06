import React from 'react'

import { Card } from 'primereact/card'
import { Message } from 'primereact/message';

interface Props {
    index: number
}

const QuestionNotFound = ({index}: Props) => {
    return (
    <Card>
        <div>
            <h1>Pytanie {index}</h1>
            <Message severity='info'>Nie znaleziono pytania</Message>
        </div>
    </Card> 
    );
}
 
export default QuestionNotFound;