import { getUser } from "./api.ts";
import type { User } from "./api.ts";
let isLoading: boolean = true;
let errorMessage: string | null = null;
let users: User[] = [];

async function main() {
    users = await getUser();

    if (users.length === 0) {
        errorMessage = "Data User Kosong"
    }
    isLoading = false;
}

async function run() {
    await main();
    console.log("isLoading", isLoading);
    console.log("errorMessage", errorMessage);
    console.log("users", users);
}

run();