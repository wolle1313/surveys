import React, {ReactNode, createContext, useState} from 'react'
import { Survey } from './types'

interface Context {
    surveys: Survey[],
    setSurveys: React.Dispatch<React.SetStateAction<Survey[]>>
}
export const SurveyContext = createContext<Context>({surveys: [], setSurveys: () => {}})

interface Props {
    children: ReactNode | ReactNode[]
}

const SurveyContextProvider = ({children}: Props) => {
    const [surveys, setSurveys] = useState<Survey[]>([])

    return (
        <SurveyContext.Provider value={{surveys, setSurveys}}>
        {children}
        </SurveyContext.Provider>
    )
}

export default SurveyContextProvider