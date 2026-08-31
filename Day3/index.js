const calculator = (a,b, op) =>{
  if(op == '+')return a+b;
  if(op == '-')return a-b;
  if(op == '*')return a*b;
  if(op == '/')return a/b;
}
console.log(calculator(10,5,'+'));
console.log(calculator(10,5,'-'));
console.log(calculator(10,5,'*'));