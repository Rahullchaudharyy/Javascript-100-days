// Generate the hashtag where the prfix should be # and of each word's first letter should be capital . 

let GenerateHashtage = (str)=> {
   if(str.length === 200 ||str.trim().length === ""){
      return false
   }
    
  str = str.split(" ")
  str = str.map((elem)=> elem.replace(elem[0],elem[0].toUpperCase()))
  str = `#${str.join("")}`;
console.log(str);
return str

}

GenerateHashtage("I am rahul in this class")