import { Button } from 'primereact/button';
import React, { useContext, useState } from 'react'
import { SurveyContext } from 'SurveyContext';
import SingleSurveyItem from 'SingleSurveyItem';

const SingleSurvey = () => {
    const { surveys } = useContext(SurveyContext)
    const [currentSurvey, setCurrentSurvey] = useState(0)
    const maxLength = surveys.length
    
    return ( 
    <>
    {surveys.length ? (
        <>
            <div className='flex w-full justify-content-center align-items-center mt-3'>
                <Button label='<' onClick={() => setCurrentSurvey(prevValue => prevValue > 0 ? prevValue - 1 : prevValue)} disabled={currentSurvey === 0}/>
                <h2 className='mx-2'>Ankieta {currentSurvey + 1} / {maxLength}</h2>
                <Button label='>' onClick={() => setCurrentSurvey(prevValue => prevValue + 1 < maxLength ? prevValue + 1 : prevValue)} disabled={currentSurvey + 1 === maxLength}/>
            </div>
            <div>
                <SingleSurveyItem survey={surveys[currentSurvey]} />
            </div>
        </>
    ) :
    <h2>There are no surveys posted. How did you get here?</h2>
}
    </> 
    );
}
 
export default SingleSurvey;