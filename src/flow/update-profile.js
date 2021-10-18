import * as fcl from "@onflow/fcl"
import * as _ from "lodash"

const UPDATE_PROFILE = `
import Profile from 0xProfile

transaction(name: String, avatar: String, color: String, info: String) {
    prepare(currentUser: AuthAccount) {
        let profileReference = currentUser
            .borrow<&{Profile.Owner}>(from: Profile.privatePath)!
        profileReference.setName(name)
        profileReference.setAvatar(avatar)
        profileReference.setColor(color)
        profileReference.setInfo(info)
    }
}
`

export async function updateProfile(oldProfile, newProfile) {
  const profile = _.merge({}, oldProfile, newProfile);

  if (_.isEqual(oldProfile, profile)) throw Error('No change to profile');

  const transactionId = await fcl.mutate({
    cadence: UPDATE_PROFILE,
    args: (arg, t) => [
      arg(profile.name ? profile.name : '', t.String),
      arg(profile.avatar ? profile.avatar : '', t.String),
      arg(profile.color ? profile.color : '', t.String),
      arg(profile.info ? profile.info : '', t.String)
    ],
    limit: 100
  })

  return transactionId;

}
