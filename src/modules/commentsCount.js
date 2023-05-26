const commentsCounter = (comments) => {
  let count = 0;
  if (comments && comments.length > 0) {
    count = comments.length;
    return count;
  }
  return count;
};

export default commentsCounter;
