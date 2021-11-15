import { galleryItems } from './gallery-items.js';
// Change code below this line
//1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

const galeryContainer = document.querySelector('.gallery');
const cardGalery = createGalery('galery');
galeryContainer.insertAdjacentHTML('beforeend', cardGalery);

function createGalery (galery) {
  return galleryItems.map(({preview, original, description}) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}"> 
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
        </a>
      </li>
    `;
  })
  .join('');
  return markup;
}

//2. Реализация делегирования на div.gallery и получение url большого изображения.

//забороняємо переходити по посиланні

const folsA = document.querySelector('.gallery');
folsA.addEventListener("click", noLink);

function noLink(events) {
  events.preventDefault();
  };

//3. Подключение скрипта и стилей библиотеки модального окна basicLightbox.
//Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// 4. Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
const imgModal = document.querySelector('.gallery');
imgModal.addEventListener('click', modalOpen);

function modalOpen(events) {
  const instance = basicLightbox.create(
`

`
  )
instance.show()
}









//5. Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.