import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const galleryList = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({preview, original, description}) => {
    return `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
}).join('');

galleryList.insertAdjacentHTML('afterbegin', galleryMarkup);

galleryList.addEventListener('click', handlerGalleryListClick);

function handlerGalleryListClick(evt){
    evt.preventDefault();
    
    if(!evt.target.classList.contains('gallery__image')){return;}
    
   const Itemlink = evt.target.closest('a');
   const linkValue = Itemlink.getAttribute('href');


   const instance = basicLightbox.create(
    `<img
       src="${linkValue}"
       alt=""
     />`
     );

instance.show()

document.addEventListener('keydown', (evt) => 
evt.key === 'Escape' ? instance.close() : null
)
}

