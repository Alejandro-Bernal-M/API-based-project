import getLikesFromAPI from './getLikesFromAPI.js';

export default async () => {
  const likeCounters = document.querySelectorAll('.likeCounter');
  const likes = await getLikesFromAPI();
  likeCounters.forEach((counter) => {
    for (let i = 0; i < likes.length; i += 1) {
      if (likes[i].item_id === counter.parentNode.previousSibling.textContent) {
        counter.innerHTML = `likes ${likes[i].likes}`;
      }
    }
  });
  likeCounters.forEach((counter) => {
    if (counter.textContent === '') {
      counter.textContent = 'likes 0';
    }
  });
};