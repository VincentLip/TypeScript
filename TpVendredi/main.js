import { ImageItem } from "./classes/image.js";
const images = [
    new ImageItem("./assets/montagne.jpg", "Montagne", "Montagne des alpes"),
    new ImageItem("./assets/desert.jpg", "Desert", "Desert du Sahara"),
    new ImageItem("./assets/foret.jpg", "Foret", "Foret d'amazonie"),
    new ImageItem("./assets/ocean.jpg", "Ocean", "Océan atlantique"),
    new ImageItem("./assets/plaine.jpg", "Plaine", "Plaine de France"),
    new ImageItem("./assets/terril.jpg", "Terril", "Terril Henin-beaumont"),
];
const selectPicture = document.querySelector('#SelectPicture');
const rightBtn = document.querySelector('#right-btn');
const leftBtn = document.querySelector('#left-btn');
let count = 0;
let selectedImage;
leftBtn.addEventListener('click', () => {
    if (count >= 1 && count <= images.length) {
        count = count - 1;
        console.log(count);
        pictureImage.src = images[count].imageUrl;
        descriptionImage.textContent = images[count].imageDescription;
    }
    else {
    }
});
rightBtn.addEventListener('click', () => {
    if (count >= -1 && count <= images.length - 2) {
        count = count + 1;
        console.log(count);
        pictureImage.src = images[count].imageUrl;
        descriptionImage.textContent = images[count].imageDescription;
    }
    else {
    }
});
const refreshSelectPicture = () => {
    selectPicture.innerHTML = "";
    images.forEach(image => {
        let newButton = document.createElement('button');
        newButton.textContent = image.imageTitle;
        newButton.className = "btn btn-outline-primary p-2 px-4 w-100 my-2";
        newButton.id = `selectImage-${image.id}`;
        newButton.addEventListener('click', () => {
            selectedImage = image;
            refreshDetails();
            refreshSelectPicture();
            count = image.id - 1;
            console.log(count);
        });
        selectPicture.appendChild(newButton);
    });
};
const pictureImage = document.querySelector('img#picture');
const descriptionImage = document.querySelector('#DescriptionSelect');
const refreshDetails = () => {
    if (selectedImage) {
        pictureImage.src = selectedImage.imageUrl;
        descriptionImage.textContent = selectedImage.imageDescription;
    }
    else {
        pictureImage.src = "./assets/img/unknown.jpg";
        descriptionImage.textContent = "";
    }
};
refreshSelectPicture();
