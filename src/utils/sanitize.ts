export enum ForbiddenChar {
  Asterisk = '*',
  Backslash = '\\',
  QuestionMark = '?',
  Slash = '/'
}

export const forbiddenCharsMap: { [key: string]: string } = {
  [ForbiddenChar.Asterisk]: '%252A',
  [ForbiddenChar.Backslash]: '%27C',
  [ForbiddenChar.QuestionMark]: '%253F',
  [ForbiddenChar.Slash]: '%252F'
};

export const sanitize = (text: string) =>
  text.replace(
    new RegExp(
      `(${Object.keys(forbiddenCharsMap)
        .map(key => `\\${key}`)
        .join('|')})`,
      'g'
    ),
    (match: string) => forbiddenCharsMap[match]
  );
