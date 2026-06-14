type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-5 text-balance text-4xl font-black tracking-[-0.04em] text-white md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 text-pretty text-lg leading-8 text-slate-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}
