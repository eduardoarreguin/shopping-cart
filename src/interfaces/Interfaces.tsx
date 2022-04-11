interface Course{
    id: number,
    image: string,
    name: string,
    profesor: string,
    price: number,
    reducedPrice: number,
    addCart: (e:any, course:Course) => void,
    cart: Course[]
}

export type {
    Course
}