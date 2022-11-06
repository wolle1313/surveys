import React, { useState } from 'react';

import ResultsWrapper from './ResultsWrapper';
import SurveryForm from './SurveyForm';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(localStorage.getItem('submitted') || '')

const removeSubmit = () => {
  localStorage.removeItem('submitted')
  setIsSubmitted('')
}

  return (
    <div>
      <button onClick={removeSubmit}>Usuń</button>
    {isSubmitted ? <ResultsWrapper/> :
     <SurveryForm  setIsSubmitted={setIsSubmitted}/>
     } 
    </div>
  );
}

export default App;
