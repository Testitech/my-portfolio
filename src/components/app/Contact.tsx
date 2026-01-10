import { useState } from "react";
import { Card, CardBody } from "@heroui/card";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: <FaEnvelope className="text-xl" />,
    label: "Email",
    value: "everesttestimony48@gmail.com",
  },
  {
    icon: <FaPhone className="text-xl" />,
    label: "Phone",
    value: "Available upon request",
  },
  {
    icon: <FaMapMarkerAlt className="text-xl" />,
    label: "Location",
    value: "Lagos, Nigeria",
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={20} />,
    url: "https://linkedin.com/in/yourusername",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={20} />,
    url: "https://github.com/yourusername",
  },
  {
    name: "Behance",
    icon: <FaSquareXTwitter size={20} />,
    url: "https://behance.net/yourusername",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format message for WhatsApp
    const whatsappMessage = `Hello! 👋

*Name:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}

*Message:*
${formData.message}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Your WhatsApp number (without + and spaces)
    const whatsappNumber = "2348155623703";

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, "_blank");

    // Reset form
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section
      className="w-full py-20 bg-gradient-to-b from-primary/5 via-blue-50/30 to-transparent"
      id="contact"
    >
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-default-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Details Card */}
            <Card className="bg-default-50">
              <CardBody className="p-6 space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-blue-400/20 text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-default-900 mb-1">
                        {info.label}
                      </h4>
                      <p className="text-sm text-default-600">{info.value}</p>
                    </div>
                  </div>
                ))}

                {/* Social Links */}
                <div className="pt-4 border-t border-default-200">
                  <h4 className="font-semibold text-default-900 mb-4">
                    Professional Profiles
                  </h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <Button
                        key={social.name}
                        isExternal
                        isIconOnly
                        as={Link}
                        className="flex-1"
                        color="primary"
                        href={social.url}
                        variant="flat"
                      >
                        {social.icon}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-default-50">
              <CardBody className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      isRequired
                      label="Name"
                      name="name"
                      placeholder="Your name"
                      size="lg"
                      type="text"
                      value={formData.name}
                      variant="bordered"
                      onChange={handleChange}
                    />
                    <Input
                      isRequired
                      label="Email"
                      name="email"
                      placeholder="Your email"
                      size="lg"
                      type="email"
                      value={formData.email}
                      variant="bordered"
                      onChange={handleChange}
                    />
                  </div>

                  {/* Subject */}
                  <Input
                    isRequired
                    label="Subject"
                    name="subject"
                    placeholder="Subject of your message"
                    size="lg"
                    type="text"
                    value={formData.subject}
                    variant="bordered"
                    onChange={handleChange}
                  />

                  {/* Message */}
                  <Textarea
                    isRequired
                    label="Message"
                    minRows={6}
                    name="message"
                    placeholder="Your message"
                    size="lg"
                    value={formData.message}
                    variant="bordered"
                    onChange={handleChange}
                  />

                  {/* Submit Button */}
                  <Button
                    className="w-full font-semibold text-lg"
                    color="primary"
                    endContent={<FaPaperPlane />}
                    isLoading={isSubmitting}
                    size="lg"
                    type="submit"
                    variant="shadow"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-sm text-default-500 text-center">
                    This will open WhatsApp with your message pre-filled 💬
                  </p>
                </form>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
