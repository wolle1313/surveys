export interface Survey {
    id: string
    submitDate: Date | string;
    answers: Answer[];
    submitTime: string;
}

export interface Answer {
    id: number;
    answer: string | string[]
}

export interface QuestionFormType {
    id: number;
    question: string;
    answers?: string[];
    type: QuestionTypes
}

export type QuestionTypes =  "singleChoice" | "multipleChoice" | "open"

export enum MenuTypes {
   PODSUMOWANIE_ODPOWIEDZI = "Podsumowanie odpowiedzi",
   POJEDYNCZE_ANKIETY = "Pojedyncze ankiety"
}