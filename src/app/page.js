"use client";
import * as React from "react";
import Footer from "@/components/Footer";
import HeroBg from "@/components/HeroBg";
import LetUs from "@/components/LetUs";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
export default function Home() {
  return (
    <main>
      <HeroBg />
      <Services />
      <LetUs />
      <Testimonials />
      <Footer />
    </main>
  );
}
