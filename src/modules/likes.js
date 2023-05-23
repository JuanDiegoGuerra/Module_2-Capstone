import likeImage from '../images/like.png';

export const likeGet = async (id) => {
  const data = fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${id}/likes`)
    .then((response) => response.json())
    .then((obj) => Object.entries(obj))
    .catch((err) => {
      throw ('Failed to Get likes ', err);
    });
  return data;
};

const likesPost = async (id, target) => {
  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${id}/likes`, {

    method: 'POST',
    body: JSON.stringify({
      item_id: target.id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },

  })
    .catch((err) => {
      throw ('Failed to Post likes ', err);
    });
  target.src = likeImage;
};
export default likesPost;