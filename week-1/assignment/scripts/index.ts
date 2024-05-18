import {
    Keypair,
    LAMPORTS_PER_SOL,
    SystemProgram,
    TransactionMessage,
    VersionedTransaction,
} from "@solana/web3.js";

import { payer, connection } from "../lib/vars";
import { explorerURL, printConsoleSeparator } from "../lib/helpers";

async function main() {
    console.log("Payer address:", payer.publicKey.toBase58());

    // get the current balance of the `payer` account on chain
    const currentBalance = await connection.getBalance(payer.publicKey);
    console.log("Current balance of 'payer' (in lamports):", currentBalance);
    console.log("Current balance of 'payer' (in SOL):", currentBalance / LAMPORTS_PER_SOL);

    // airdrop on low balance
    if (currentBalance <= LAMPORTS_PER_SOL - 1) {
        console.log("Low balance, requesting an airdrop...");
        await connection.requestAirdrop(payer.publicKey, LAMPORTS_PER_SOL);
    }

}

main();