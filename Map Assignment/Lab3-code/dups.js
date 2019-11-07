function removeDups(numList){
    let uniques=[];
    let myMap = new Map();

    for (let num of numList) {
  myMap.set(num, true);
 }
for (let key of myMap.keys()) {
   uniques.push(key);
 } 
 return uniques ;
}
    let keb=[5,6,7,7,5,6];
    console.log(removeDups(keb));