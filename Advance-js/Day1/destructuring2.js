// 1.Arrray Destructuring
//Nested array
// let ar1=["Kerala", "Malayalam", 10000, ["TRV", "COK", "CCJ", "CNN"]];

        // let state = ar1[0];
        // let language = ar1[1];
        // let population = ar1[2];

        //This three line  change into oneline using Array destructuring

// let [state, language, population, [a1, a2, a3, a4]] = ar1;


// console.log(state);
// console.log(language);
// console.log(population);

// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);


// 2.Object Destructuring
//Nested object 
let obj1 = {
  state:"Kerala",
  language:"Mlayalam",
  population:10000,

  airports:{
        a1:"TRV",
        a2:"COK",
        a3:"CCJ",
        a4:"CNN"
  }
}

// let state = obj1.state;
// let language = obj1.language;
// let population = obj1.population;

//using destructuring

let{state:s1, language:l1, population:p1, airports:{a1, a2, a3, a4}} = obj1;

console.log(s1);
console.log(l1);
console.log(p1);
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);


