// 1.Arrray Destructuring

// let ar1=["Kerala", "Malayalam", 10000];

        // let state = ar1[0];
        // let language = ar1[1];
        // let population = ar1[2];

        //This three line  change into singleline using Array destructuring

// let [state, language, population] = ar1;



// console.log(state);
// console.log(language);
// console.log(population);


// 2.Object Destructuring

let obj1 = {
  state:"Kerala",
  language:"Mlayalam",
  population:10000
}

// let state = obj1.state;
// let language = obj1.language;
// let population = obj1.population;

//using destructuring

let{state, language, population} = obj1;

console.log(state);
console.log(language);
console.log(population);

