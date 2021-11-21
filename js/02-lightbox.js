import { galleryItems } from './gallery-items.js';

// Change code below this line
//Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи. Используй готовый код из первого задания.

const galeryContainer = document.querySelector('.gallery');
const cardGalery = createGalery('galery');
galeryContainer.insertAdjacentHTML('beforeend', cardGalery);


function createGalery (galery) {
  return galleryItems.map(({preview, original, description}) => {
    return `
      <li class="gallery__item">
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
      </li>
    `;
  })
  .join('');
  return markup;
}

const textAlt = document.querySelector('.gallery__image');
//Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery. Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
//Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt. Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.
let imgTitle;

const imgText = document.querySelector('.gallery');
imgText.addEventListener('click', imgOpen);
  function imgOpen (event) {
  console.log(imgTitle = event.target.getAttribute('alt'));
  return;
  }

const galleryItem = document.querySelector('.gallery__item a');


const newTitle = (
    `<h2>${imgTitle}</h2>`
);
galleryItem.append(newTitle);

let gallery = new SimpleLightbox('.gallery a');

gallery.on('show.simplelightbox', function () {
    gallery.options({
    'nav':false,
    'captions':true,
})
});

