const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1,2,3,4,5,6];
const selectedIndex = null;

imageIndexes.forEach(i => {
    const image = document.createElement('img');
    image.src = `/assets/img/${i}.jpg`;
    image.alt = `Stream image ${i}`;
    image.classList.add('galleryImg');

    image.addEventListener('click', () => {
        //POPUP
        popup.style.transform = 'translateY(0)';
        selectedImage.src = `/assets/img/${i}.jpg`;
        selectedImage.alt = `Stream image ${i}`;
    } )

    gallery.appendChild(image)
})

popup.addEventListener('click', () => {
    popup.style.transform = 'translateY(-100%)';
    popup.src = '';
    popup.alt = '';
})