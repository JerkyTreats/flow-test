import * as fcl from "@onflow/fcl"
import * as t from "@onflow/types"

/**
 * Check if User address is initialized
 * @param {string} address Users Flow Address
 * @returns FCL response decoded for JS
 */
export async function isInitialized(address) { 
    if (address == null)
        throw new Error("isInitialized(address) -- address required")

    // We are writing Cadence code into this script. 
    // I couldn't find a vscode extension to check the Cadence code a la styled-components
    // 0xProfile is defined in ../config.js
    // The value resolves to an environment variable - ie. .env.local
    return fcl
        .send([
            fcl.script`
                import Profile from 0xProfile

                pub fun main(address: Address): Bool {
                    return Profile.check(address)
                }
            `,
            fcl.args([fcl.arg(address, t.Address)])
        ])
        .then(
            fcl.decode
        )
}