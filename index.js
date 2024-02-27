const loadCountries = async () => {
    const url = `https://restcountries.com/v3.1/all`;
    const res = await fetch(url);
    const data = await res.json()
    displayCountries(data);
}

const displayCountries = (countries) => {
    const divContainer = document.getElementById('div-container');
    countries.forEach(country => {
        // console.log(country);
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
            <button onclick = "loadCountryInfo('${country.cca2}')" class="btn btn-outline btn-secondary">Show Details</button>
            </div>
            
         </div>
        `;
        divContainer.appendChild(div)
    });
}


const loadCountryInfo = async (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    displayInfo(data[0])
}

const displayInfo = (country) => {
    console.log(country);
    const singleCountryContainer = document.getElementById('singleCountryContainer');
    singleCountryContainer.innerHTML = ``
    const div = document.createElement('div');

    // class="card w-96 bg-base-100 shadow-xl image-full";
    div.classList.add('my-10')
    div.classList.add('card')
    div.classList.add('lg:w-5/12');
    div.classList.add('bg-base-100')
    div.classList.add('shadow-xl')
    div.classList.add('image-full');
    div.classList.add('mx-auto')
    div.innerHTML = `
    <figure><img class="w-full" src="${country.flags.png}" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">${country.name?.official}</h2>
                        <p class="font-bold text-rose-600">Flags Details: <span class = "font-semibold text-purple-200">${country.flags?.alt || 'No information available'}</span></p>
                        <p>Population: ${country.population}</p>
                        <p>Start of Week: ${country.startOfWeek}</p>
                        <p>Region: ${country.region}</p>
                        <p>Sub Region: ${country.subregion}</p>
                        
                    </div>
    `;
    singleCountryContainer.appendChild(div)
}


loadCountries()