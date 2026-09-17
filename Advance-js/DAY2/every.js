const ages=[10, 23, 43, 56, 76, 65];

const isArrayAdult = ages.every(age => age >= 45);
console.log(isArrayAdult);

const age2=[10, 23, 43, 56, 76, 65];

const ArrayAdult = ages.some(age => age >= 10);
console.log(ArrayAdult);
