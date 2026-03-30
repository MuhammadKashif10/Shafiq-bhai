import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ScrollReveal";
import { Search, Calendar, Tag } from "lucide-react";

const categories = ["All", "IGCSE/O level", "AS/A Level", "Study Tips", "News"];

const posts = [
  { id: 1, title: "Top 10 Tips to Ace Your IGCSE/O level Exams", excerpt: "Discover proven strategies that top IGCSE/O level students use to score A* grades consistently.", category: "IGCSE/O level", date: "Jan 15, 2025" },
  { id: 2, title: "AS/A Level vs IGCSE/O level: Key Differences Explained", excerpt: "Understanding the academic leap from IGCSE/O level to AS/A Level and how to prepare for it.", category: "AS/A Level", date: "Jan 10, 2025" },
  { id: 3, title: "How Online Tutoring is Changing Education", excerpt: "The rise of online tutoring and why it's becoming the preferred choice for modern families.", category: "News", date: "Jan 5, 2025" },
  { id: 4, title: "5 Study Habits of Successful Students", excerpt: "Research-backed study techniques that can dramatically improve your academic performance.", category: "Study Tips", date: "Dec 28, 2024" },
  { id: 5, title: "Choosing the Right Tutor for Your Child", excerpt: "A comprehensive guide to finding the perfect tutor match for your child's learning style.", category: "Study Tips", date: "Dec 20, 2024" },
  { id: 6, title: "AS/A Level Mathematics: Common Mistakes to Avoid", excerpt: "Expert tutors share the most common errors AS/A Level maths students make and how to fix them.", category: "AS/A Level", date: "Dec 15, 2024" },
];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = posts.filter(
    (p) => (activeCategory === "All" || p.category === activeCategory) &&
      (searchQuery === "" || p.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div>
      <PageBanner title="Blog" breadcrumbs={[{ label: "Home", to: "/" }, { label: "Blog" }]} />

      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main */}
            <div className="flex-1">
              {/* Category Tabs */}
              <ScrollReveal>
                <div className="flex flex-wrap gap-2 mb-8">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeCategory === cat
                          ? "bg-accent text-accent-foreground"
                          : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </ScrollReveal>

              {/* Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filtered.map((post, i) => (
                  <ScrollReveal key={post.id} delay={i * 0.1}>
                    <div className="bg-card rounded-xl border border-border card-hover overflow-hidden">
                      <div className="gradient-navy h-40 flex items-center justify-center">
                        <span className="text-white/20 text-6xl font-heading font-bold">{post.id}</span>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                          <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
                          <span className="flex items-center gap-1"><Tag size={12} />{post.category}</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{post.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                        <button className="gold-text text-sm font-medium hover:underline">Read More →</button>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              {filtered.length === 0 && (
                <p className="text-center text-muted-foreground py-12">No posts found.</p>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-72 space-y-6">
              <ScrollReveal>
                <div className="bg-card rounded-xl border border-border p-5">
                  <h4 className="font-semibold text-foreground mb-3">Search</h4>
                  <div className="relative">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search posts..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="bg-card rounded-xl border border-border p-5">
                  <h4 className="font-semibold text-foreground mb-3">Recent Posts</h4>
                  <ul className="space-y-3">
                    {posts.slice(0, 4).map((p) => (
                      <li key={p.id} className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{p.title}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-card rounded-xl border border-border p-5">
                  <h4 className="font-semibold text-foreground mb-3">Categories</h4>
                  <ul className="space-y-2">
                    {categories.filter(c => c !== "All").map((c) => (
                      <li key={c}>
                        <button onClick={() => setActiveCategory(c)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                          {c}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
