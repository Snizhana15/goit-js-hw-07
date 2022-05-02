import { galleryItems } from "./gallery-items.js";
// Change code below this line
const createGalleryItem = ({ preview, original, description }) =>
  `<a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a>`;
const galleryMarkup = galleryItems.reduce(
  (acc, item) => acc + createGalleryItem(item),
  ""
);
const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);

function onClickHandler(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const target = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${target}">
`);
  instance.show();
}
galleryList.addEventListener("click", onClickHandler);
