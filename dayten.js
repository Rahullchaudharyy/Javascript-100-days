const  checkarrays =(arr1,arr2)=>{
        if(arr1.length !== arr2.length){
           return false
        }

       return arr1.every((CurVal,index)=> CurVal === arr2[index])
}
console.log(checkarrays([1,2,3],[1,1,3,33]));