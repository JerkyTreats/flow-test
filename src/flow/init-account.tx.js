import * as fcl from "@onflow/fcl"
import * as t from "@onflow/types"

// Create a Profile and save to the Users Flow Account

/* 
account.save(<- Profile.new(), to: Profile.privatePath)
    Create & Store profile in Users Account
    https://docs.onflow.org/cadence/tutorial/02-hello-world/#accounts-and-transactions

    <- is the Move operator, required for Resources
    Resources are like a struct and are a Linear Type
    Resources can only exist in one location at a time, so movement must be explicitly shown in the code.
    Very useful for NFTs, where accidental duplication can be devestating

    Accounts have a public/private path, here we create a new Profile and save it to the private path

account.link<&Profile.Base{Profile.Public}>(Profile.publicPath, target: Profile.privatePath)>
    Create a Capability that allows public access to Profile info
    https://docs.onflow.org/cadence/language/capability-based-access-control/

    Capabilities can be thought of as pointers, can be public/private
    The Profile smart contract has defined interfaces implemented by the capabilities

    Good explanation here: 
    https://docs.onflow.org/cadence/tutorial/02-hello-world/#creating-capabilities-and-references-to-stored-resources

    accounts.link creates new capability
    <&Profile.Base{Profile.Public}> is the restricted reference type the capability represents
        & refers to a reference
        Profile.Base is a resource implementing Owner, Public interface
        Profile.Public is an interface surfacing functions to get various publically available data 
        You can look at the contract here: 
            https://flow-view-source.com/testnet/account/0xba1132bc08f82fe2/contract/Profile
    (Profile.publicPath, target: Profile.privatePath) is what we're linking to
        Profile.publicPath means this will be a publically available capability
        target: Profile.privatePath is the path in the users storage for this object

*/

export async function initAccount() {
    const txId = await fcl
        .send([
            fcl.transaction`
                import Profile from 0xProfile

                transaction {
                    let address: Address

                    prepare(account: AuthAccount) {
                        self.address = account.address

                        if (!Profile.check(self.address)) {
                            // Create new Profile and save it to the private path
                            account.save(<- Profile.new(), to: Profile.privatePath)

                            // Create a Capability that allows public access to Profile info
                            account.link<&Profile.Base{Profile.Public}>(Profile.publicPath, target: Profile.privatePath)
                        }
                    }

                    post {
                        Profile.check(self.address): "Account was not initialized"
                    }
                }
            `,
            fcl.payer(fcl.authz),
            fcl.proposer(fcl.authz),
            fcl.authorizations([fcl.authz]),
            fcl.limit(100),
        ])
        .then(fcl.decode)
    return fcl.tx(txId).onceSealed()
}