import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { JSX } from "react";
import Image from "next/image";

export default function Home(): JSX.Element {

  return (
    <div>
      <Header />
      {/* Hero */}
      <div className="mb-20 px-5 md:px-0">
        <div className="h-[250px] md:h-[600px] rounded-md relative">
          <Image
            src={"/images/hero.jpg"}
            alt="Hero image"
            className="rounded-md"
            sizes="100vh"
            fill
          />
          <div className="absolute -bottom-8 bg-background p-6 ml-10 rounded-lg shadow-lg max-w-[80%] md:max-w-[40%]">
            <p className="text-xs bg-blue-700 w-fit py-1 px-2 text-white rounded-md mb-1">
              Technology
            </p>
            <h2 className="text-base md:text-3xl font-bold">
              The Impact of Technology on the Workplace: How Technology is Changing
            </h2>
            <p className="text-sm mt-4">Jason Francis | August 1, 2025</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
