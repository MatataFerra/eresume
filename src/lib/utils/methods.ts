import { jsPDF } from 'jspdf';
import { goto } from '$app/navigation';
import { BAN_KEYWORDS, type BRANDS_NAMES } from './constants';
import { createSpan } from '.';

export function outsideClick(
  node: HTMLElement,
  [value, callback]: [boolean, (bool: boolean) => void]
) {
  const handleClick = (event: MouseEvent) => {
    if (node && !node.contains(event.target as Node)) {
      callback(value);
    }
  };

  document.addEventListener('click', handleClick);

  return {
    destroy() {
      document.removeEventListener('click', handleClick);
    }
  };
}

export const generateNumbers = (limit: number) => {
  const numbers = [];
  for (let i = 0; i < limit; i++) {
    numbers.push(i);
  }
  return numbers;
};

export const generatePdf = (element: HTMLElement | null) => {
  if (!element) return;

  const pdf = new jsPDF('p', 'pt', 'a4');

  pdf.html(element, {
    callback: (pdf) => {
      const lastPage = pdf.getNumberOfPages();
      if (lastPage > 3) pdf.deletePage(lastPage);

      pdf.output('dataurlnewwindow');
    },
    margin: [2, 2, 2, 2],
    width: 2480,
    x: 0,
    y: 0,
    html2canvas: {
      scale: 1,
      letterRendering: true,
      useCORS: true,
      allowTaint: true,
      logging: true,
      scrollX: 0,
      scrollY: 0,
      windowWidth: 2480,
      windowHeight: 3508
    }
  });
};

export const downloadFile = (fileName = 'pdf_matias-ferraro.pdf') => {
  const link = document.createElement('a');
  link.href = `/pdf/${fileName}`;
  link.download = fileName;
  link.click();
};

export const navigateTo = (url: string) => {
  goto(url);
};

// detect key words in a string and return a new string with the key words wrapped in a span
export const highlightKeyWords = (text: string, keyWords: typeof BRANDS_NAMES) => {
  const words = text.split(' ');
  const newWords = words.map((word) => {
    const findedKeyword: string | undefined = keyWords.find((keyword) =>
      word.toLowerCase().startsWith(keyword)
    );
    const isBannedWord = BAN_KEYWORDS.some((banKeyword) => banKeyword === word.toLowerCase());

    if (isBannedWord) return word;

    if (findedKeyword) {
      return createSpan(word, findedKeyword);
    }
    return word;
  });
  return newWords.join(' ');
};

export const parseStringIntoHTML = (str: string) => {
  // runs only on the client
  if (typeof window === 'undefined') return;

  const container = document.createElement('p');
  container.classList.add('text-white', 'font-fira');
  container.innerHTML = str;
  return container;
};
