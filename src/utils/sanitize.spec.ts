import { ForbiddenChar, sanitize, forbiddenCharsMap } from './sanitize';

describe('sanitize()', () => {
  it('replaces asterisk', () => {
    expect(sanitize('*')).toBe(forbiddenCharsMap[ForbiddenChar.Asterisk]);
  });

  it('replaces backslash', () => {
    expect(sanitize('\\')).toBe(forbiddenCharsMap[ForbiddenChar.Backslash]);
  });

  it('replaces question mark', () => {
    expect(sanitize('?')).toBe(forbiddenCharsMap[ForbiddenChar.QuestionMark]);
  });

  it('replaces slash', () => {
    expect(sanitize('/')).toBe(forbiddenCharsMap[ForbiddenChar.Slash]);
  });
});
