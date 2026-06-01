import {test, expect} from "@playwright/test"
test('Find even nrs in an array', async()=>{

let arr = [1,1,1,2,3,3,4,5,6,6,6]
let evn:any=[]
let k=0
let result:any[]=en(arr)

console.log(result) 

function en(arr:any){
    let temp :any[]
    for(let i=0; i<arr.length;i++){
        if((arr[i]%2)==0){
            evn[k++]=arr[i]
        }
    }
   return evn;
}
})