export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
export const isComma = (str: string) => str.includes(',');
export const isDot = (str: string) => str.includes('.');
export const isString = (str: string) => typeof str === 'string';
export const isCommaOrDot = (str: string) => str.includes(',') || str.includes('.');
export const splitWordWithDotOrCommas = (str: string) => {
  const word = isComma(str) ? str.split(',') : str.split('.');

  const parsedWord = word.map((w, i) => {
    const last = word.length - 1;
    if (i === last) {
      return (word[i] = isComma(str) ? ',' : '.');
    }
    return w;
  });
  return parsedWord;
};

export const createSpan = (word: string, className: string) => {
  const splittedWord = isCommaOrDot(word) && splitWordWithDotOrCommas(word);

  if (splittedWord && isComma(splittedWord[1])) {
    return `<span class="text-${className}">${capitalize(splittedWord[0])}</span>,`;
  }

  if (splittedWord && isDot(splittedWord[1])) {
    return `<span class="text-${className}">${capitalize(splittedWord[0])}</span>.`;
  }

  return `<span class="text-${className}">${capitalize(word)}</span>`;
};
