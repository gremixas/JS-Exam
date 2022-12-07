/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const form = document.querySelector('form');
const searchInput = document.querySelector('#search');
const output = document.querySelector('#output');

form.addEventListener('submit', e => {
    e.preventDefault();
    const kilograms = searchInput.value;
    if (kilograms) {
        output.innerHTML = `<div id="weight">Svarai: <div id="value">${(kilograms * 2.2046).toFixed(2)}</div></div>`;
        output.innerHTML += `<div id="weight">Gramai: <div id="value">${(kilograms * 1000).toFixed(2)}</div></div>`;
        output.innerHTML += `<div id="weight">Uncijos: <div id="value">${(kilograms * 35.274).toFixed(2)}</div></div>`;
    }
});
