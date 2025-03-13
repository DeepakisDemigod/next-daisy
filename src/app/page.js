import FAQs from "@/components/FAQs";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

export default function page() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <Pricing />
        <Testimonials />
        <FAQs />
      </main>
    </div>
  );
}
