import { APP_NAME } from './constants.js'
import { capitalize } from './helpers.js'
import { getUsers } from './services/apiService.js'

console.log(APP_NAME)

async function run() {
  const users = await getUsers()
  console.log(capitalize(users[0].name))
}

run()