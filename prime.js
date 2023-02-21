
let num = 7;
let count = 0;

for(let i=1; i<=num; i++)
{
  if(num % i == 0)
  {
    count++;
  }
}

if(count == 0){
  console.log("Prime Number");
}
else{
  console.log("Not a Prime Number"); 
}