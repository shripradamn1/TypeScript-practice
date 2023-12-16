//intersection type in alies

type A={
name:string
}
type B={
age:number
}
type C = A & B;

const obj :C={

name:"shri",
age:21
}

//intersection type in interface

interface A{
name:string
}

interface B{
age:number
}

interface C extends A , B{}
const obj:C={

name:"shri",
age:21}
