import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/config";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Testimonial from "@/components/sections/Testimonial";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="features" className="scroll-mt-20">
          <Features />
        </section>
        <section id="testimonials" className="scroll-mt-20">
          <Testimonial />
        </section>
        <section id="faqs" className="scroll-mt-20">
          <FAQ />
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
