
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
            reverse(a, a, k-1)
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


