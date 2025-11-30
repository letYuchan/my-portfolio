interface CareerCardProps {
  term: string;
  title: string;
  content: string;
}

const CareerCard = ({ term, title, content }: CareerCardProps) => {
  return (
    <article className="flex flex-row  gap-4">
      {/* line */}
      <div className={"flex flex-col items-center gap-1"}>
        <div className="rounded-full w-2 h-2 bg-accent-strong mb-2" />
        <div className="w-[2px] flex-1 bg-line-primary/40 mx-auto" />
      </div>
      {/* 본문 */}
      <div className="flex-1 flex flex-col gap-2">
        <p className="font-normal text-xs text-on-surface-muted">{term}</p>
        <h3 className="font-bold text-lg text-on-surface-accent">{title}</h3>
        <p className="font-semibold text-md text-on-surface-primary">
          {content}
        </p>
      </div>
    </article>
  );
};

export default CareerCard;
