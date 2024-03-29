import './styles.css';
import cardsConstructor from './modules/cardsConstructor.js';
import giveLikes from './modules/giveLikes.js';
import likeCounter from './modules/likeCounter.js';
import counterForAllLikes from './modules/counterForAllLikes.js';
import counterForAllCards from './modules/counterForAllCards.js';
import counterComments from './modules/counterComments.js';
import likesConstructor from './modules/likesConstructor.js';

const logo = document.querySelector('.logo');
const carsBtn = document.querySelector('.best-cars');
const likesBtn = document.querySelector('.like-a');
const sectionContainer = document.querySelector('.container');
const sectionCounter = document.querySelector('.counter-section');
const counterCarsHolder = document.querySelector('.carsCounter');
const counterLikesHolder = document.querySelector('.likesCounter');
const commentsCounter = document.querySelector('.commentsCounter');

logo.onclick = () => {
  sectionContainer.style.display = 'block';
  sectionCounter.style.display = 'block';
};
carsBtn.onclick = () => {
  sectionContainer.style.display = 'block';
  sectionCounter.style.display = 'none';
};
likesBtn.onclick = () => {
  sectionCounter.style.display = 'block';
  sectionContainer.style.display = 'none';
};

counterForAllLikes();
cardsConstructor();
counterCarsHolder.textContent = counterForAllCards();
giveLikes();

setInterval(async () => {
  counterLikesHolder.textContent = await counterForAllLikes();
}, 1000);
setInterval(async () => {
  commentsCounter.textContent = await counterComments();
}, 1000);

window.onload = () => {
  setInterval(likeCounter, 1000);
  likesConstructor();
};
