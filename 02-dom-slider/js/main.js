// Napisz kod slidera

// 1. Stworz sobie pusta tablice images
// 2. Do tablicy images dodaj adresy zdjec pieskow z internetu
//   -> Hint: aby wziac zdjecie pieska z internetu, wejdz na google images, kliknij prawy przycisk i wybierz Copy Image Adress
// 3. Dodaj zmienna counter i ustaw jej wartosc poczatkowa na 0
// 4. po zaladowaniu pliku JS, dodaj elementowi img atrybut src, odpowiadajacy pierwszemu elementowi tablicy images, zdefiniowanym w kroku 1
// 5. po wcisnieciu przycisku next, zastap atrybut src obrazka nastepnym elementem z tablicy
// 6. po wcisnieciu przycisku prev, zastap atrybut src obrazka poprzednim elementem z tablicy
// 7. po wcisnieciu przycisku next, w momencie kiedy jest ostatni element slidera, wstaw 1 zdjecie
// 8. po wcisnieciu przycisku prev, w momencie kiedy jest pierwszy element slidera, wstaw ostatnie zdjecie

const image = document.querySelector('img');
const btnPrev = document.querySelector('#btnPrev');
const btnNext = document.querySelector('#btnNext');
const divControls = document.querySelector('#divControls');

const images = [
    {
        src: 'https://i1.kwejk.pl/k/obrazki/2015/05/f85b6b02bbb1dbf9e26a635e0c4e585b.jpg',
        alt: 'piesek 1'
    },
    {
        src: 'https://i.pinimg.com/736x/34/de/34/34de34a375dac96e8da6a3a1b7629c9a.jpg',
        alt: 'piesek 2'
    },
    {
        src: 'https://i1.kwejk.pl/k/obrazki/2022/04/Jm6lhjIWhASb4T52.jpg',
        alt: 'piesek 3'
    },
    {
        src: 'https://zoonews.pl/wp-content/uploads/2022/01/chihuahua.jpg',
        alt: 'piesek 4'
    }
];

let counter = 0;
image.src = images[0].src;

const showNextImage = () => {
    if (counter + 1 >= images.length) {
        counter = -1;
    }
    image.src = images[++counter].src;
};

const showPrevImage = () => {
    if (counter - 1 < 0) {
        counter = images.length;
    }
    image.src = images[--counter].src;
};

const handleImageChange = (ev) => {
    if (ev.target.id === "btnNext") {
        showNextImage();
    }
    if (ev.target.id === "btnPrev") {
        showPrevImage();
    }
};

divControls.addEventListener('click', handleImageChange);