// Finding the fctorial
const Fectorial = (Num)=>{
   let factorial = 1;

   for(let i = 1 ; i <= Num ; i++ ){
         
         factorial = factorial *i
   }
 return factorial
}

console.log(Fectorial(4));
