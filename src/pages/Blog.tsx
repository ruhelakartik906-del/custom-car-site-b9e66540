import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, CheckCircle2, Sparkles, ShieldCheck, Gem, BookOpen, Car } from "lucide-react";
import PageHero from "@/components/PageHero";
import ppfHero from "@/assets/blog-ppf.jpg";
import ppfVsCeramicHero from "@/assets/blog-ppf-vs-ceramic.jpg";

type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
};

const articles: Article[] = [
  {
    slug: "what-is-paint-protection-film-ppf-worth-it-2026",
    category: "Paint Protection",
    title: "What Is Paint Protection Film (PPF) and Is It Worth It in 2026?",
    excerpt:
      "In 2026, car owners are becoming more conscious than ever about maintaining their vehicle's appearance and resale value. Discover why PPF has become essential.",
    image: ppfHero,
  },
  {
    slug: "ppf-vs-ceramic-coating-which-is-better",
    category: "Paint Protection",
    title: "PPF vs Ceramic Coating: Which Protection Is Better for Your Car?",
    excerpt:
      "Two solutions dominate the automotive detailing industry. Compare features, benefits and find the best paint protection for your vehicle.",
    image: ppfVsCeramicHero,
  },
];

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3 text-muted-foreground">
    <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
    <span>{children}</span>
  </li>
);

const PpfArticle = () => (
  <>
    <div className="flex items-center gap-2 text-xs tracking-[0.4em] uppercase text-gold mb-4">
      <BookOpen className="h-4 w-4" /> Paint Protection
    </div>
    <h2 className="font-display text-4xl md:text-5xl">
      What Is Paint Protection Film (PPF) and Is It Worth It in 2026?
    </h2>
    <div className="mt-4 h-px w-20 gold-divider" />

    <div className="mt-8 grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 space-y-5">
        <p className="text-muted-foreground leading-relaxed">
          In 2026, car owners are becoming more conscious than ever about maintaining their vehicle's appearance and resale value. With increasing road traffic, harsh weather conditions, stone chips, bird droppings, and UV exposure, protecting your car's paint has become a necessity rather than a luxury. This is where Paint Protection Film (PPF) comes into the picture.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          But what exactly is PPF, and is it worth investing in during 2026? Let's find out.
        </p>
      </div>
      <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-elegant">
        <img src={ppfHero} alt="Paint Protection Film — CLNHYGEN" loading="lazy" className="h-full w-full object-cover" />
      </div>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <ShieldCheck className="h-6 w-6 text-gold" /> What Is Paint Protection Film (PPF)?
      </h3>
      <div className="mt-6 space-y-5">
        <p className="text-muted-foreground leading-relaxed">
          Paint Protection Film (PPF) is a transparent, high-performance polyurethane film applied to a vehicle's painted surfaces. It acts as an invisible shield that protects the paint from scratches, stone chips, road debris, bug splatter, bird droppings, and environmental contaminants.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Modern PPF technology has evolved significantly over the years. The latest films available in 2026 feature self-healing properties, hydrophobic coatings, UV resistance, and enhanced clarity, ensuring your car looks brand new for years.
        </p>
      </div>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <Sparkles className="h-6 w-6 text-gold" /> How Does PPF Work?
      </h3>
      <div className="mt-6 space-y-5">
        <p className="text-muted-foreground leading-relaxed">
          PPF creates a protective barrier between your car's paint and external damage. When minor scratches or swirl marks occur, the film's self-healing top layer can repair itself when exposed to heat from sunlight or warm water.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The film absorbs impacts from small stones, road debris, and daily wear and tear, preventing permanent damage to the original paint underneath.
        </p>
      </div>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <Gem className="h-6 w-6 text-gold" /> Top PPF Benefits in 2026
      </h3>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {[
          { t: "1. Superior Scratch Protection", d: "Daily driving exposes your vehicle to countless risks such as keys, shopping carts, bushes, and improper washing techniques. PPF helps prevent these minor scratches from reaching the original paint." },
          { t: "2. Protection Against Stone Chips", d: "Highway driving often leads to paint damage from flying stones and road debris. Paint Protection Film acts as a sacrificial layer that absorbs impacts and protects your vehicle's paintwork." },
          { t: "3. Self-Healing Technology", d: "One of the biggest PPF benefits is its self-healing capability. Minor scratches and swirl marks disappear automatically when exposed to heat, keeping the surface smooth and flawless." },
          { t: "4. UV and Oxidation Resistance", d: "Continuous exposure to sunlight can fade your car's paint over time. Modern PPF blocks harmful UV rays and prevents oxidation, helping maintain the vehicle's original color and shine." },
          { t: "5. Easy Maintenance", d: "Most premium PPFs feature hydrophobic properties that repel water, dirt, and contaminants. This makes cleaning easier and keeps your vehicle looking cleaner for longer periods." },
          { t: "6. Preserves Resale Value", d: "A well-maintained exterior significantly improves a vehicle's resale value. Since PPF protects the original factory paint, potential buyers often view protected vehicles as better-maintained investments." },
        ].map((b) => (
          <div key={b.t} className="bg-card border border-border p-6 rounded-sm">
            <h4 className="font-display text-xl">{b.t}</h4>
            <p className="mt-3 text-muted-foreground leading-relaxed">{b.d}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <Car className="h-6 w-6 text-gold" /> PPF vs Ceramic Coating
      </h3>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Many car owners confuse PPF with ceramic coating, but they serve different purposes.
      </p>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm border border-border">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="text-left p-4 font-display text-foreground">Feature</th>
              <th className="text-left p-4 font-display text-foreground">Paint Protection Film</th>
              <th className="text-left p-4 font-display text-foreground">Ceramic Coating</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Scratch Protection", "Excellent", "Limited"],
              ["Stone Chip Protection", "Excellent", "Minimal"],
              ["Self-Healing", "Yes", "No"],
              ["Gloss Enhancement", "Good", "Excellent"],
              ["Hydrophobic Effect", "Good", "Excellent"],
              ["Paint Preservation", "Best", "Good"],
            ].map(([f, p, c], i) => (
              <tr key={f} className={`border-b border-border ${i % 2 ? "bg-muted/30" : ""}`}>
                <td className="p-4 text-muted-foreground font-medium">{f}</td>
                <td className="p-4 text-muted-foreground">{p}</td>
                <td className="p-4 text-muted-foreground">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <ShieldCheck className="h-6 w-6 text-gold" /> Is PPF Worth It in 2026?
      </h3>
      <p className="mt-4 text-muted-foreground leading-relaxed">The answer is a strong yes, especially if:</p>
      <ul className="mt-6 grid gap-3">
        <Bullet>You own a new car.</Bullet>
        <Bullet>You frequently drive on highways.</Bullet>
        <Bullet>You want to maintain showroom-like paint quality.</Bullet>
        <Bullet>You plan to keep the vehicle for several years.</Bullet>
        <Bullet>You care about long-term resale value.</Bullet>
      </ul>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <Car className="h-6 w-6 text-gold" /> Which Areas Should Be Protected?
      </h3>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {["Front bumper","Hood","Fenders","Side mirrors","Headlights","Door edges","Door handle cups","Rear bumper loading area"].map((area) => (
          <div key={area} className="flex items-center gap-3 bg-card border border-border p-4 rounded-sm">
            <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
            <span className="text-muted-foreground text-sm">{area}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-14 bg-card border border-border p-8 rounded-sm">
      <h3 className="font-display text-2xl">Final Thoughts</h3>
      <p className="mt-6 text-muted-foreground leading-relaxed">
        As vehicles become more expensive and paint technologies more advanced, protecting your investment is increasingly important. Paint Protection Film (PPF) remains one of the most effective solutions for long-term car paint protection in 2026.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-background px-7 py-3 rounded-sm font-medium hover:opacity-90 transition">
          Book PPF Installation <ArrowRight className="h-4 w-4" />
        </Link>
        <Link to="/services" className="inline-flex items-center gap-2 border border-border px-7 py-3 rounded-sm font-medium hover:border-gold transition">
          Explore Services
        </Link>
      </div>
    </div>
  </>
);

const PpfVsCeramicArticle = () => (
  <>
    <div className="flex items-center gap-2 text-xs tracking-[0.4em] uppercase text-gold mb-4">
      <BookOpen className="h-4 w-4" /> Paint Protection
    </div>
    <h2 className="font-display text-4xl md:text-5xl">
      PPF vs Ceramic Coating: Which Protection Is Better for Your Car?
    </h2>
    <div className="mt-4 h-px w-20 gold-divider" />

    <div className="mt-8 grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 space-y-5">
        <p className="text-muted-foreground leading-relaxed">
          When it comes to protecting your car's paint, two solutions dominate the automotive detailing industry: Paint Protection Film (PPF) and Ceramic Coating. Both offer unique advantages, but many car owners struggle to decide which one is the better choice.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          If you're comparing PPF vs Ceramic Coating, this guide will help you understand the differences, benefits, and which option provides the best paint protection for your vehicle.
        </p>
      </div>
      <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-elegant">
        <img src={ppfVsCeramicHero} alt="PPF vs Ceramic Coating — CLNHYGEN" loading="lazy" className="h-full w-full object-cover" />
      </div>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <ShieldCheck className="h-6 w-6 text-gold" /> Understanding Paint Protection
      </h3>
      <p className="mt-6 text-muted-foreground leading-relaxed">Your car's paint is constantly exposed to environmental hazards such as:</p>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {["Stone chips","Road debris","Bird droppings","Tree sap","UV rays","Water spots","Scratches and swirl marks"].map((h) => (
          <div key={h} className="flex items-center gap-3 bg-card border border-border p-4 rounded-sm">
            <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
            <span className="text-muted-foreground text-sm">{h}</span>
          </div>
        ))}
      </div>
      <p className="mt-6 text-muted-foreground leading-relaxed">
        Without proper protection, these factors can damage the paint, reduce gloss, and lower your vehicle's resale value.
      </p>
    </div>

    <div className="mt-14 grid md:grid-cols-2 gap-6">
      <div className="bg-card border border-border p-7 rounded-sm">
        <h3 className="font-display text-2xl flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-gold" /> What Is PPF?</h3>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Paint Protection Film is a transparent polyurethane film applied directly to a vehicle's painted surfaces. It acts as a physical barrier between paint and external damage.
        </p>
        <ul className="mt-4 space-y-2">
          {["Self-healing technology","Scratch resistance","Stone chip protection","UV resistance","High gloss finish","Hydrophobic properties"].map((f) => (
            <Bullet key={f}>{f}</Bullet>
          ))}
        </ul>
      </div>
      <div className="bg-card border border-border p-7 rounded-sm">
        <h3 className="font-display text-2xl flex items-center gap-2"><Sparkles className="h-5 w-5 text-gold" /> What Is Ceramic Coating?</h3>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Ceramic coating is a liquid polymer applied to exterior surfaces. Once cured, it forms a durable protective layer that chemically bonds with the paint.
        </p>
        <ul className="mt-4 space-y-2">
          {["Enhanced gloss and shine","Water repellency","Easier cleaning","UV protection","Chemical resistance","Reduced dirt accumulation"].map((f) => (
            <Bullet key={f}>{f}</Bullet>
          ))}
        </ul>
      </div>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <Gem className="h-6 w-6 text-gold" /> Key Differences
      </h3>
      <div className="mt-8 space-y-4">
        {[
          { t: "Scratch Protection", ppf: "Excellent protection against scratches, swirl marks, and minor abrasions.", cc: "Limited scratch resistance — cannot prevent deeper scratches.", w: "PPF" },
          { t: "Stone Chip Protection", ppf: "Designed specifically to absorb impacts from stones and debris.", cc: "Cannot stop stone chips from damaging paint.", w: "PPF" },
          { t: "Gloss & Appearance", ppf: "Smooth glossy finish while maintaining original paint look.", cc: "Deeper gloss, richer reflections and enhanced paint depth.", w: "Ceramic Coating" },
          { t: "Self-Healing", ppf: "Premium films heal minor scratches with heat.", cc: "No self-healing properties.", w: "PPF" },
          { t: "Water Repellency", ppf: "Good hydrophobic performance.", cc: "Excellent water beading and self-cleaning effect.", w: "Ceramic Coating" },
          { t: "Maintenance", ppf: "Easier to maintain than bare paint with physical protection.", cc: "Extremely easy to clean due to slick surface.", w: "Ceramic Coating" },
          { t: "Longevity", ppf: "5–10 years depending on film quality and maintenance.", cc: "2–7 years depending on product quality.", w: "PPF" },
        ].map((r) => (
          <div key={r.t} className="bg-card border border-border p-6 rounded-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h4 className="font-display text-xl">{r.t}</h4>
              <span className="text-xs tracking-[0.3em] uppercase text-gold">Winner: {r.w}</span>
            </div>
            <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <p><span className="text-foreground font-medium">PPF:</span> {r.ppf}</p>
              <p><span className="text-foreground font-medium">Ceramic:</span> {r.cc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <Car className="h-6 w-6 text-gold" /> Quick Comparison Table
      </h3>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm border border-border">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="text-left p-4 font-display text-foreground">Feature</th>
              <th className="text-left p-4 font-display text-foreground">PPF</th>
              <th className="text-left p-4 font-display text-foreground">Ceramic Coating</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Scratch Protection","Excellent","Moderate"],
              ["Stone Chip Protection","Excellent","Poor"],
              ["Self-Healing","Yes","No"],
              ["UV Protection","Excellent","Excellent"],
              ["Gloss Enhancement","Good","Excellent"],
              ["Hydrophobic Effect","Good","Excellent"],
              ["Durability","5–10 Years","2–7 Years"],
              ["Physical Protection","Excellent","Limited"],
              ["Maintenance","Easy","Very Easy"],
            ].map(([f, p, c], i) => (
              <tr key={f} className={`border-b border-border ${i % 2 ? "bg-muted/30" : ""}`}>
                <td className="p-4 text-muted-foreground font-medium">{f}</td>
                <td className="p-4 text-muted-foreground">{p}</td>
                <td className="p-4 text-muted-foreground">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <ShieldCheck className="h-6 w-6 text-gold" /> Which One Is Better?
      </h3>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        If your primary goal is maximum paint protection, PPF is the clear winner. It protects against scratches, stone chips, road debris, and everyday wear that ceramic coatings simply cannot stop.
      </p>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        However, if your focus is maintaining shine, making the car easier to clean, and achieving a glossy showroom finish, ceramic coating is an excellent option.
      </p>
    </div>

    <div className="mt-14 bg-card border border-border p-8 rounded-sm">
      <h3 className="font-display text-2xl">Why Many Car Owners Choose Both</h3>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Many premium car owners now combine PPF and ceramic coating — installing PPF first, then applying ceramic coating over it. This combination offers:
      </p>
      <ul className="mt-4 grid md:grid-cols-2 gap-3">
        {["Superior physical protection","Enhanced gloss","Better water repellency","Easier maintenance","Long-term durability"].map((b) => (
          <Bullet key={b}>{b}</Bullet>
        ))}
      </ul>
      <p className="mt-6 text-muted-foreground leading-relaxed">It is often considered the ultimate paint protection package.</p>
    </div>

    <div className="mt-14 grid md:grid-cols-2 gap-6">
      <div className="bg-card border border-border p-7 rounded-sm">
        <h4 className="font-display text-xl">Who Should Choose PPF?</h4>
        <ul className="mt-4 space-y-2">
          <Bullet>You own a new vehicle.</Bullet>
          <Bullet>You drive frequently on highways.</Bullet>
          <Bullet>You want maximum protection against scratches and chips.</Bullet>
          <Bullet>You plan to keep the car for several years.</Bullet>
          <Bullet>You want to preserve resale value.</Bullet>
        </ul>
      </div>
      <div className="bg-card border border-border p-7 rounded-sm">
        <h4 className="font-display text-xl">Who Should Choose Ceramic Coating?</h4>
        <ul className="mt-4 space-y-2">
          <Bullet>You prioritize gloss and aesthetics.</Bullet>
          <Bullet>Your vehicle faces minimal physical hazards.</Bullet>
          <Bullet>You want easier cleaning and maintenance.</Bullet>
          <Bullet>You have a limited budget.</Bullet>
        </ul>
      </div>
    </div>

    <div className="mt-14 bg-card border border-border p-8 rounded-sm">
      <h3 className="font-display text-2xl">Final Verdict</h3>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        For true paint protection, PPF offers unmatched defense against physical damage. Ceramic coating excels in enhancing appearance and simplifying maintenance but cannot match PPF's impact protection. For the highest level of protection and appearance, combining both delivers the best of both worlds.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-background px-7 py-3 rounded-sm font-medium hover:opacity-90 transition">
          Book a Consultation <ArrowRight className="h-4 w-4" />
        </Link>
        <Link to="/services" className="inline-flex items-center gap-2 border border-border px-7 py-3 rounded-sm font-medium hover:border-gold transition">
          Explore Services
        </Link>
      </div>
    </div>
  </>
);

const Blog = () => {
  const [active, setActive] = useState<string | null>(null);
  const current = articles.find((a) => a.slug === active);

  if (current) {
    return (
      <div>
        <PageHero eyebrow="CLNHYGEN Blog" title={current.title} />
        <section className="py-16 border-b border-border bg-secondary/20">
          <div className="container mx-auto max-w-5xl">
            <button
              onClick={() => {
                setActive(null);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 text-sm text-gold hover:gap-3 transition-all mb-8"
            >
              <ArrowLeft className="h-4 w-4" /> Back to all articles
            </button>
            {current.slug === "what-is-paint-protection-film-ppf-worth-it-2026" && <PpfArticle />}
            {current.slug === "ppf-vs-ceramic-coating-which-is-better" && <PpfVsCeramicArticle />}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <PageHero
        eyebrow="CLNHYGEN Blog"
        title="Premium Detailing Insights"
        subtitle="Paint protection know-how and luxury car care tips from the CLNHYGEN studio."
      />
      <section className="py-16 border-b border-border bg-secondary/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((a) => (
              <button
                key={a.slug}
                onClick={() => {
                  setActive(a.slug);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group text-left bg-card border border-border rounded-sm hover:border-gold transition overflow-hidden flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold">
                    <BookOpen className="h-4 w-4" /> {a.category}
                  </div>
                  <h3 className="mt-4 font-display text-2xl">{a.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{a.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-gold group-hover:gap-3 transition-all">
                    Read article <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
