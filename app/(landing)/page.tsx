import { Features } from "./_components/DiverseFeatures/Features";
import { Footer } from "./_components/Footer/Footer";
import { FuturePlans } from "./_components/FuturePlans/FuturePlans";
import { Hero } from "./_components/Hero/Hero";
import { Nav } from "./_components/Navbar/Nav";
import React from "react";

const page = () => {
  return (
    <main className="bg-black">
      <Nav />
      <Hero />
      <Features />
      <FuturePlans />
      <Footer />
    </main>
  );
};

export default page;
