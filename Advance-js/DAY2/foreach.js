//FOR EACH
const arr = [
  {
    name:'Alice',
    mark:35,
    place:'Kannur'
  },
  {
    name:'Bob',
    mark:28,
    place:'palakkad'
  },
  {
    name:'Catherin',
    mark:44,
    place:'trissur'
  },
  {
    name:'Danial',
    mark:23,
    place:'Kollam'
  }
];
 let sum=0;
arr.forEach((item)=>{
  sum = sum+item.mark;
});
console.log(sum);



