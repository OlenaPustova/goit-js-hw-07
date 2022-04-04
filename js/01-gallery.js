import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const bodyEl = document.querySelector("body");

const imagesMarkup = createGalleryItem(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", imagesMarkup);

galleryEl.addEventListener("click", galleryItemOpen);
bodyEl.addEventListener("click", closeByModalClick);

function createGalleryItem(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </div>`;
    })
    .join("");
}

let modal = "";

function galleryItemOpen(e) {
  e.preventDefault();
  window.addEventListener("keydown", closeByEsc);
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  const currentImg = e.target.dataset.source;

  modal = basicLightbox.create(`
      <div class="modal">
          <img src="${currentImg}" >
      </div>
  `);
  modal.show();
}

function closeByModalClick(e) {
  if (e.target.closest(".modal")) {
    modal.close();
    window.removeEventListener("keydown", closeByEsc);
  }
}

function closeByEsc(e) {
  if (e.code === "Escape") {
    modal.close();
    window.removeEventListener("keydown", closeByEsc);
  }
  console.log(e);
}
