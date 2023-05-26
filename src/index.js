import './style.css';
import createHeader from './modules/header.js';
import likesPost, { likeGet } from './modules/likes.js';

createHeader();

document.addEventListener('DOMContentLoaded', () => {
  likeGet()
    .then((data) => {
      data.forEach((element) => {
        const targetItem = element[1].item_id.split('likeId').slice(1);
        const targetElement = document.querySelector(`#like-count${targetItem[0]}`);
        if (targetElement) {
          targetElement.innerHTML = `${element[1].likes} Likes`;
        }
      });
    });

  document.body.addEventListener('click', (e) => {
    if (e.target && e.target.className === 'likeBtn') {
      likesPost(e.target);
      likeGet();
      const targetId = (e.target.id).split('likeId').slice(1);
      const targetHeart = document.querySelector(`#like-count${targetId}`).innerHTML.split(' ');
      document.querySelector(`#like-count${targetId}`).innerHTML = `${(Number(targetHeart[0])) + 1} Likes`;
    }
  });
});
