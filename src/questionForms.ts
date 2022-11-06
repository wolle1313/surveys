import { QuestionFormType } from "./types";

const questionForms: QuestionFormType[] = [
    {
        id: 1,
        question: 'Jak oceniasz swój background programistyczny',
        answers: ['stricte frontend', 'raczej frontend', 'fullstack', 'raczej backend', 'stricte backend'],
        type: 'singleChoice'
    },
    {
        id: 2,
        question: 'Jak oceniasz swoją znajomość TypeScripta',
        answers: ['znajomość teoretyczna', 'doświadczenie komercyjne', 'narzędzia open-source', 'testowanie'],
        type: 'multipleChoice'
    },
    {
        id: 3,
        question: 'Wg jakich reguł TypeScript pozwala przypisać funkcję do typu funkcyjnego? Jakie warunki muszą być spełnione?',
        type: 'open'
    }
]

export default questionForms;