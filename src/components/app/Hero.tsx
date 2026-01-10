import { useEffect, useState } from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";

import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { GithubIcon } from "../icons";

import testicode from "@/images/testicode.jpg";

export default function IndexPage() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [" Frontend Web Developer", " Automation Expert"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="w-full min-h-[calc(100vh-64px)] flex items-center py-10">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
              </span>
              <span className="text-sm font-medium">Available for work</span>
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hello, I'm
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                Testimony Everest
              </h1>
            </div>

            {/* Typewriter effect */}
            <div className="h-16 flex items-center justify-center lg:justify-start">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-default-700">
                I'm a(n)
                <span className="text-primary">
                  {text}
                  <span className="animate-pulse">|</span>
                </span>
              </h2>
            </div>

            {/* One-liner services */}
            <p className="text-lg md:text-xl text-default-600 max-w-2xl">
              Helping businesses get more customers by building websites that
              automatically captures and follow-up with leads
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button
                as={Link}
                className="font-semibold"
                color="primary"
                href="#contact"
                radius="full"
                size="lg"
                variant="shadow"
              >
                Get in Touch
              </Button>
              <Button
                as={Link}
                className="font-semibold"
                radius="full"
                size="lg"
                variant="bordered"
              >
                <a
                  href={siteConfig.links.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  View My Work
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-normal  gap-x-5">
              <Button isExternal isIconOnly as={Link}>
                <a
                  href={siteConfig.links.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <GithubIcon size={25} />
                </a>
              </Button>
              <Button isExternal isIconOnly as={Link}>
                <a
                  href="https://linkedin.com/in/testicode"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaLinkedin size={25} />
                </a>
              </Button>
              <Button
                isExternal
                isIconOnly
                as={Link}
                href={siteConfig.links.twitter}
              >
                <a
                  href={siteConfig.links.twitter}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaSquareXTwitter size={25} />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur-3xl opacity-20 animate-pulse" />
              <img
                alt="Testimony Everest"
                className="relative rounded-full w-72 h-72 md:w-96 md:h-96 object-cover border-4 border-primary/20 shadow-2xl"
                src={testicode}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
