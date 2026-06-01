function display()
{
    console.log("welocome to typescript")
}
display()

//named Return type function
function add(num1: number, num2: number): number //retun type is number
{
    return num1+num2;
}
let result: number=add(3,5)
console.log(result)

//named function with Rest parameters
//no restrict inputs, n numbers we wan pass
//... three dots for multiple parameters pass
function addNumbers(...nums: number[]) //nums is variable & number[] array type
{
    let i;
    let sum: number =0;

    for(i=0; i<nums.length; i++){
        sum=sum+nums[i]
    }
    console.log("sum of input numbers is =", sum)
}
addNumbers(1,2)
addNumbers(2,5,9,8)
addNumbers(9,7,8,2,3,5)

