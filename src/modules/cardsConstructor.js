import names from './names.js';
import cars from './carImg.js';
import nolike from '../like/nolike.png';
import popdisplay from './popdisplay.js';

export default async () => {
  const holder = document.querySelector('.card-holder');
  let counter = 0;
  while (counter < 6) {
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('imgDiv');
    imgDiv.style.backgroundImage = `url('${cars[counter].src}')`;
    imgDiv.style.backgroundSize = '100% 100%';
    newCard.appendChild(imgDiv);
    const imgAndTitle = document.createElement('div');
    imgAndTitle.classList.add('imgAndTitle');
    const name = document.createElement('h2');
    name.classList.add('name');
    imgAndTitle.appendChild(name);
    newCard.appendChild(imgAndTitle);
    const divLikes = document.createElement('div');
    divLikes.classList.add('divLikes');
    const likeCounter = document.createElement('p');
    likeCounter.classList.add('likeCounter');
    likeCounter.textContent = '';
    divLikes.appendChild(likeCounter);
    const likes = document.createElement('div');
    likes.style.backgroundImage = `url('${nolike}')`;
    likes.style.backgroundSize = '100% 100%';
    likes.classList.add('likes');
    divLikes.appendChild(likes);
    newCard.appendChild(divLikes);
    const btnCom = document.createElement('button');
    btnCom.classList.add('btn', 'btncom');
    btnCom.textContent = 'Comments';
    newCard.appendChild(btnCom);
    newCard.id = counter;
    holder.appendChild(newCard);
    counter += 1;
  }
  names();
  popdisplay();
};