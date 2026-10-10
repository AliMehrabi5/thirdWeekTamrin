const API_URL = "https://jsonplaceholder.typicode.com/users";

async function getUsers() {
    try {
        console.log("Request started...");

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const users = await response.json();

        console.log("Users received:");
        console.log(users);

    } catch (error) {
        console.log("Something went wrong.");
        console.log("Error:", error.message);

    } finally {
        console.log("Request finished");
    }
}

getUsers();