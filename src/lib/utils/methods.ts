import { jsPDF } from 'jspdf';

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

export const generateNumbers = () => {
  const numbers = [];
  for (let i = 0; i < 200; i++) {
    numbers.push(i);
  }
  return numbers;
};

export const generatePdf = (element: HTMLElement | null) => {
  if (!element) return;

  console.log('🚀 ~ file: methods.ts:31 ~ generatePdf ~ element', element);

  const pdf = new jsPDF('p', 'pt', 'a4');

  pdf.html(element, {
    callback: (pdf) => {
      pdf.save('test.pdf');
    },
    margin: [2, 2, 2, 2],
    width: 1912,
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
      windowWidth: 1912,
      windowHeight: 768
    }
  });
};
