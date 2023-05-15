import getIdFromSearchParams from "./shared/helpers";
import { getApartment } from "./shared/apartments";
import { getUser, logoutUser } from "./shared/user";

const user = getUser();

const addApartmentForm = document.querySelector('#addApartmentForm');
const logoutBtn = document.querySelector('#logoutBtn');

const renderApartment = (apartment) => {
    addApartmentForm.elements.id.value = apartment.id
    addApartmentForm.elements.title.value = apartment.title
    addApartmentForm.elements.description.value = apartment.description
    addApartmentForm.elements.price.value = apartment.price
    addApartmentForm.elements.publication_date.value = apartment.publication_date
}

const apartmentId = getIdFromSearchParams(window.location.search)
getApartment(apartmentId)
    .then(apartment => {
        renderApartment(apartment)
    })


const saveApartment = apartment => {
    fetch(`http://localhost:8000/apartments/${apartmentId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(apartment)
    });
}

const handleSubmit = ev => {
    ev.preventDefault();
    const apartmentChanges = {
        title: addApartmentForm.elements.title.value,
        description: addApartmentForm.elements.description.value,
        price: addApartmentForm.elements.price.value,
        publication_date: addApartmentForm.elements.publication_date.value,
    }

    saveApartment(apartmentChanges);
    window.location.href = '/index.html';
}

const handleLogout = () => {
    logoutUser();
}

addApartmentForm.addEventListener('submit', handleSubmit);
logoutBtn.addEventListener('click', handleLogout);