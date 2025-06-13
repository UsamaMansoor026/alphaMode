import { ctaSectionBgSrc } from "../assets";
import SectionHeading from "./SectionHeading";

const CtaSection = () => {
  return (
    <section
      className="global-padding py-16"
      style={{
        background: `url(${ctaSectionBgSrc})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-center gap-2">
        <SectionHeading headingText="Don't think," />
        <SectionHeading headingText="begin today!" />
      </div>

      <div className="text-center font-inter space-y-3">
        <h3 className="text-2xl">
          Ready to <span className="text-cta">transform</span> your body and
          <span className="text-cta"> mindset?</span>
        </h3>
        <p className="text-[15px] text-muted">
          Join Alpha Mode today and take the first step toward a stronger,{" "}
          <br />
          healthier you. Your journey starts now.
        </p>
        <button type="button">Become a member</button>
      </div>
    </section>
  );
};

export default CtaSection;
