const commentsCounter = (comments) => {
  let count = 0;
  if (comments && comments.length > 0) {
    count = comments.length;
    return `Comments (${count})`;
  }
  return `Comments (${count})`;
};

export default commentsCounter;
