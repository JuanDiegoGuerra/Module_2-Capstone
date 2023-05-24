const popupContainer = document.createElement('div');
popupContainer.classList.add('popup-container');
popupContainer.classList.add('hidden');

const removePopup = () => {
  document.body.removeChild(popupContainer);
};

const displayPopup = () => {
  popupContainer.innerHTML = `
  <div class="popup">
    <button id="close-btn" class="close-btn" type="button">X</button>
    <div class="image-container">
    <img src="https://picsum.photos/id/1/500/300" alt="dummy">
    </div>
    <h2 class="item-header">Space 3</h2>
    <div class="details">
      <div class="item-detail__list">fuel: natural gas</div>
      <div class="item-detail__list">weight: 40lbs</div>
      <div class="item-detail__list">length: 20km</div>
      <div class="item-detail__list">power: 100mph</div>
    </div>
    <h3>Comments(2)</h3>
    <div class="comments-container">
      <div class="comments">
        <span>03/11/2023</span> <span>Alex: I love to fly</span>
      </div>
    </div>
    <h3>Add a comment</h3>
    <form id="comment-form">
      <div class="input-container">
        <input type="text" name="name" placeholder="Your name" required>
      </div>
      <div class="textarea-container">
        <textarea type="text" name="comments" placeholder="Your insights" required rows="5" cols="36" ></textarea>
      </div>
      <button id="submit-btn" class="submit-btn" type="submit">Comment</button>
    </form>
  </div>`;

  const commentForm = popupContainer.querySelector('#comment-form');

  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = commentForm.querySelector('input[name="name"]');
    const commentsInput = commentForm.querySelector('textarea[name="comments"]');
    // const name = nameInput.value;
    // const comment = commentsInput.value;
    // Here, you can make a request to your Involvement API to record the comment
    nameInput.value = '';
    commentsInput.value = '';
  });

  document.body.appendChild(popupContainer);

  const closeButton = document.getElementById('close-btn');
  closeButton.addEventListener('click', removePopup);
};

export { displayPopup, removePopup };