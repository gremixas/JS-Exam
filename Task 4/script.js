/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

// Apsigalvojau del importo, nes https://htmlpreview.github.io/ tokiu budu neload'ina cars.json
// O parsisiuntus projekta i PC jo neatidaro del CORS ...
// import cars from './cars.json' assert {type: 'json'}

const ENDPOINT = './cars.json';
const output = document.querySelector('#output');

async function readJsonFile(file) {
    try {
        const response = await fetch(file);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error('Something went wrong while opening data file.');
        }
    } catch (err) {
        console.error(err);
    }
}

readJsonFile(ENDPOINT).then(cars => {
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
});

