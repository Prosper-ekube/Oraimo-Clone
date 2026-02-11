// import type { ReactNode } from 'react'

export interface Product {
    id: string
    name: string
    category: string
    price: number
    specs: {
        label: string
        iconKey: string
    }[]
    status: string
    image: string
}

export interface ProductFormData {
    name: string
    category: string
    price: string
    spec1: string
    spec2: string
    spec1Icon?: string
    spec2Icon?: string
    image: File | null
}