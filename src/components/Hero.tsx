import { heroBgVidSrc } from "../assets";

const Hero = () => {
  return (
    <section className="relative h-screen">
      <video
        muted
        autoPlay
        // loop
        playsInline
        className="w-full h-[inherit] object-cover"
      >
        <source src={heroBgVidSrc} type="video/mp4" />
      </video>

      {/* Mask */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="w-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col items-center space-y-5">
        <h3 className="text-xl font-bold tracking-[1px]">
          work harder, get stronger
        </h3>
        <h1 className="w-[85%] md:w-full text-6xl md:text-[85px] font-extrabold tracking-[7px] leading-[0.9] text-center">
          easy with our <span className="text-cta">gym</span>
        </h1>
        <button type="button">Become a member</button>
      </div>
    </section>
  );
};

export default Hero;
