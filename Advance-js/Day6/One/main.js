import { getData} from './combine.js'

async function run() {
  const data= await getData() //API call

const names = data.map(user => user.name) 
console.log(names);


const filtered = data.filter(user => user.email.includes(".biz"))
console.log(filtered);

}
run()