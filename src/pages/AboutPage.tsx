import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ScrollReveal";
import { Target, Eye, Award, Heart, Globe, ShieldCheck, GraduationCap, Users } from "lucide-react";

const values = [
  { icon: Award, title: "Excellence", desc: "We strive for the highest standards in education." },
  { icon: Heart, title: "Trust", desc: "Building lasting relationships with families worldwide." },
  { icon: Target, title: "Personalized Learning", desc: "Every student gets a tailored learning plan." },
  { icon: Globe, title: "Global Reach", desc: "Serving students across Pakistan, UAE, UK & USA." },
];

const team = [
  { name: "Prof. Ahmad Khan", qual: "M.Phil Mathematics", subject: "O/A-Level Maths" },
  { name: "Ms. Fatima Ali", qual: "MSc Physics", subject: "Physics & Chemistry" },
  { name: "Mr. James Wilson", qual: "PGCE, Cambridge", subject: "English Literature" },
  { name: "Dr. Sarah Malik", qual: "PhD Education", subject: "Biology & Sciences" },
];

const AboutPage = () => (
  <div>
    <PageBanner title="About SNK Tutoring" breadcrumbs={[{ label: "Home", to: "/" }, { label: "About" }]} />

    {/* Our Story */}
    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Our <span className="gold-text">Story</span>
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                SNK Tutoring was founded with a simple mission: to make quality education accessible to every student, regardless of location. What started as a small tutoring service in Lahore has grown into an international network serving students across Pakistan, Dubai, UK, and USA.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With over 500 qualified tutors and 5,000+ success stories, we've built a reputation for excellence, trust, and results. Our personalized approach ensures every student receives the attention they deserve.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="gradient-navy rounded-2xl p-8 text-center">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Target className="gold-text" size={24} />
                    <h3 className="text-xl font-heading font-bold text-white">Our Mission</h3>
                  </div>
                  <p className="text-white/60 text-sm">To empower students worldwide with personalized, result-driven education that unlocks their full potential.</p>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Eye className="gold-text" size={24} />
                    <h3 className="text-xl font-heading font-bold text-white">Our Vision</h3>
                  </div>
                  <p className="text-white/60 text-sm">To be the world's most trusted tutoring network, bridging educational gaps across borders.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding" style={{ backgroundColor: "hsl(220 30% 97%)" }}>
      <div className="container-main">
        <ScrollReveal>
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            Our <span className="gold-text">Values</span>
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-6 border border-border card-hover text-center">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="gold-text" size={26} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section-padding bg-background">
      <div className="container-main">
        <ScrollReveal>
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            Meet Our <span className="gold-text">Tutors</span>
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="bg-card rounded-xl border border-border card-hover overflow-hidden">
                <div className="gradient-navy h-32 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                    <GraduationCap className="gold-text" size={36} />
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-semibold text-foreground">{t.name}</h3>
                  <p className="text-muted-foreground text-sm">{t.qual}</p>
                  <p className="gold-text text-sm font-medium mt-1">{t.subject}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Why Different */}
    <section className="section-padding gradient-navy">
      <div className="container-main">
        <ScrollReveal>
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">
            Why We're <span className="gold-text">Different</span>
          </h2>
        </ScrollReveal>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            "Rigorous tutor screening with background checks",
            "Personalized matching based on student needs",
            "Regular progress reports and parent communication",
            "Flexible scheduling — 7 days a week",
            "No long-term contracts required",
            "Satisfaction guaranteed or free tutor replacement",
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="flex items-center gap-4 bg-white/5 rounded-lg p-4 border border-white/10">
                <ShieldCheck className="gold-text flex-shrink-0" size={20} />
                <span className="text-white/80">{item}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
