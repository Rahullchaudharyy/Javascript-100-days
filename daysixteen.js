const FindMin =(arrays)=>{
    arrays.sort()
    let minVal = 0 ;
    minVal = arrays[0]
    return minVal
}


console.log(FindMin([1,4,3,3,6,4,2,3,2,33,32,2,3,6,8,6,3,2,67,4,67,6,7,1,1]));