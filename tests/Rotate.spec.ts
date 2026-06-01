import{test, expect} from "@playwright/test"
test('rotate array one time', async()=>{

      let a:any =[1,2,3,4,5]
      
      rotate(a)
      
      function rotate(a: any){
            let temp=a[0]
      for(let i=1; i<a.length;i++){
            a[i-1] = a[i]
            }
            a[a.length-1] = temp
            
            console.log(a)
      }
     })
     test('rotate array', async()=>{

      let a:any =[1,2,3,4,5]
      
      console.log("Before rotation",a)
      rotate(a,3)
      
      function rotateONE(a: any){
            let temp=a[0]
      for(let i=1; i<a.length;i++){
            a[i-1] = a[i]
            }
            a[a.length-1] = temp
            
            console.log("after rotation",a)
      }
 
   function rotate(a:[], k:number)
   {
      for(let i=1; i<=k; i++)
            rotateONE(a)
   }
  })   
test('rt',async()=>{

let a=[1,2,3,4,5]
console.log("Array Before rotate", a)
rotate(a,6)
console.log("Array Before rotate", a)

function rotate(a:any[], k:number)
{
      k=k%a.length
      if(k<0){
            k=k+a.length
      }
            reverse(a, 0, k-1)
            reverse(a, k, a.length-1)
            reverse(a, 0, a.length-1)
}
function reverse(a:[], start:number, end: number){
      while(start<end){
            let temp =a[start]
            a[start]=a[end]
            a[end] = temp
            start++
            end--
      }
}





})