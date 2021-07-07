export interface FbResponse{
    name: string
}

export interface resposne{
    [key:string]: string
}

export interface Product{
    id?:string
    type?:string
    title?:string
    description?:string
    image?: string
    price?:string
    date?: Date
}