import countries from './main.js';
const DarkBtn = document.querySelector('#dark-btn');
const LigthBtn = document.querySelector('#ligth-btn');
const Coutries = document.querySelector('.countries');
const input = document.querySelector('#input')
const selectEl = document.querySelector('#select')
if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add('dark');
}
if (localStorage.getItem('btn') === 'dark') {
    DarkBtn.classList.add('hidden');
} else {
    LigthBtn.classList.add('hidden');
}
DarkBtn.addEventListener('click', () => {
    document.body.classList.add('dark');
    localStorage.setItem("mode", "dark");
    DarkBtn.classList.add('hidden');
    LigthBtn.classList.remove('hidden');
    localStorage.setItem('btn','dark');
});
LigthBtn.addEventListener('click', () => {
    document.body.classList.remove('dark');
    localStorage.setItem("mode", "light");
    DarkBtn.classList.remove('hidden');
    LigthBtn.classList.add('hidden');
    localStorage.setItem('btn','light');
});
function updata(county) {
    Coutries.innerHTML = "";
    county.forEach((country) => {
    Coutries.innerHTML += `<div class="country">
          <img
            src="${country.image}"
            alt="1280px-Flag_of_Germany"
          />
          <h2>${country.name}</h2>
          <p>Population: <span>${country.population}</span></p>
          <p>Region: <span>${country.region}</span></p>
          <p>Capital: <span>${country.capital}</span></p>
        </div>`
});
};
updata(countries);
 input.addEventListener('input', (e) => {
    Coutries.innerHTML = "";
    let inputVal = e.target.value.trim().toLowerCase();
    if (inputVal !== "") {
        let search = countries.find((item) => {
        return item.name.toLowerCase().startsWith(inputVal);
    });
    if (search) {
        updata([search]); 
    } else {
        Coutries.innerHTML = `<h1 style="text-align: center; width: 100%;">No data</h1>`;
    }
    } else {
        updata(countries);
    }
});
selectEl.addEventListener('change', (e) => {
    if (e.target.value === 'All') {
        updata(countries);
    } else {
        let filtered = countries.filter((item) => {
        return e.target.value === item.region;
    });
    updata(filtered);
    }
});