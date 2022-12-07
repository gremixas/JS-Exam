/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

import cars from './cars.json' assert {type: 'json'}

// const ENDPOINT = 'cars.json'; // Tikiuosi nepyksite, kad nesinaudojau fetch'u :)
const output = document.querySelector('#output');

cars.forEach(car => {
    let models = '';
    car.models.forEach(model => {
        models += `<div class="model">${model}</div>`
    });
    output.innerHTML += `<div class="card">
                            <div class="brand">${car.brand}</div>
                            <div class="models">${models}</div>
                        </div>`;
});
