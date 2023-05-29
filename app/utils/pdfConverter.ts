import handler from '../api/download'
async function modifyPdf() {
  try {
    const response = await fetch('../api/download.ts');
    if (!response.ok) {
      throw new Error('Failed to fetch PDF file');
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'pdf-lib_creation_example.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
}

export default modifyPdf;
