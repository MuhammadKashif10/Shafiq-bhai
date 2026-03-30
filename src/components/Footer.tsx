import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="gradient-navy text-white">
    <div className="container-main py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-heading font-bold gold-text mb-3">SNK Tutoring</h3>
          <p className="text-white/60 text-sm leading-relaxed">Excellence in Every Lesson — Worldwide</p>
          <div className="flex gap-4 mt-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-colors text-sm">f</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-colors text-sm">in</a>
            <a href="https://wa.me/923262100890" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-colors text-sm">wa</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/60">
            {[["Home","/"],["About","/about"],["Services","/services"],["Contact","/contact"]].map(([l,h])=>(
              <li key={h}><Link to={h} className="hover:text-white transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-white/60">
            {["IGCSE/O level Tutoring","AS/A Level Tutoring","Matric / FSc","Online Tutoring","International Tutoring"].map(s=>(
              <li key={s}><Link to="/services" className="hover:text-white transition-colors">{s}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-center gap-2"><Phone size={14} /><a href="tel:+923262100890" className="hover:text-white transition-colors">03262100890</a></li>
            <li className="flex items-center gap-2"><Mail size={14} /><a href="mailto:info@snktutoring.com" className="hover:text-white transition-colors">info@snktutoring.com</a></li>
            <li className="flex items-start gap-2"><MapPin size={14} className="mt-0.5" /><span>Lahore, Pakistan</span></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-white/10">
      <div className="container-main py-5 text-center text-sm text-white/40">
        © 2025 SNK Tutoring. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
