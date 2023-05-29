import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PDFImage from '../../../assets/PDF.jpeg'

function Card() {
    return (
    <div className="container mx-auto mt-8 flex items-center flex-col">
    <h1 className="text-3xl font-semibold mb-4">Please click below to generate PDF</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          className="bg-white rounded-md shadow-md overflow-hidden"
        >
          <Image
            key={"1"}
            src={PDFImage}
            alt={"n"}
            className="w-full h-48 object-cover"
            width={50}
            height={50}
          />

          <div className="p-4">
            <Link className="text-lg text-black font-semibold mb-2" href={"/PDFGenerate"}>Generate PDF</Link>
            {/* Add other properties based on your JSON structure */}
          </div>
        </div>
    </div>
  </div>
    )
}

export default Card