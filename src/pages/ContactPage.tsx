import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ScrollReveal";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

const contactCards = [
  { icon: Phone, title: "Phone", info: "03262100890", href: "tel:+923262100890", color: "gold-text" },
  { icon: MessageCircle, title: "WhatsApp", info: "03262100890", href: "https://wa.me/923262100890", color: "gold-text" },
  { icon: Mail, title: "Email", info: "info@snktutoring.com", href: "mailto:info@snktutoring.com", color: "gold-text" },
  { icon: MapPin, title: "Address", info: "Lahore, Pakistan", href: "#map", color: "gold-text" },
];

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", level: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate()) {
      toast.success("Message sent! We'll get back to you within 24 hours.");
      setForm({ name: "", email: "", phone: "", subject: "", level: "", message: "" });
      setErrors({});
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent ${errors[field] ? "border-destructive" : "border-border"}`;

  return (
    <div>
      <PageBanner title="Contact Us" breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]} />

      {/* Contact Cards */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactCards.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.1}>
                <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  className="bg-card rounded-xl p-6 border border-border card-hover text-center block">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <c.icon className={c.color} size={26} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{c.title}</h3>
                  <p className="text-muted-foreground text-sm">{c.info}</p>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-8">
                Send Us a <span className="gold-text">Message</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Name *</label>
                    <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className={inputClass("name")} placeholder="Your name" />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Email *</label>
                    <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className={inputClass("email")} placeholder="your@email.com" />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
                    <input value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} className={inputClass("phone")} placeholder="+92 3XX XXXXXXX" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Subject</label>
                    <input value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} className={inputClass("subject")} placeholder="e.g., Mathematics" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Grade / Level</label>
                  <select value={form.level} onChange={e => setForm(f => ({ ...f, level: e.target.value }))} className={inputClass("level")}>
                    <option value="">Select level</option>
                    {["IGCSE/O level", "AS/A Level", "Matric", "FSc", "Other"].map(l => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Message *</label>
                  <textarea rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} className={inputClass("message")} placeholder="How can we help?" />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="btn-gold w-full text-center animate-shine">Send Message</button>
              </form>
            </ScrollReveal>
          </div>

          {/* Map */}
          <div id="map" className="mt-16">
            <ScrollReveal>
              <div className="rounded-xl overflow-hidden border border-border h-80">
                <iframe
                  title="SNK Tutoring Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217898.10390604427!2d74.17955824999999!3d31.4826352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
