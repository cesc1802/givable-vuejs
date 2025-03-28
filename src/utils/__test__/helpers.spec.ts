import { total } from '@utils/helpers'; // adjust the path if needed

describe('total', () => {
  it('should concatenate two strings', () => {
    expect(total('hello', 'world')).toBe('helloworld');
  });
});
