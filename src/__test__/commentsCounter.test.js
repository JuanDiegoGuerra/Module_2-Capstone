import commentsCounter from '../modules/commentsCount.js';

describe('commentsCounter', () => {
  it('returns the number of comments', () => {
    const comments = [
      {
        username: 'test',
        comment: 'test',
        creation_date: '2021-04-14T22:43:30.000Z',
      },
      {
        username: 'test',
        comment: 'test',
        creation_date: '2021-04-14T22:43:30.000Z',
      },
    ];
    expect(commentsCounter(comments)).toBe(2);
  });
  it('returns 0 if there are no comments', () => {
    const comments = [];
    expect(commentsCounter(comments)).toBe(0);
  });
});