import { query } from "@onflow/fcl"
import * as t from "@onflow/types"

const READ_PROFILE = `
import Profile from 0xProfile

pub fun main(address: Address): Profile.ReadOnly? {
  return Profile.read(address)
}
`

export async function fetchProfile(address) {
  if (address == null) {
    console.log('address null')
    return null
  }

  const res = await query({
    cadence: READ_PROFILE,
    args: (arg, t) => [arg(address, t.Address)]
  })
  console.log(res)
  return res
}
