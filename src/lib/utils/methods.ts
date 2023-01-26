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
      pdf.deletePage(lastPage);
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
