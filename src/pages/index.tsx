import DefaultLayout from "@/layouts/default";
import Hero from "@/components/app/Hero";
import Projects from "@/components/app/Projects";
import Stack from "@/components/app/Stack";
import Testimonials from "@/components/app/Testimonials";
import Contact from "@/components/app/Contact";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Hero />
      <Projects />
      <Stack />
      <Testimonials />
      <Contact/>
    </DefaultLayout>
  );
}
