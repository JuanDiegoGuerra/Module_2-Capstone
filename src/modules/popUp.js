import { commentsPost, commentsGet } from './commentsAPI.js';
import commentsCounter from './commentsCount.js';

const popupContainer = document.createElement('div');
popupContainer.classList.add('popup-container');
popupContainer.classList.add('hidden');

const removePopup = () => {
  document.body.removeChild(popupContainer);
};

const displayPopup = (url, id) => {
  fetch(url).then((response) => response.json())
    .then((data) => {
      const {
        name, weight, height, sprites, abilities, species,
      } = data;
      const { front_default: frontDefault } = sprites.other['official-artwork'];
      const skills = abilities[0].ability.name;
      const family = species.name;
      popupContainer.innerHTML = `
  <div class="popup">
    <button id="close-btn" class="close-btn" type="button">X</button>
    <div class="image-container">
    
    <img src="${frontDefault}" id="${id}"alt="${name}">
    </div>
    <h2 class="item-header">${name}</h2>
    <div class="details">
      <div class="item-detail__list">Weight: ${weight}</div>
      <div class="item-detail__list">Height: ${height}</div>
      <div class="item-detail__list">Abilities: ${skills}</div>
      <div class="item-detail__list">Species: ${family}</div>
    </div>
    <h3 id="comments-header"></h3>
    <div class="comments-container" id="comments-container-${id}">
    </div>
    <h3 class="addcomment-title">Add a comment</h3>
    <form id="comment-form-${id}">
      <div class="input-container">
        <input type="text" name="name" placeholder="Your name" required>
      </div>
      <div class="textarea-container">
        <textarea type="text" name="comments" placeholder="Your insights" required rows="5" cols="36" ></textarea>
      </div>
      <button id="submit-btn" class="submit-btn" type="submit">Comment</button>
    </form>
  </div>`;

      const commentsContainer = popupContainer.querySelector(`#comments-container-${id}`);
      const commentForm = popupContainer.querySelector(`#comment-form-${id}`);

      const displayComments = (comments) => {
        const commentsHeader = popupContainer.querySelector('#comments-header');
        commentsHeader.innerHTML = `Comments(${commentsCounter(comments)})`;
        commentsContainer.innerHTML = '';
        comments.forEach((comment) => {
          const { username, comment: commentText, creation_date: creationDate } = comment;
          const commentElement = document.createElement('div');
          commentElement.classList.add('comment');
          commentElement.innerHTML = `
          <span class="comment__date">${creationDate}</span>
          <span class="comment__username">${username}</span>
          <span class="comment__text">${commentText}</span>`;

          commentsContainer.appendChild(commentElement);
        });
      };

      commentsGet(id).then((comments) => {
        displayComments(comments);
      }).catch((err) => {
        throw ("Couldn't fetch comments", err);
      });

      commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = commentForm.querySelector('input[name="name"]');
        const commentsInput = commentForm.querySelector('textarea[name="comments"]');
        const name = nameInput.value;
        const comment = commentsInput.value;

        commentsPost(id, name, comment)
          .then(() => commentsGet(id)).then((comments) => {
            displayComments(comments);
            nameInput.value = '';
            commentsInput.value = '';
          }).catch((err) => {
            throw ("Couldn't fetch comments", err);
          });
      });
      document.body.appendChild(popupContainer);

      const closeButton = document.getElementById('close-btn');
      closeButton.addEventListener('click', removePopup);
    })
    .catch((err) => {
      throw ("Couldn't fetch pokemon", err);
    });
};

export { displayPopup, removePopup };