const FindTheCount = (STRING) => {
   let vowels = ['a','i','e','o','u'];
   let arr = STRING.toLowerCase().split('');

   let count = 0 ;
   for(let Char of arr){
    if(vowels.includes(Char)){
        count++
    }
   }

return count 
}

console.log(FindTheCount('I am rahul and this is the aeiou'));