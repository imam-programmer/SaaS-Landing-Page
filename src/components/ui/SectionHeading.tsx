interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mx-auto max-w-2xl text-center ${className}`}
    >
      {badge && (
        <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-secondary">
          {badge}
        </span>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}