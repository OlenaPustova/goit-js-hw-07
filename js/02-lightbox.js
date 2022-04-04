import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
// const bodyEl = document.querySelector("body");

const imagesMarkup = createGalleryItem(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", imagesMarkup);

function createGalleryItem(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
