const FindPower = (num) =>{
  let Result = false ;
  for (let i = 1 ; i <= num ; i++){
    if(2**i === num){
    Result = true;
    } 
  }
  return Result;
}

console.log(FindPower(144));

