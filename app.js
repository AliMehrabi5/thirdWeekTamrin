import { getUsers } from "./api.js";


import {
    renderLoading,
    renderError,
    renderUsers,
    renderEmpty
} from "./ui.js";


let users = [];


const searchInput = document.getElementById("searchInput");

const retryButton = document.getElementById("retryButton");


async function loadUsers() {

    renderLoading();

    try {

        users = await getUsers();

        renderUsers(users);

    } catch (error) {

        renderError(error.message);

    }

}


searchInput.addEventListener("input", () => {

    const searchText = searchInput.value
        .trim()
        .toLowerCase();


    const filteredUsers = users.filter((user) => {

        return user.name
            .toLowerCase()
            .includes(searchText);

    });


    if (filteredUsers.length === 0) {

        renderEmpty();

        return;
    }


    renderUsers(filteredUsers);

});


retryButton.addEventListener("click", () => {

    loadUsers();

});


loadUsers();