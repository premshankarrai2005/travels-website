/*function countVowels(str){
    let count=0;
    for(const char of str){
        if(
            char==="a" ||
            char==="e" ||
            char==="i" ||
            char==="o" ||
            char==="u" 
        ){
            count++;
        }
    }
    console.log(count);
}*/

Fact=1;
let n=prompt("Enter the valve of n");
n=Number.parseInt(n);
for(let i=0;i<n;i++){
  Fact*=(i+1)
}
console.log("fact of first" +n+ "number is " +Fact)