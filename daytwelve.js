let RemoveDublicate =(arr)=>{
    let NewArr = [...new Set(arr)]
    return NewArr ;

}
console.log(RemoveDublicate([1,1,2,2,3,3,4,4,5,5,6,6,7,7]))
