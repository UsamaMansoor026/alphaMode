interface ProgramCardProps {
  id: number;
  title: string;
  icon: string;
  desc: string;
}

const ProgramCard = (props: ProgramCardProps) => {
  const { id, title, icon, desc } = props;
  return (
    <article
      key={id}
      className="bg-card rounded-lg flex gap-6 px-6 py-8 h-full w-full"
    >
      {/* Icon */}
      <div className="bg-cta text-primary flex justify-center items-center text-3xl w-[200px] rounded p-3 md:p-0">
        <i className={icon} />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-primary text-xl tracking-[1px]">{title}</h3>
        <p className="text-[14px] text-muted">{desc}</p>
        <a
          href="/"
          className="text-[13px] text-cta duration-200 hover:underline"
        >
          Discover More
        </a>
      </div>
    </article>
  );
};

export default ProgramCard;
