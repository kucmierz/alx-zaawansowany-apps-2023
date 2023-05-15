import { getApartment } from "./shared/apartments";
import getIdFromSearchParams from "./shared/helpers"; //gdy jedna metoda w pliku
import { getUser, logoutUser } from "./shared/user";

const user = getUser();

const apartmentInfo = document.querySelector('#apartmentInfo');
const logoutBtn = document.querySelector('#logoutBtn');
// odczytywanie z url
// console.log(window.location.search);
// zwraca "?id=1"
// const getIdFromSearchParams = searchParams => {
//     const params = new URLSearchParams(searchParams);
//     return params.get('id');
// }

// console.log(getParamsFromSearch(window.location.search));
const apartmentId = getIdFromSearchParams(window.location.search)



const renderApartment = (apartment) => {
    apartmentInfo.innerHTML += `
    <h2> ${apartment.title} </h2>
    <p> ${apartment.description} </p>
    <p> ${apartment.price} </p>
    <p> ${apartment.publication_date} </p>
    <p><a href="/index.html">Powrot</a></p>
  `
}

getApartment(apartmentId)
    .then(apartment => {
        renderApartment(apartment)
    })

const handleLogout = () => {
    logoutUser();
}

logoutBtn.addEventListener('click', handleLogout);