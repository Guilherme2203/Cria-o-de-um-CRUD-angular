export interface Product {
    code: number;
    name: string;
    dropdown: string;
    value: string;
    text: string;
}

export interface ResponseProduct {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
    data: Product[];
}

//Modelo de criação
export interface Register {
    code: number; 
    name: string;
    dropdown: string;
    value: string;
    text: string;
}

export interface ResponseRegister {
    code: number;
    name: string;
    dropdown: string;
    value: string;
    text: string;
    id: string;
    createdAt: Date;
}
