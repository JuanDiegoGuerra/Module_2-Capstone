const commentsGet = async (id) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/L3cd5MnXmz3nt1juQH1n/comments?item_id=${id}`);
    const data = await response.json();
    if (response.ok && data.length > 0) {
      return data;
    }
    return [];
  } catch (err) {
    throw new Error(`Failed to get comments: ${err}`);
  }
};

const commentsPost = async (id, name, comment) => {
  try {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/L3cd5MnXmz3nt1juQH1n/comments', {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        username: name,
        comment,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to Post comments');
    }
  } catch (err) {
    throw new Error('Failed to Post comments ', err);
  }
};

export { commentsGet, commentsPost };