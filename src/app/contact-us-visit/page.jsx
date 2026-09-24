import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import heroImage from "@/assets/images/volkswagen_golf_r_blue_used_car.webp";

export const metadata = {
  title: "Contact Us / Visit | East Midland Cars Limited",
  description:
    "Get in touch with East Midland Cars Limited or visit our Leicester showroom at Unit 38 Oswin Road, LE3 1HR. Call, email, or send us a message.",
};

const CONTACT_CARDS = [
  {
    icon: "call",
    title: "Call The Showroom",
    lines: ["0116 289 8888", "07475 248063"],
    href: "tel:01162898888",
    cta: "Call Now",
  },
  {
    icon: "mail",
    title: "Email Our Team",
    lines: ["sales@eastmidlandcars.co.uk"],
    href: "mailto:sales@eastmidlandcars.co.uk",
    cta: "Send Email",
  },
  {
    icon: "location_on",
    title: "Visit The Showroom",
    lines: ["Unit 38 Oswin Road", "Leicester, LE3 1HR"],
    href: "https://www.google.com/maps/search/?api=1&query=Unit+38+Oswin+Road+Leicester+LE3+1HR",
    cta: "Get Directions",
  },
];

const OPENING_HOURS = [
  { day: "Monday - Saturday", time: "09:00 - 18:00" },
  { day: "Sunday", time: "10:00 - 17:00" },
  { day: "Bank Holidays", time: "By Appointment" },
];

export default function ContactUsVisitPage() {
  return (
    <>
      <Header />
      <main className="w-full pt-[80px] bg-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          {/* Hero */}
          <section className="relative w-full bg-primary-container text-inverse-on-surface overflow-hidden py-space-2xl">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                <div className="lg:col-span-7 space-y-space-md">
                  <div className="inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm uppercase tracking-wider shadow-sm">
                    <span className="material-symbols-outlined text-[16px]">place</span>
                    <span>Leicester Showroom, Unit 38 Oswin Road</span>
                  </div>
                  <h1 className="font-display-hero text-headline-xl lg:text-display-hero text-on-primary">
                    Contact Us &amp; Visit Our Showroom
                  </h1>
                  <p className="font-body-lg text-body-lg text-inverse-on-surface/85 max-w-xl">
                    Whether you&apos;d like to book a viewing, discuss finance, or simply ask a
                    question, our Leicester team is on hand six days a week to help.
                  </p>
                  <div className="pt-space-sm flex flex-wrap items-center gap-space-md">
                    <a href="tel:01162898888" className="inline-flex items-center gap-space-xs px-6 py-3.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-on-secondary-container transition-all shadow-md">
                      <span className="material-symbols-outlined text-[18px]">call</span>
                      <span>Call 0116 289 8888</span>
                    </a>
                    <a href="#contact-form" className="inline-flex items-center gap-space-xs px-6 py-3.5 rounded-lg bg-surface-container-high/15 hover:bg-surface-container-high/25 text-on-primary font-label-md text-label-md transition-all">
                      <span className="material-symbols-outlined text-[18px]">edit_note</span>
                      <span>Send a Message</span>
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl h-72 lg:h-80 w-full">
                    <Image
                      src={heroImage}
                      alt="Blue Volkswagen Golf R hatchback in the East Midland Cars Leicester showroom"
                      fill
                      priority
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact cards */}
          <section className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop py-space-2xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
              {CONTACT_CARDS.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col gap-space-sm"
                >
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[26px]">{card.icon}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">{card.title}</h3>
                  <div className="font-body-md text-body-md text-on-surface-variant">
                    {card.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                  <span className="mt-space-xs inline-flex items-center gap-1 text-secondary font-label-sm text-label-sm">
                    {card.cta}
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* Form + map/hours */}
          <section className="w-full bg-surface-container-low py-space-2xl" id="contact-form">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
              <div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl p-space-lg lg:p-space-xl shadow-sm">
                <div className="mb-space-lg">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Get In Touch</span>
                  <h2 className="font-headline-xl text-headline-xl text-on-surface mt-1">Send Us a Message</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                    Fill in the form below and a member of our team will get back to you, usually
                    within one working hour during showroom opening times.
                  </p>
                </div>
                <ContactForm />
              </div>

              <div className="lg:col-span-5 space-y-space-lg">
                <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-md flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[22px]">schedule</span>
                    Opening Hours
                  </h3>
                  <div className="space-y-2 font-body-sm text-body-sm">
                    {OPENING_HOURS.map((row) => (
                      <div key={row.day} className="flex justify-between py-1.5 px-2.5 rounded bg-surface-container-low">
                        <span className="text-on-surface font-semibold">{row.day}</span>
                        <span className="text-on-surface-variant">{row.time}</span>
                      </div>
                    ))}
                  </div>
                  <p className="font-legal-fineprint text-legal-fineprint text-on-surface-variant pt-space-sm">
                    Appointments outside normal showroom hours available on request.
                  </p>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-sm bg-surface-container-lowest">
                  <iframe
                    title="East Midland Cars Limited showroom location, Unit 38 Oswin Road, Leicester LE3 1HR"
                    src="https://www.google.com/maps?q=Unit+38+Oswin+Road,+Leicester,+LE3+1HR&output=embed"
                    className="w-full h-64 border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="p-space-md flex items-center justify-between gap-space-sm">
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Unit 38 Oswin Road, Leicester, LE3 1HR
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Unit+38+Oswin+Road+Leicester+LE3+1HR"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-secondary text-on-secondary font-label-sm text-label-sm hover:bg-secondary-container hover:text-on-secondary-container transition-all"
                    >
                      Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop py-space-2xl w-full">
            <div className="bg-inverse-surface rounded-xl p-space-xl text-on-primary shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
                <div className="lg:col-span-8 space-y-space-sm">
                  <div className="inline-flex items-center gap-space-xs text-secondary-container font-label-sm text-label-sm uppercase font-semibold">
                    <span className="material-symbols-outlined text-[18px]">directions_car</span>
                    <span>Prefer To Browse First?</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg font-bold">See What&apos;s Currently In Stock</h2>
                  <p className="font-body-md text-body-md text-primary-fixed-dim max-w-2xl">
                    Have a look through our handpicked range before you get in touch, or drop by the
                    Leicester showroom for a no-pressure look around in person.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm justify-end">
                  <a
                    href="https://www.autotrader.co.uk/dealers/leicestershire/leicester/east-midland-cars-limited-10034803"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center gap-space-xs px-6 py-3.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-md"
                  >
                    <span className="material-symbols-outlined text-[18px]">directions_car</span>
                    <span>Browse Available Stock</span>
                  </a>
                  <a href="tel:01162898888" className="inline-flex items-center justify-center gap-space-xs px-6 py-3.5 rounded-lg bg-surface-container-high/15 hover:bg-surface-container-high/25 text-on-primary font-label-md text-label-md transition-all">
                    <span className="material-symbols-outlined text-[18px]">phone_enabled</span>
                    <span>Call The Team</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
