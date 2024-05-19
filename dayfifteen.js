// let GiveMesquare = (arr)=>{
//    return arr.reduce((acc,current)=> (acc = acc + current*current),0)
// }


let sum = 0 ;
let GiveMesquare = (arr)=>{
    for(let elem of arr){
        sum = sum+ elem*elem 
    }
    return sum
}
console.log(GiveMesquare([1,2,3]));