interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}