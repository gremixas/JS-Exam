/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');

async function getData() {
    try {
        const response = await fetch(ENDPOINT);
        if (response.ok) {
            const data = await response.json();
            btn.addEventListener('click', () => showUsers(data));
        }

    } catch (err) {
        console.error(err);
    }
}

function showUsers(data) {
    output.innerHTML = '';
    data.forEach(user => {
        output.innerHTML += `<div class="card">
                                <img class="avatar" alt="Avatar" src="${user.avatar_url}">
                                <div class="username">${user.login}</div>
                            </div>`;
    });
}

(() => getData())();