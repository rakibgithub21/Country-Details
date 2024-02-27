const loadCountries = async () => {
    const url = `https://restcountries.com/v3.1/all`;
    const res = await fetch(url);
    const data = await res.json()
    displayCountries(data);
}

const displayCountries = (countries) => {
    const divContainer = document.getElementById('div-container');
    countries.forEach(country => {
        console.log(country);
        const div = document.createElement('div');
        // div.classList.add('card, bg-primary text-primary-content');
        div.classList.add('card')
        div.classList.add('bg-gray-300')
        div.classList.add('text-black')
        div.innerHTML = `
        <div class="card-body">
            <h2 class="card-title">${country.name.common}</h2>
            <h2 class="card-title">Indipendent: ${country.independent}</h2>
            <h2 class="card-title">Capital: ${country.capital}</h2>
            <div>
            <button class="btn btn-outline btn-secondary">Show Details</button>
            </div>
            
         </div>
        `;
        divContainer.appendChild(div)
    });
}


loadCountries()