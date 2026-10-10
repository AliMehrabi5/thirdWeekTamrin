const API_URL = "https://jsonplaceholder.typicode.com/users";


export async function getUsers() {

    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    const users = await response.json();

    return users;
}