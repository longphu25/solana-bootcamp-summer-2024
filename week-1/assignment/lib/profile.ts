import {
    LAMPORTS_PER_SOL,
} from "@solana/web3.js";

import { payer, connection } from "../lib/vars";

/**
 * Load locally stored PublicKey addresses
 */
export async function loadProfile() {
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
