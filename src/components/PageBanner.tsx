import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface PageBannerProps {
  title: string;
  breadcrumbs?: { label: string; to?: string }[];
}

const PageBanner = ({ title, breadcrumbs }: PageBannerProps) => (
  <section className="page-banner">
    <div className="absolute inset-0 opacity-10">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-white/20"
          style={{
            width: `${60 + i * 40}px`, height: `${60 + i * 40}px`,
            top: `${10 + i * 15}%`, left: `${10 + i * 18}%`,
            animation: `float ${4 + i}s ease-in-out infinite ${i * 0.5}s`,
          }}
        />
      ))}
    </div>
    <div className="container-main relative z-10 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-heading font-bold mb-4"
      >
        {title}
      </motion.h1>
      {breadcrumbs && (
        <div className="flex items-center justify-center gap-2 text-sm text-white/60">
          {breadcrumbs.map((bc, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
              {bc.to ? (
                <Link to={bc.to} className="hover:text-white transition-colors">{bc.label}</Link>
              ) : (
                <span className="gold-text">{bc.label}</span>
              )}
            </span>
          ))}
        </div>
      )}
    </div>
  </section>
);

export default PageBanner;
