const images = [
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
        description: 'Hokkaido Flower'
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight'
    },
    // Dodaj więcej obrazów według potrzeby...
];

const galleryContainer = document.querySelector('.gallery');
const galleryItems = images.map(({ preview, original, description }) => `
    <li class="gallery-item">
        <a class="gallery-link" href="${original}">
            <img
                class="gallery-image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>
`).join('');

galleryContainer.innerHTML = galleryItems;

galleryContainer.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') return;

    const largeImageURL = event.target.dataset.source;
    console.log(largeImageURL);

    const instance = basicLightbox.create(`
        <img src="${largeImageURL}" alt="${event.target.alt}">
    `);
    
    instance.show();

    const closeModalOnEscape = event => {
        if (event.key === 'Escape') {
            instance.close();
            document.removeEventListener('keydown', closeModalOnEscape);
        }
    };

    document.addEventListener('keydown', closeModalOnEscape);
});