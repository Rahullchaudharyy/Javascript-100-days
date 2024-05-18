const CheckPalyndrome = (Word) => {
    Word = Word.replace(/\W/g,"")
    let revereWord =  Word.split('').reverse().join('')
    
    if(Word === revereWord){
        console.log(true);
    }else{
        console.log(false);
    }

    console.log(revereWord);
}
CheckPalyndrome("I, cant ,,,be the ,,person who is, unsuccessfull person thats the thilng")


