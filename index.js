 // Max character
 // Return the character that appears most frequently in a string.
 //ex. maxCharacter('javascript') == 'a' 
 //One way to do this is by using an object as a map.

 function maxCharacter(str) {
   const charMap = {};
   let maxNum = 0;
   let maxChar = '';

   str.split('').forEach(function(char) {
     if(charMap[char]) {
       charMap[char]++;
     } else {
       charMap[char] = 1;
     }
   });

   for(let char in charMap) {
     if (charMap[char] > maxNum) {
       maxNum = charMap[char];
       maxChar = char;
     }
   }
   return maxChar;
 }


 const output = maxCharacter('javascript');

 console.log(output);

 // So first you set an empty object literal which is the const charMap = {}; 
 // then you need to loop through the string as an array.
 // you do this by taking the string and split it so that it turns into an array. 
 //The quotes that pass through the array do not use a space because it's checking every character, not word.
 // you want to look at each key value pair in the array. so it will go j=1: a=2: v=1 etc
 // You use a for-each loop to achieve this.
 // 
 // After that you need to return whichever one is the highest. 
 // to do that you use a for-in loop. for in loops allow you to run through an object rather than array.