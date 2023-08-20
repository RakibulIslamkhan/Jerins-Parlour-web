"use client";
import * as React from "react";
import Footer from "@/components/Footer";
import HeroBg from "@/components/HeroBg";
import LetUs from "@/components/LetUs";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import From from "@/components/From";
export default function Home() {
  return (
    <main>
      <HeroBg />
      <Services />
      <LetUs />
      <Testimonials />
      <From/>
      <Footer />
    </main>
  );
}
