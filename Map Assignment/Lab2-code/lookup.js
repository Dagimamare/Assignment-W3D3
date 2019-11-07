function checkForSum(numList, numZ) {
    let mymap=new Map();
    for(let key of numList){
     mymap.set(key,key);
     if(mymap.has(numZ-key)){
         return true
        }
    }
    return false ;
}

