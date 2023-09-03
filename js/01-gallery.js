import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');


const galleryMarkup = galleryItems.map(item => `
  <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
        data-source="${item.original}"
      />
    </a>
  </li>
`).join('');


galleryList.innerHTML = galleryMarkup;


galleryList.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.tagName === 'IMG') {
    const largeImageSrc = e.target.getAttribute('data-source');


    const lightbox = basicLightbox.create(`
      <img src="${largeImageSrc}" alt="${e.target.alt}" />
    `);

    lightbox.show();
  }
});
