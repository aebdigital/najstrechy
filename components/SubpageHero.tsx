type SubpageHeroProps = {
  eyebrow: string;
  title: string;
  summary: string;
  image: string;
};

export default function SubpageHero({ eyebrow, title, summary, image }: SubpageHeroProps) {
  return (
    <section className="subpage-hero text-white">
      <img src={image} alt="" className="subpage-hero-bg" />
      <div className="site-container relative z-10 pt-36 pb-16 md:pt-40 md:pb-24">
        <div className="fade-up-on-load max-w-4xl">
          <span className="text-white/65 text-xs uppercase tracking-[0.2em] mb-4 block">{eyebrow}</span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            {title}
          </h1>
          <p className="text-white/85 text-lg md:text-xl font-light max-w-3xl mt-6 leading-relaxed">{summary}</p>
        </div>
      </div>
    </section>
  );
}
