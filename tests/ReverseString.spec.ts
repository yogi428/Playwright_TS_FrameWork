import {test, expect} from "@playwright/test";

test('map', async()=>{
    const numbers: number[]=[1,2,3,4];
    //multiply each number by 2
    //When you call map, it takes a callback function as an argument. 
    // It runs this function once for every item in your array, 
    // takes the returned value, and pushes it into a new array.
    const doubled:number[]=numbers.map(num=>num*2);
    console.log(doubled); // [2,4,6,8]

})

test('revesrse string', async()=>{

    const sentence: string ="Hello world";
    //const words=sentence.split(" ")
    //.map()
    const result= sentence.split(" ").map(word=>word.split("").reverse().join("")).join(" ");
    console.log(result)
    //const result= words.map((word)=>word.split("").reverse().join(""))
    //console.log(result.join(" "));
})
 
test('reverse array', async()=>{
    const fruits: string[] = ["apple", "banana", "cherry"];
    const reversedFruits: string[] = fruits.map(s => s.split("").reverse().join(""));
    console.log(reversedFruits); // ["elppa", "ananab", "yrrehc"]

})

test('String to array', async()=>{
    const str: string ="Hello";
    const reversed=[...str].reverse().join("");  //using spread operator to convert string to array and then reverse and join
    console.log(reversed); 
})

test('arrow function', async()=>{
    const add=(a:number, b:number):number=> a+b;
    console.log(add(8,3)); //8

    const multiply = (x:number, y:number):number => x * y;
    const result =multiply(4,5)
    console.log(multiply(6,2)); //20
    console.log(result); //20
})

test('rev without function', async()=>{

    const str: string = "Welcome to Playwright";
    let words=str.split(" ")
    let revstr=""

    //for each loop- to get each word from split array
    for(let w of words)  //each word storing in to w
    {
        let revword="";

        for(let i=w.length-1; i>=0; i--)  //Welcome 1st word reverse
            {
                revword = revword + w.charAt(i)
            }  
            revstr = revstr + revword + " "   //to append space use " "
    }  
    console.log("reverse string is=",revstr)
})
    
test('rev array', async()=>{

   let arr = [1,2,3,4]
   let revArr: any =[]
   let k=0;

    for(let i=arr.length-1; i>=0 ; i--)
        {
            revArr[k++]=arr[i]
        }
    console.log(revArr)

})

test('2nd biggest number', async()=>{

    let a = [2,5,18,8,9,6,20]
    let max1=0, max2=0
    
    if(a[0]>a[1])
    {
        max1=a[0]
    }
    else
    {
        max1=a[1]
        max2=a[0]     
    }
    for(let i=2; i<=a.length-1; i++)
    {
        if(a[i]>max1)
        {
            max2=max1
            max1=a[i]
        }
        else if(a[i]>max2)
        {
            max2=a[i]
        }
    }
console.log("Highest number is", max1)
console.log("second highest number is", max2)

})