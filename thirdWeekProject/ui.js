const usersContainer = document.getElementById("usersContainer");

const status = document.getElementById("status");


export function renderLoading() {

    status.textContent = "Loading...";

    usersContainer.innerHTML = "";

}


export function renderError(message) {

    status.textContent = `Error: ${message}`;

    usersContainer.innerHTML = "";

}


export function renderEmpty() {

    status.textContent = "No users found.";

    usersContainer.innerHTML = "";

}


export function renderUsers(users) {

    status.textContent = "";

    usersContainer.innerHTML = users.map((user) => {

        return `
            <article class="user-card">

                <h2>${user.name}</h2>

                <p>
                    Email: ${user.email}
                </p>

                <p>
                    Phone: ${user.phone}
                </p>

                <button>
                    Details
                </button>

            </article>
        `;

    }).join("");

}