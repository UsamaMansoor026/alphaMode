import { trainersData } from "../assets";
import type { trainerCardInterface } from "../interface";
import SectionDesc from "./SectionDesc";
import SectionHeading from "./SectionHeading";
import TrainerCard from "./TrainerCard";

const ExpertTrainers = () => {
  return (
    <section id="trainers" className="global-padding">
      <SectionHeading headingText="Expert Trainers" />
      <SectionDesc text="Our certified trainers bring years of experience, personalized coaching, and real results. They're not just here to guide you — they're here to push, support, and inspire every step of your journey." />

      {/* Expert Trainer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainersData.map((trainer: trainerCardInterface) => (
          <TrainerCard
            id={trainer.id}
            avatar={trainer.avatar}
            desc={trainer.desc}
            name={trainer.name}
            role={trainer.role}
            key={trainer.id}
          />
        ))}
      </div>
    </section>
  );
};

export default ExpertTrainers;
