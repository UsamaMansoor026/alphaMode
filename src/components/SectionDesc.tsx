type sectionDescProps = {
  text: string;
};

const SectionDesc = ({ text }: sectionDescProps) => {
  return (
    <p className="text-[14px] text-muted text-center mb-12 max-w-[100%] md:max-w-[60%] mx-auto">
      {text}
    </p>
  );
};

export default SectionDesc;
