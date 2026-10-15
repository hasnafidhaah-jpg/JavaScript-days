import { API_URL } from '../constants.js'

export async function getUsers() {
  const res = await fetch(API_URL)
  const data = await res.json()
  return data
} 