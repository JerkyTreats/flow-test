import { mutate } from '@onflow/fcl'
import * as t from "@onflow/types"

const UPDATE_PROFILE = `
import Profile from 0xProfile

transaction(name: String) {
    prepare(currentUser: AuthAccount) {
        currentUser
            .borrow<&{Profile.Owner}>(from: Profile.privatePath)!
            .setName(name)
    }
}
`

export async function updateProfile() {
//   if (!address || !profile) {
//     console.log('null value to update profile')
//     return null
//   }

  const res = await mutate({
    cadence: UPDATE_PROFILE,
    args: (arg, t) => [arg('test', t.String)]
  })
  console.log(res.decode)
  return res
}
