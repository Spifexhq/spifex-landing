import Hero from "@/components/sections/Hero";
import FeatureGrid from "@/components/sections/FeatureGrid";
import Modules from "@/components/sections/Modules";
import Customers from "@/components/sections/Customers";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <Customers />
      <Modules />
      <CTA />
    </>
  );
}
