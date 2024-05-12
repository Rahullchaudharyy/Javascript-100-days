let CharCount= (Word,Character) => {

Word.toLowerCase();
Character.toLowerCase();

Word = Word.split("");
 count = Word.reduce((acccumulator,element)=>{
    if(element == Character){
        acccumulator++;
    }
    return acccumulator
},0)
return count


  
}
console.log(CharCount("Hospitalllll","l")); 
