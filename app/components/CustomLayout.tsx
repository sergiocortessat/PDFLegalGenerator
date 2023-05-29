import Image from "next/image";
import Link from "next/link";

export default function customTheme({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <header className="bg-gray-100 py-4">
          <div className="container mx-auto flex justify-between items-center px-4">
            <div className="flex items-center">
              <Link href={'./'}>
              <Image
                className="h-8"
                src="/airbnb-logo.png"
                alt="Airbnb Logo"
                width={"50"}
                height={"50"}
                
              />
              </Link>
              <Link href={'./'}>
              <div className="ml-4 text-xl text-black font-semibold">Hostshare</div>
              </Link>
            </div>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Location"
                className="border border-gray-300 rounded-md py-2 px-4 mr-2 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Check-in"
                className="border border-gray-300 rounded-md py-2 px-4 mr-2 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Check-out"
                className="border border-gray-300 rounded-md py-2 px-4 mr-2 focus:outline-none"
              />
              <button className="bg-green-500 text-white py-2 px-4 rounded-md">
                Search
              </button>
            </div>
          </div>
        </header>
      {children}
    </>
  );
}
