import {
    Keypair,
    LAMPORTS_PER_SOL,
    SystemProgram,
    TransactionMessage,
    VersionedTransaction,
} from "@solana/web3.js";

import { payer, connection } from "./lib/vars";
import { loadProfile } from "./lib/profile";
import { explorerURL, printConsoleSeparator } from "./lib/helpers";

async function main() {
    loadProfile();
}

main();