import {test, expect} from "@playwright/test"
test('Reverse array', async()=>{

let arr = [1,2,3,4,5,6]
let rvs:any=[]
let k=0
let result:any[]=number(arr)

console.log(result) 

function number(arr:any){
    
    for(let i=arr.length; i>=0;i--){
        
            rvs[k++]=arr[i]   
    }
    return rvs;
}
 
})