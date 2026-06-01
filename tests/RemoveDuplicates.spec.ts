import {test, expect } from '@playwright/test';

test('remove duplicates', async ({})=>{
      //remove duplicates from array
      let arr = [1,1,2,2,3,4,5,5,6,6]
console.log("Before remove duplicates in an array ",arr)
let rm :number =removeDuplicate(arr)
console.log(arr.slice(0,rm))


function removeDuplicate( arr:any[])
{
    let rd = 0
for(let i=1; i<arr.length; i++)
{
    if(arr[rd]!=arr[i])
    {
        rd++
        arr[rd]=arr[i]
    }
}
return rd+1;
}

})