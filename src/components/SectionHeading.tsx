import { wavyPatternSrc } from "../assets";

type SectionHeadingProps = {
  headingText: string;
};

const SectionHeading = ({ headingText }: SectionHeadingProps) => {
  const [firstWord, secondWord] = headingText.split(" ");
  return (
    <div className="flex flex-col items-center text-center space-y-3 mb-[40px]">
      <h1 className="text-4xl uppercase font-extrabold tracking-[2px]">
        {firstWord} <span className="text-cta">{secondWord}</span>
      </h1>
      <img src={wavyPatternSrc} alt="Wavy Pattern" />
    </div>
  );
};

export default SectionHeading;
