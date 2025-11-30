interface CertificationCardProps {
  year: string;
  title: string;
  org: string;
}

const CertificationCard = ({ year, title, org }: CertificationCardProps) => {
  return (
    <article
      className="
        flex flex-col gap-1
        rounded-xl border border-line-primary/60
        bg-surface-secondary/70
        px-4 py-3
        hover:border-accent-strong/70
        hover:shadow-soft
        transition-all
        flex-nowrap
      "
    >
      <p className="text-[11px] uppercase tracking-[0.22em] text-on-surface-muted">
        {year}
      </p>

      <h4 className="font-semibold text-sm text-on-surface-primary">{title}</h4>

      <p className="text-xs text-on-surface-muted">{org}</p>
    </article>
  );
};

export default CertificationCard;
