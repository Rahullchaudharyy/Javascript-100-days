// Finding the longest string in the arrays 

let findLongestStringWord = (string)=>{
    // Trim() method is use to remove the whitespace from the string  at athe begaining and at the end.
  if(string.trim().length === 0){
    return false; 
  }
//  Split() is use to break the string on the basis of some things like in the parenthesis if i will write .split(" ") then 
// The string will saprate where I have the gap means " " = Gap 
  StrinSgArr = string.split(" ");
  StrinSgArr = StrinSgArr.sort((a,b)=> b.length - a.length)
  // Comparison function subtracts b from a to determine order.
// Negative result means a should come before b.
// Positive result means b should come before a.
// Zero means a and b are equal, so their relative positions remain unchanged

console.log(StrinSgArr.at(0));
// return StrinSgArr.at(0);
 
}

findLongestStringWord("I'm the person who can code and who can build something!!!");;

// Same thing with the reduce method 
  


let FindLongWordWithReduce = (str)=>{
  if(str.trim().length === 0 ){
    return false
  }

  string = str.split(" ");
  return string.reduce((Accumalator,currentWord) => (currentWord.length > Accumalator.length ? currentWord :Accumalator ),"" )
  

}
console.log(FindLongWordWithReduce("I am Gratefull"))