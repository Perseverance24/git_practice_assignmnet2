let n = 10;
let count = 0;

for(let j=2;j<=Math.sqrt(n); j++){
  if(n%j==0){
    count++;
  }
}

if(count == 0){
  console.log("Prime Number");
}
else{
  console.log("Not a Prime Number"); 
}