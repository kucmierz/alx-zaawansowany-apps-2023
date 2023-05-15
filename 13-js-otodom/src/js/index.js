import { getApartments } from "./shared/apartments";
import { getUser, logoutUser } from "./shared/user";

const user = getUser();

const apartments = document.querySelector('#apartments');
const searchForm = document.querySelector('#searchForm');
const sortForm = document.querySelector('#sortForm');
const logoutBtn = document.querySelector('#logoutBtn');

const state = {
    apartments: []
}

const sortApartmentsByPrice = asc => {
    const sorted = state.apartments;
    if (sortForm.elements.sortPriceAsc.checked) {
        sorted.sort((prev, next) => {
            return prev.price > next.price ? -1 : 1;
        })
    } else {
        sorted.sort((prev, next) => {
            return prev.price > next.price ? 1 : -1;
        })
    }
    renderApartments(sorted);
}

// skracanie funkcji strzalkowych
// pelna wersja
const sum = (a, b) => {
    return a + b;
}
// skrocona wersja
// kiedy zwraca tylko jedna rzecz, rezygnujemy z klamr i return
const sum2 = (a, b) => a + b;

// jesli f. strzalkowa przyjmuje tylko 1 parametr, to usuwa sie nawiasy wokol niego

// jesli f. strzalkowa uruchamia inna funkcje i przekazuje ten sam parametr w dol, to skracamy
// pelna wersja 
//getApartments=>{
//     renderApartments(apartments);
// }
// skrot
// getApartments().then(renderApartments)

const renderApartments = collection => {
    apartments.innerHTML = '';
    collection.forEach(apartment => {
        apartments.innerHTML += `
        <li>
            <h3>${apartment.title}</h3>
            <p>Cena ${apartment.price} zl</p>
            <p>Data dodania ${apartment.publication_date}</p>
            <a href="/detail.html?id=${apartment.id}">Przejdz do mieszkania</a>
            <br/>
            <a href="/edit.html?id=${apartment.id}">Przejdz do edycji mieszkania</a>
        </li>
        `;
    });
}




getApartments().then(data => {
    // console.log(data);
    state.apartments = data;
    renderApartments(state.apartments);
})

const handleSearch = ev => {
    ev.preventDefault();
    let minPrice = parseFloat(searchForm.elements.minPrice.value);
    let maxPrice = parseFloat(searchForm.elements.maxPrice.value);
    const filtered = state.apartments.filter(apartment => {
        return apartment.price >= minPrice && apartment.price <= maxPrice;
    });
    renderApartments(filtered);
}

const handleSort = ev => {
    // console.log(sortForm.elements.sortPriceAsc.checked);
    sortApartmentsByPrice(sortForm.elements.sortPriceAsc.checked);
}

const handleLogout = () => {
    logoutUser();
}

sortApartmentsByPrice(true);
searchForm.addEventListener('submit', handleSearch);
sortForm.addEventListener('change', handleSort);
logoutBtn.addEventListener('click', handleLogout);