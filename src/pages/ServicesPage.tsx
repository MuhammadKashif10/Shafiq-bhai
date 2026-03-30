import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ScrollReveal";
import { BookOpen, GraduationCap, Award, Monitor, Globe, Users } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  { icon: BookOpen, title: "O-Level Tutoring", desc: "Expert Cambridge O-Level preparation across all subjects. Our tutors are experienced with the Cambridge International curriculum and help students achieve top grades.", subjects: "Mathematics, Physics, Chemistry, Biology, English, Computer Science, Economics, Accounting" },
  { icon: GraduationCap, title: "A-Level Tutoring", desc: "Advanced-level coaching for university-bound students. We cover all major A-Level subjects with focus on exam technique and conceptual clarity.", subjects: "Mathematics, Further Maths, Physics, Chemistry, Biology, Economics, Business Studies, Psychology" },
  { icon: Award, title: "Matric / FSc (Local Board)", desc: "Comprehensive preparation for Punjab Board, Federal Board, and Sindh Board examinations. Our tutors know the exact exam patterns and marking schemes.", subjects: "All Science & Arts subjects for 9th, 10th, 11th, 12th classes" },
  { icon: Monitor, title: "Online Tutoring", desc: "Interactive live sessions via Zoom/Google Meet with screen sharing, digital whiteboard, and recorded sessions for revision. Learn from anywhere in the world.", subjects: "All subjects available online — same quality as in-person tutoring" },
  { icon: Globe, title: "International Tutoring", desc: "Specialized tutoring for Pakistani diaspora in Dubai, UK, and USA. We understand the unique challenges of studying abroad and provide curriculum-aligned support.", subjects: "IGCSE, GCSE, SAT, ACT, AP courses, IB curriculum" },
  { icon: Users, title: "All Subjects Covered", desc: "Whatever your child needs, we have a tutor for it. From STEM subjects to languages and humanities, our diverse pool of tutors ensures complete academic support.", subjects: "Maths, Sciences, English, Urdu, Islamiat, Pakistan Studies, Computer Science & more" },
];

const faqs = [
  { q: "How do you select your tutors?", a: "All tutors go through a rigorous screening process including qualification verification, background checks, demo classes, and ongoing performance reviews." },
  { q: "What is the average class duration?", a: "Standard sessions are 1.5 to 2 hours. However, we can customize session length based on the student's needs and attention span." },
  { q: "Do you offer group tutoring?", a: "Yes! We offer both one-on-one and small group sessions (2-4 students) at discounted rates. Group sessions are great for study partners." },
  { q: "What if I'm not satisfied with my tutor?", a: "We offer free tutor replacement within the first week. Your satisfaction is our top priority." },
  { q: "How are online classes conducted?", a: "Online classes are conducted via Zoom or Google Meet with screen sharing, digital whiteboards, and interactive tools. Sessions can be recorded for later review." },
];

const ServicesPage = () => (
  <div>
    <PageBanner title="Our Services" breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }]} />

    {/* Service Cards */}
    <section className="section-padding bg-background">
      <div className="container-main">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
              Comprehensive <span className="gold-text">Tutoring Solutions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We offer a wide range of tutoring services tailored to meet every student's academic needs.</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-6 border border-border card-hover h-full flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <s.icon className="gold-text" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-3 flex-grow">{s.desc}</p>
                <p className="text-xs text-muted-foreground mb-4"><span className="font-semibold">Subjects:</span> {s.subjects}</p>
                <a href="https://wa.me/923406506040" target="_blank" rel="noopener noreferrer" className="btn-gold text-center text-sm py-2">
                  Get Started
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* International */}
    <section className="section-padding gradient-navy">
      <div className="container-main text-center">
        <ScrollReveal>
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            International <span className="gold-text">Reach</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-10">We proudly serve students across the globe with localized support.</p>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { flag: "🇵🇰", country: "Pakistan", city: "Lahore & more" },
            { flag: "🇦🇪", country: "UAE", city: "Dubai & Abu Dhabi" },
            { flag: "🇬🇧", country: "United Kingdom", city: "London & more" },
            { flag: "🇺🇸", country: "USA", city: "Nationwide" },
          ].map((c, i) => (
            <ScrollReveal key={c.country} delay={i * 0.1}>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 card-hover">
                <div className="text-4xl mb-3">{c.flag}</div>
                <h3 className="text-white font-semibold">{c.country}</h3>
                <p className="text-white/50 text-sm">{c.city}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ Accordion */}
    <section className="section-padding bg-background">
      <div className="container-main max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-10">
            Frequently Asked <span className="gold-text">Questions</span>
          </h2>
        </ScrollReveal>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg border border-border px-4">
              <AccordionTrigger className="text-foreground font-medium text-left">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </div>
);

export default ServicesPage;
