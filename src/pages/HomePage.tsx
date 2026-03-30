import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Globe, Monitor, GraduationCap, Users, Award, Star, CheckCircle, ArrowRight, Phone, MessageCircle, Home as HomeIcon, UserCheck, ShieldCheck, Heart } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

const typewriterWords = ["IGCSE/O level Tutors", "AS/A Level Tutors", "Online Tutors", "Matric Tutors"];

const services = [
  { icon: BookOpen, title: "IGCSE/O level Tutoring", desc: "Cambridge IGCSE/O level preparation with expert tutors for all subjects." },
  { icon: GraduationCap, title: "AS/A Level Tutoring", desc: "Top-tier AS/A Level coaching to secure your university admission." },
  { icon: Award, title: "Matric / FSc", desc: "Local board exam preparation with proven result-driven methods." },
  { icon: Monitor, title: "Online Tutoring", desc: "Learn from anywhere with our interactive online sessions." },
  { icon: Globe, title: "International Tutoring", desc: "Serving students in Dubai, UK, USA with tailored curricula." },
  { icon: Users, title: "All Subjects Covered", desc: "From Mathematics to English Literature — we cover it all." },
];

const steps = [
  { icon: BookOpen, title: "Submit Request", desc: "Tell us your requirements" },
  { icon: Users, title: "Get Matched", desc: "We find the perfect tutor" },
  { icon: Monitor, title: "Trial Class", desc: "Test before you commit" },
  { icon: CheckCircle, title: "Confirm Tutor", desc: "Approve and proceed" },
  { icon: Star, title: "Start Learning", desc: "Begin your journey" },
];

const features = [
  { icon: UserCheck, title: "Experienced Tutors", desc: "Qualified professionals with proven track records." },
  { icon: HomeIcon, title: "Home & Online", desc: "Choose the mode that works best for you." },
  { icon: Globe, title: "International Reach", desc: "Students across Pakistan, Dubai, UK & USA." },
  { icon: ShieldCheck, title: "All Boards Covered", desc: "Cambridge, Edexcel, Local Board & more." },
  { icon: Heart, title: "Female Tutors Available", desc: "Comfortable learning environment for everyone." },
  { icon: Award, title: "Result-Driven Teaching", desc: "98% of our students improve their grades." },
];

const testimonials = [
  { name: "Sarah K.", role: "AS/A Level Student", quote: "SNK Tutoring transformed my grades. I went from a C to an A* in just 6 months!", rating: 5 },
  { name: "Ahmed R.", role: "Parent", quote: "The best tutoring service in Lahore. Professional, reliable, and effective.", rating: 5 },
  { name: "Maria L.", role: "IGCSE/O level Student", quote: "My tutor explained complex concepts so clearly. Highly recommend!", rating: 5 },
  { name: "James W.", role: "Parent, UK", quote: "Finding quality Pakistani curriculum tutors in London was impossible until SNK.", rating: 5 },
];

const HomePage = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setWordIndex((i) => (i + 1) % typewriterWords.length), 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setCurrentSlide((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="min-h-screen gradient-navy relative overflow-hidden flex items-center">
        {/* Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-10"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                backgroundColor: "hsl(40 92% 47%)",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 4 + 4}s ease-in-out infinite ${Math.random() * 2}s`,
              }}
            />
          ))}
          {[...Array(6)].map((_, i) => (
            <div
              key={`shape-${i}`}
              className="absolute border border-white/5 rounded-lg"
              style={{
                width: `${60 + i * 30}px`, height: `${60 + i * 30}px`,
                top: `${15 + i * 12}%`, right: `${5 + i * 8}%`,
                transform: `rotate(${i * 15}deg)`,
                animation: `float ${5 + i}s ease-in-out infinite ${i * 0.7}s`,
              }}
            />
          ))}
        </div>

        <div className="container-main relative z-10 py-32">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6"
            >
              Find the Best Tutor{" "}
              <span className="text-gold-gradient">for Your Child</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 mb-4 max-w-2xl"
            >
              Expert home tutoring in Lahore, Dubai, UK & USA — IGCSE/O level, AS/A Level, Matric, FSc & Online
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <span className="text-white/50 text-lg">We provide </span>
              <span className="gold-text text-lg font-semibold border-r-2 border-gold pr-1" style={{ animation: "typewriter-blink 1s infinite" }}>
                {typewriterWords[wordIndex]}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a href="https://wa.me/923406506040" target="_blank" rel="noopener noreferrer" className="btn-gold animate-shine text-base">
                Hire a Tutor
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="gradient-navy py-16 border-t border-white/5">
        <div className="container-main grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { end: 5000, suffix: "+", label: "Students" },
            { end: 98, suffix: "%", label: "Success Rate" },
            { end: 500, suffix: "+", label: "Tutors" },
            { end: 10, suffix: "+", label: "Countries Served" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold gold-text font-heading">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              </div>
              <div className="text-white/60 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
                Our Tutoring <span className="gold-text">Services</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive tutoring solutions for students at every level</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 border border-border card-hover group">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="gold-text" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.desc}</p>
                  <Link to="/services" className="gold-text text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding" style={{ backgroundColor: "hsl(220 30% 97%)" }}>
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
                How It <span className="gold-text">Works</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Getting started is simple — just five easy steps</p>
            </div>
          </ScrollReveal>
          <div className="relative max-w-4xl mx-auto">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {steps.map((step, i) => (
                <ScrollReveal key={step.title} delay={i * 0.15}>
                  <div className="flex flex-col items-center text-center relative">
                    <div className="w-16 h-16 rounded-full gradient-navy flex items-center justify-center mb-3 relative z-10 border-4 border-background">
                      <step.icon className="gold-text" size={24} />
                    </div>
                    <div className="gold-text text-xs font-bold mb-1">Step {i + 1}</div>
                    <h4 className="font-semibold text-sm text-foreground">{step.title}</h4>
                    <p className="text-muted-foreground text-xs mt-1">{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
                Why Choose <span className="gold-text">SNK Tutoring?</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 border border-border card-hover text-center">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <f.icon className="gold-text" size={26} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding gradient-navy">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
                What Our <span className="gold-text">Students Say</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10"
            >
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} size={18} className="gold-text fill-current" style={{ color: "hsl(40 92% 47%)" }} />
                ))}
              </div>
              <p className="text-white/80 text-lg italic mb-6">"{testimonials[currentSlide].quote}"</p>
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-2">
                <span className="gold-text font-bold">{testimonials[currentSlide].name[0]}</span>
              </div>
              <p className="text-white font-semibold">{testimonials[currentSlide].name}</p>
              <p className="text-white/50 text-sm">{testimonials[currentSlide].role}</p>
            </motion.div>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentSlide ? "bg-accent w-6" : "bg-white/20"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(220 60% 10%), hsl(40 92% 30%))" }}>
        <div className="container-main relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Ready to Boost Your <span className="gold-text">Grades?</span>
            </h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">Get started today with Pakistan's most trusted tutoring service</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+923406506040" className="btn-gold flex items-center gap-2">
                <Phone size={18} /> Call Now: +92 340 6506040
              </a>
              <a href="https://wa.me/923406506040" target="_blank" rel="noopener noreferrer" className="btn-outline-light flex items-center gap-2">
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
