import type { trainerCardInterface } from "../interface";

const TrainerCard = (props: trainerCardInterface) => {
  const { id, name, role, desc, avatar } = props;
  return (
    <article key={id} className="bg-card rounded-lg overflow-hidden">
      <div className="overflow-hidden">
        <img src={avatar} alt={name} className="w-full object-cover" />
      </div>

      <div className="p-5 space-y-3">
        <h5 className="text-cta text-[15px] font-light">{role}</h5>
        <h3 className="text-2xl">{name}</h3>
        <p className="text-[14px] text-muted">{desc}</p>
      </div>

      <div className="flex items-center gap-4 p-5">
        <i className="fa-brands fa-facebook-f duration-150 hover:text-cta hover:scale-110 cursor-pointer" />
        <i className="fa-brands fa-twitter duration-150 hover:text-cta hover:scale-110 cursor-pointer" />
        <i className="fa-brands fa-instagram duration-150 hover:text-cta hover:scale-110 cursor-pointer" />
      </div>
    </article>
  );
};

export default TrainerCard;
