//generics helps to adaptive to different data type with a same function

// function A<T>(num:T,):T{
//   return num;

// }

// console.log(A(5));
// console.log(A("shriparda"))

function pair<T, U,W>(first: T, second: U,third:W): [T, U,W] {    //when we have different type of parameters 
    return [first, second,third];
}

const result = pair("shri", 5,false);
console.log(result)
// result is inferred as [number, string]
