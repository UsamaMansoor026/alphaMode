import { Gymprograms } from "../assets";
import { ProgramCard, SectionDesc, SectionHeading } from "./index";

const Program = () => {
  return (
    <section id="about" className="global-padding">
      <SectionHeading headingText="Choose Program" />

      {/* Section Description */}
      <SectionDesc
        text="Unlock your true potential with a program tailored to your goals. Whether
      you're starting fresh, building muscle, or finding balance through yoga —
      we've got the perfect path for you. Choose your focus and let the
      transformation begin."
      />

      {/* Rendering the Lists of Programs in GRID Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Gymprograms.map((item) => (
          <ProgramCard
            id={item.id}
            title={item.title}
            desc={item.desc}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Program;
