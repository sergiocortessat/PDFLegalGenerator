"use client"
import React, { useState } from "react";
import Image from "next/image";
import PDFImage from "../../assets/PDF.jpeg";
import Layout from "../layout";
import CustomLayout from "../components/CustomLayout";
import InputForm from "../components/UI/InputForm";

const Page = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('name', name);
    console.log('lastname', lastName);
    console.log('email', email);
    console.log('phone', phone);
    // Logic to modify the preset with name and last name
    // Generate and save the PDF document
  };
  return (
    <Layout>
      <CustomLayout>
        <div className="container mx-auto mt-8 flex flex-col items-center">
          <h1 className="text-3xl font-semibold mb-4">
            Fill the data to generate your PDF
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-md shadow-md overflow-hidden">
              <Image
                key={"1"}
                src={PDFImage}
                alt={"n"}
                className="w-full h-48 object-cover"
                width={50}
                height={50}
              />

              <InputForm />
            </div>
          </div>
        </div>
      </CustomLayout>
    </Layout>
  );
};

export default Page;
