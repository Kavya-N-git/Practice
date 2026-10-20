//factorial - product of all +ve integers from 1 to that number
//using for loop 
//while loop 
//do-while loop
//arrow function
//let n=prompt("enter n");
let fact=1,n=4;
console.log(n);
function factorial(n){
    for (let i=1;i<=n;i++){
        //fact=fact*i;
        fact *= i;
    }
    return fact;
}
console.log("Factorial using for loop of "+ n +" is",factorial(n));
//---------------------------------------------------------------------
// using recurssion
//The main concept to remember is: recursion doesn't require you to store every intermediate result manually. The call stack remembers unfinished calls, and return passes each result back to the function that was waiting for it.
let recurrsion_num=5;
function recurrsion_factorial(num){
    if( num===0 || num===1){
        return 1;// this is the base case , which stops the recurrsive call of function
    }
    return(num*recurrsion_factorial(num-1)); // main logic
}
console.log("Factorial of number using recurssion is",recurrsion_factorial(recurrsion_num));
//---------------------------------------------------------------------
//uisng arrow function
//a_factorial - function name
// ?:- ternary operator => condition?statement1(if):statement2(else)
const a_factorial = (a_num) =>{
    return a_num <= 1 ? 1 : a_num*a_factorial(a_num-1);
}
console.log("Factorial of number using arrow function is ", a_factorial(3));

//using map
const arr1 = [1,2,3,4];
console.log(arr1.map((arr1)=>{return 2*arr1}));

//arr_num - parameter - each elemt from the array 
const result = arr1.map((arr_num)=>{
    let fact=1,j;
    for(j=1;j<=arr_num;j++){
        fact *= j
    }
    return fact;
})
console.log(result)