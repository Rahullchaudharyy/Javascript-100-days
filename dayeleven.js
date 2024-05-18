const AdditionDigits = (Digits) =>{
         
     
    let arr = Digits = Array.from(String(Digits),Number)
     
   return  arr.reduce((acc,curr)=>acc += curr,0)
     
}
console.log(AdditionDigits(123)); 
// AdditionDigits(123)