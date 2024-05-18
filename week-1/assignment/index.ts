import { createToken } from "./lib/task/createToken";
import { createNFT } from "./lib/task/createNFT";

async function main() {
    // loadProfile();
    await createToken();
    await createNFT();
}

main();