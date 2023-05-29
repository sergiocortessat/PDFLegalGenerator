import React, { useState } from 'react';
import { generatePDF } from '../../api/download'; // Import the generatePDF function specifically

const InputForm: React.FC = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('name', name);
    console.log('lastname', lastName);
    console.log('email', email);
    console.log('phone', phone);

    try {
      const pdfBytes = await generatePDF(name, lastName);
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'converted.pdf';
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
      // Handle the error as needed
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-2">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="text-gray-700 bg-white border border-gray-300 rounded"
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
        className="text-gray-700 bg-white border border-gray-300 rounded"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="text-gray-700 bg-white border border-gray-300 rounded"
      />
      <input
        type="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        className="text-gray-700 bg-white border border-gray-300 rounded"
      />
      <button className="text-gray-700 bg-white border border-gray-300 rounded" type="submit">
        Generate PDF
      </button>
    </form>
  );
};

export default InputForm;
