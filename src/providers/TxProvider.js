import React, { useState } from "react";
import { tx } from '@onflow/fcl'

const TxContext = React.createContext()

export function useTxs() {
    const context = React.useContext(TxContext)
    if (!context) throw new Error(`useTx must be used within a TxContext`)
    return context
}

// State management for Flow Transactions
// Holds an array of transactions and CRUD operations for those txs
export function TxProvider({children}) {
    const [txs, setTxs] = useState([])

    // Create a transaction
    const createTx = (txId) => {
        let transaction = { id: txId }

        // populate txs with existing txs + new
        setTxs(prev => [...prev, transaction])

        // As the transaction updates, push update into update method
        tx(txId).subscribe(s => updateTxStatus(s?.status, transaction?.id,))

    }

    // const readTxStatus = () => {}

    // Remove transaction by Id
    const removeTx = (txId) => {
        const newTxs = txs.filter(t => t.id !== txId)
        setTxs(newTxs)
    }

    // 0	Unknown
    // 1	Transaction Pending - Awaiting Finalization
    // 2	Transaction Finalized - Awaiting Execution
    // 3	Transaction Executed - Awaiting Sealing
    // 4	Transaction Sealed - Transaction Complete. At this point the transaction result has been committed to the blockchain.
    // 5	Transaction Expired
    const updateTxStatus = (status, txId) => {

        // Remove completed txs
        // TODO: Expired txs should probably notify user
        if (status >= 4 ) {
            removeTx(txId)
            return
        }

        // pull out the transaction from the list
        const tx = txs.filter(t => t.id === txId)
        if (!tx) return

        // push new status into the found transaction
        const updatedTx = { ...tx, status}

        // Set the transaction state to be all transaction + new one
        const remainingTxs = txs.filter(t => t.id !== txId)
        setTxs([...remainingTxs, updatedTx])
    }

    const runningTxs = () => {
        return txs.length !== 0
    }

    return (
        <TxContext.Provider value={(
            {
                runningTxs: runningTxs,
                createTx: createTx,
            }
        )}>
            {children}
        </TxContext.Provider>
    )
}
