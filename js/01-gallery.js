import { galleryItems } from './gallery-items.js';

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

const folsA = document.querySelector('.gallery');
folsA.addEventListener("click", noLink);

  function noLink(events) {
    events.preventDefault();
  };


let imgData;
const imgBig = document.querySelector('.gallery');
imgBig.addEventListener('click', imgOpen);
  function imgOpen (event) {
    return imgData = event.target.getAttribute('data-source');
  }


const imgModal = document.querySelector('.gallery');
imgModal.addEventListener('click', modalOpen);

function modalOpen(events) {
  const instance = basicLightbox.create(
 `<img src="${imgData}">`
)
instance.show()
}







