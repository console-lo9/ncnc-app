export interface QnaType {
    qaTypes: QaType[];
}

export interface QaType {
    id: number;
    key: string;
    name: string;
}

export interface Qas {
    qas: Qa[];
}

export interface Qa {
    id: number;
    question: string;
    answer: string;
}
