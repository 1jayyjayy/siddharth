// import { createFileRoute } from "@tanstack/react-router";
// import { GestureCanvas } from "@/components/GestureCanvas";
// import { Footer } from "@/components/Footer";
// import { useReveal } from "@/components/useReveal";
// import { site } from "@/data/site";

// export const Route = createFileRoute("/contact")({
//   head: () => ({
//     meta: [
//       { title: "Contact — Siddharth Biswas" },
//       { name: "description", content: "Direct contact and public channels — commissions, residencies, and collaborations." },
//       { property: "og:title", content: "Contact — Siddharth Biswas" },
//       { property: "og:description", content: "Direct contact and public channels." },
//     ],
//   }),
//   component: Contact,
// });

// function Contact() {
//   const root = useReveal();
//   const instruments = site.socials.filter((s) => s.kind === "instrument");
//   const channels = site.socials.filter((s) => s.kind === "channel");

//   return (
//     <div ref={root} className="min-h-screen section-dark grain-dark relative overflow-hidden">
//       <GestureCanvas tone="dark" density={0.5} className="absolute inset-0 h-full w-full opacity-70" />
//       <div className="relative z-[2] mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 pt-40 pb-24 md:px-10">
//         <div className="col-span-12 md:col-span-3 reveal">
//           <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
//             Coda
//           </p>
//           <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60">
//             Direct & minimal
//           </p>
//         </div>
//         <div className="col-span-12 md:col-span-9 reveal" data-reveal-delay="80">
//           <h1 className="font-display text-[clamp(2.8rem,10vw,8rem)] leading-[0.9] text-bone">
//             Write, or<br />
//             <span className="italic font-light">tune in.</span>
//           </h1>
//           <p className="mt-8 max-w-xl text-lg text-bone/75">
//             For commissions, residencies, PhD conversations, or just to send a
//             recording — email is the fastest way. The channels below are for
//             the public archive.
//           </p>
//           <a
//             href={`mailto:${site.email}`}
//             className="mt-10 inline-flex items-baseline gap-3 border-b border-copper pb-2 font-display text-2xl md:text-3xl text-bone hover:text-copper transition-colors"
//           >
//             {site.email}
//             <span className="font-mono text-xs uppercase tracking-[0.24em]">→</span>
//           </a>
//         </div>
//       </div>

//       <div className="relative z-[2] mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 pb-32 md:px-10">
//         <div className="col-span-12 md:col-span-6 reveal">
//           <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
//             Instruments — public output
//           </p>
//           <ul className="mt-6">
//             {instruments.map((s, i) => (
//               <li key={s.href} className="reveal" data-reveal-delay={String(i * 80)}>
//                 <a
//                   href={s.href}
//                   className="group flex items-baseline justify-between gap-4 border-t border-white/12 py-6 text-bone hover:text-copper transition-colors"
//                 >
//                   <span className="font-display text-2xl md:text-3xl">{s.label}</span>
//                   <span className="hidden md:inline font-mono text-[11px] uppercase tracking-[0.22em] opacity-60 group-hover:opacity-100">
//                     {s.value}
//                   </span>
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="col-span-12 md:col-span-5 md:col-start-8 reveal" data-reveal-delay="120">
//           <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
//             Channels — research & correspondence
//           </p>
//           <ul className="mt-6">
//             {channels.map((s, i) => (
//               <li key={s.href}>
//                 <a
//                   href={s.href}
//                   className="group flex items-baseline justify-between gap-4 border-t border-white/12 py-6 text-bone hover:text-copper transition-colors"
//                 >
//                   <span className="font-display text-xl">{s.label}</span>
//                   <span className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-60 group-hover:opacity-100">
//                     →
//                   </span>
//                 </a>
//               </li>
//             ))}
//           </ul>

//           <div className="mt-16 border border-white/12 p-6">
//             <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-copper">
//               Currently
//             </p>
//             <p className="mt-3 text-bone/85 leading-relaxed">
//               Based in {site.location}. Accepting a small number of
//               commissions and collaborations for the coming season.
//             </p>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Building,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Facebook,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { toast, Toaster } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
import emailjs from "@emailjs/browser";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    subject: typeof search.subject === "string" ? search.subject : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contact — Siddharth Biswas" },
      {
        name: "description",
        content:
          "Direct contact and public channels — commissions, residencies, and collaborations.",
      },
      { property: "og:title", content: "Contact — Siddharth Biswas" },
      { property: "og:description", content: "Direct contact and public channels." },
    ],
  }),
  component: Contact,
});

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact() {
  const search = Route.useSearch();

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (search.subject === "LessonInquiry") {
      setFormData((prev) => ({
        ...prev,
        subject: "Inquiry about Music Lessons",
      }));
    }
  }, [search.subject]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

// const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//   e.preventDefault();

//   if (isSubmitting) return;

//   const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
//   const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
//   const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

//   if (!serviceId || !templateId || !publicKey) {
//     toast.error("Email service is not configured.", {
//       description: "One or more EmailJS environment variables are missing.",
//     });
//     return;
//   }

//   setIsSubmitting(true);

//   try {
//     await emailjs.send(
//       serviceId,
//       templateId,
//       {
//         from_name: formData.name,
//         reply_to: formData.email,
//         subject: formData.subject,
//         message: formData.message,
//       },
//       {
//         publicKey,
//       },
//     );

//     toast.success("Message Sent Successfully!", {
//       description:
//         "Thank you for reaching out. I'll respond to your inquiry as soon as possible.",
//       duration: 6000,
//       className: "bg-accent text-accent-foreground border-accent",
//     });

//     setFormData({
//       name: "",
//       email: "",
//       subject: "",
//       message: "",
//     });
//   } catch (error: unknown) {
//     console.error("EmailJS error:", error);

//     const errorMessage =
//       typeof error === "object" &&
//       error !== null &&
//       "text" in error &&
//       typeof error.text === "string"
//         ? error.text
//         : "Please try again or contact me directly by email.";

//     toast.error("Message could not be sent.", {
//       description: errorMessage,
//       duration: 6000,
//     });
//   } finally {
//     setIsSubmitting(false);
//   }
// };
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (isSubmitting) return;

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  console.group("📧 EmailJS Debug");
  console.log("Service ID:", serviceId);
  console.log("Template ID:", templateId);
  console.log("Public Key:", publicKey);
  console.log("Form Data:", formData);

  if (!serviceId || !templateId || !publicKey) {
    console.error("❌ Missing environment variables");
    console.groupEnd();

    toast.error("Email service is not configured.", {
      description: "One or more EmailJS environment variables are missing.",
    });
    return;
  }

  setIsSubmitting(true);

  try {
    console.log("🚀 Sending email...");

    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      {
        publicKey,
      },
    );

    console.log("✅ EmailJS Success");
    console.log("Response:", response);
    console.groupEnd();

    toast.success("Message Sent Successfully!", {
      description:
        "Thank you for reaching out. I'll respond to your inquiry as soon as possible.",
      duration: 6000,
      className: "bg-accent text-accent-foreground border-accent",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error: any) {
    console.error("❌ EmailJS Error");
    console.error("Raw error:", error);
    console.error("Status:", error?.status);
    console.error("Text:", error?.text);
    console.error("Name:", error?.name);
    console.error("Message:", error?.message);

    try {
      console.error(
        "JSON:",
        JSON.stringify(error, Object.getOwnPropertyNames(error), 2)
      );
    } catch (_) {}

    console.groupEnd();

    toast.error("Message could not be sent.", {
      description:
        error?.text ??
        error?.message ??
        "Please try again or contact me directly by email.",
      duration: 6000,
    });
  } finally {
    setIsSubmitting(false);
  }
};
  const getSocialHref = (platform: string) =>
    site.socials.find((s) =>
      s.label.toLowerCase().includes(platform.toLowerCase()),
    )?.href ?? "#";

  const contactDetails = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email Address",
      text: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: <Building className="h-5 w-5 text-primary" />,
      title: "University Affiliation",
      text: "Music Department, University of Edinburgh",
      href: "#",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Based In",
      text: `${site.location} (Available for global online collaboration)`,
      href: "#",
    },
  ];

  const socialLinks = [
    {
      platform: "LinkedIn",
      icon: <Linkedin size={20} />,
      href: getSocialHref("LinkedIn"),
    },
    {
      platform: "Facebook",
      icon: <Facebook size={20} />,
      href: getSocialHref("Facebook"),
    },
    // {
    //   platform: "Twitter",
    //   icon: <Twitter size={20} />,
    //   href: getSocialHref("Twitter"),
    // },
    {
      platform: "WhatsApp",
      icon: <SiWhatsapp size={20} />,
      href: getSocialHref("Whatsapp"),
    },
    {
      platform: "Instagram",
      icon: <Instagram size={20} />,
      href: getSocialHref("Instagram"),
    },
    // {
    //   platform: "YouTube",
    //   icon: <Youtube size={20} />,
    //   href: getSocialHref("YouTube"),
    // },
  ];

  const inputMotionProps = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" },
  };

  return (
    <>
      <Toaster richColors position="bottom-right" />

      <div className="contact-page-legacy min-h-screen py-20 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "circOut" }}
            className="max-w-4xl mx-auto text-center mb-14 md:mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mb-5">
              <span className="gradient-text">Let&apos;s Connect</span>
            </h1>

            <p className="text-foreground/80 max-w-2xl mx-auto text-md lg:text-lg leading-relaxed">
              Whether you have questions about performances, compositions,
              lessons, or potential collaborations, I&apos;m always eager to
              hear from fellow music enthusiasts and professionals.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: "circOut" }}
                className="lg:col-span-5 space-y-8"
              >
                <div className="glass-card card-3d-hover p-6 md:p-8 rounded-xl">
                  <div className="card-3d-content">
                    <h2 className="text-2xl font-display font-semibold mb-6">
                      Direct Contact Information
                    </h2>

                    <div className="space-y-6">
                      {contactDetails.map((item, index) => (
                        <motion.a
                          key={item.title}
                          href={item.href}
                          className="flex items-start group"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.25 + index * 0.1,
                          }}
                        >
                          <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center mr-4 flex-shrink-0 border-2 border-primary/25 group-hover:bg-primary/20 transition-colors">
                            {item.icon}
                          </div>

                          <div>
                            <div className="font-medium text-md group-hover:text-primary transition-colors">
                              {item.title}
                            </div>
                            <div className="text-sm text-foreground/75">
                              {item.text}
                            </div>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="glass-card card-3d-hover p-6 md:p-8 rounded-xl">
                  <div className="card-3d-content">
                    <h2 className="text-2xl font-display font-semibold mb-5">
                      Follow My Journey
                    </h2>

                    <div className="flex flex-wrap gap-3">
                      {socialLinks.map((social) => (
                        <motion.a
                          key={social.platform}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm px-4 py-2.5 rounded-lg border border-border/60 hover:border-primary hover:bg-primary/10 hover:text-primary cursor-pointer transition-all duration-200 neumorphic-button"
                          whileHover={{ y: -2, scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          {social.icon}
                          <span className="ml-2">{social.platform}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: "circOut" }}
                className="lg:col-span-7"
              >
                <div className="glass-card card-3d-hover p-6 md:p-10 rounded-xl">
                  <div className="card-3d-content">
                    <h2 className="text-2xl md:text-3xl font-display font-bold mb-7">
                      Send a Message Directly
                    </h2>

                    <form onSubmit={handleSubmit} className="contact-form space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <motion.div {...inputMotionProps}>
                          <Label
                            htmlFor="name"
                            className="text-sm font-medium text-foreground/80"
                          >
                            Full Name
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g., Jane Doe"
                            required
                            className="mt-1.5"
                          />
                        </motion.div>

                        <motion.div
                          {...inputMotionProps}
                          transition={{
                            ...inputMotionProps.transition,
                            delay: 0.05,
                          }}
                        >
                          <Label
                            htmlFor="email"
                            className="text-sm font-medium text-foreground/80"
                          >
                            Email Address
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            required
                            className="mt-1.5"
                          />
                        </motion.div>
                      </div>

                      <motion.div
                        {...inputMotionProps}
                        transition={{
                          ...inputMotionProps.transition,
                          delay: 0.1,
                        }}
                      >
                        <Label
                          htmlFor="subject"
                          className="text-sm font-medium text-foreground/80"
                        >
                          Subject
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Regarding..."
                          required
                          className="mt-1.5"
                        />
                      </motion.div>

                      <motion.div
                        {...inputMotionProps}
                        transition={{
                          ...inputMotionProps.transition,
                          delay: 0.15,
                        }}
                      >
                        <Label
                          htmlFor="message"
                          className="text-sm font-medium text-foreground/80"
                        >
                          Your Message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Please type your detailed message here..."
                          rows={6}
                          required
                          className="mt-1.5"
                        />
                      </motion.div>

                      <motion.div
                        {...inputMotionProps}
                        transition={{
                          ...inputMotionProps.transition,
                          delay: 0.2,
                        }}
                      >
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-primary hover:bg-primary/85 text-primary-foreground neumorphic-button shadow-lg py-3.5 text-base"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center">
                              <motion.svg
                                className="animate-spin -ml-1 mr-2.5 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                />
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                              </motion.svg>
                              Submitting...
                            </span>
                          ) : (
                            <span className="flex items-center justify-center">
                              <Send className="mr-2.5 h-4 w-4" />
                              Send Your Message
                            </span>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "circOut" }}
            className="mt-20 md:mt-24 max-w-5xl mx-auto"
          >
            <div className="glass-card card-3d-hover p-6 md:p-8 rounded-xl overflow-hidden">
              <div className="card-3d-content">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-5 text-center">
                  Studio Location & Map
                </h2>

                <div className="h-80 md:h-96 rounded-lg overflow-hidden border border-border shadow-inner">
                  <img
                    className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 hover:contrast-100 transition-all duration-500"
                    alt="Stylized map showing studio location in Edinburgh"
                    src="https://images.unsplash.com/photo-1691696079389-aa2ce308092c"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
}