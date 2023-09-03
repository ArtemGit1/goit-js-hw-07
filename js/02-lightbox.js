import { galleryItems } from './gallery-items.js';

        const galleryList = document.querySelector('.gallery');

        const galleryMarkup = galleryItems.map(item => `
            <li class="gallery__item">
                <a class="gallery__link" href="${item.original}">
                    <img class="gallery__image"
                    src="${item.preview}"
                    alt="${item.description}"
                    />
                </a>
            </li>
        `).join('');

        galleryList.innerHTML = galleryMarkup;

        const lightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250,
        });

        galleryList.addEventListener('click', e => {
            e.preventDefault();
            if (e.target.tagName === 'IMG') {
                lightbox.open();
            }
        });