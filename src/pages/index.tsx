import DefaultLayout from "@/layouts/default";
import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import Stack from "@/app/components/Stack";
import Testimonials from "@/app/components/Testimonials";
import Contact from "@/app/components/Contact";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Hero />
      <Projects />
      <Stack />
      <Testimonials />
      <Contact />
    </DefaultLayout>
  );
}
