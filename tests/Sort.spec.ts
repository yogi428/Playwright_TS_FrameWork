import{test, expec} from "@playwright/test"
test('sort array', async()=>{

let a = [5,2,6,1,3]
console.log("Before sorting array", a)
let b=sort(a)
console.log("After sorting array",b)

function sort(a:any){
    
    for(let i=0; i<=a.length-1; i++){
        
        for(let j=0; j<=a.length-1; j++){
                if(a[j]>a[j+1]){
                    let temp   = a[j]
                        a[j]   = a[j+1]
                        a[j+1] = temp
                }
        }
    }
        return a;
}

})