import { NextApiRequest, NextApiResponse } from 'next';
import { PDFDocument, rgb, StandardFonts, PDFPage } from 'pdf-lib';

export async function generatePDF(name: string, lastName: string): Promise<Uint8Array> {
  // Fetch the existing PDF file
  const response = await fetch('https://pdf-lib.js.org/assets/with_update_sections.pdf'); // Assuming the preset PDF is in the public/assets folder
  const existingPdfBytes = await response.arrayBuffer();

  // Load the existing PDF document
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  // Modify the PDF document
  const [page] = pdfDoc.getPages() as PDFPage[];
  const { width, height } = page.getSize();

  page.drawText(`Name: ${name}`, {
    x: 50,
    y: height - 50,
    size: 12,
    font: await pdfDoc.embedFont(StandardFonts.Helvetica),
    color: rgb(0, 0, 0),
  });

  page.drawText(`Last Name: ${lastName}`, {
    x: 50,
    y: height - 70,
    size: 12,
    font: await pdfDoc.embedFont(StandardFonts.Helvetica),
    color: rgb(0, 0, 0),
  });

  // Save the modified PDF document
  const modifiedPdfBytes = await pdfDoc.save();

  return modifiedPdfBytes;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { name, lastName } = req.body;

    if (!name || !lastName) {
      res.status(400).json({ error: 'Name and last name are required' });
      return;
    }

    const modifiedPdfBytes = await generatePDF(name, lastName);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="converted.pdf"');
    res.send(modifiedPdfBytes);
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).send('An error occurred while generating the PDF.');
  }
}
