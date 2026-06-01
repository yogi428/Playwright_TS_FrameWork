import {test, expect} from "@playwright/test"

test('each char count', async()=> {

    let inputString : string = "jjhelloeeoo";
  
        let charCount : any = {};

        for(let char of inputString)
        {
            charCount[char] = (charCount[char] || 0) + 1;

        }
          console.log(charCount)
})