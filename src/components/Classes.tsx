import { useState } from "react";
import { SectionHeading, SectionDesc } from "./index";
import { classesData } from "../assets";
import type { classesDataInterface } from "../interface";

const Classes = () => {
  const [activeClass, setActiveClass] = useState<string>("fitness");
  return (
    <section id="classes" className="global-padding">
      <SectionHeading headingText="our classes" />
      <SectionDesc text="From high-intensity workouts to calming yoga sessions, our expert-led classes are designed to challenge, energize, and transform you—no matter your fitness level." />

      {/* Classes Filter */}
      <div className="flex flex-wrap justify-center items-center">
        <p
          role="button"
          className={`${
            activeClass === "fitness" ? "bg-cta" : "bg-transparent"
          } cursor-pointer px-5 py-1.5 duration-300`}
          onClick={() => setActiveClass("fitness")}
        >
          Fitness
        </p>
        <p
          role="button"
          className={`${
            activeClass === "muscle" ? "bg-cta" : "bg-transparent"
          } cursor-pointer px-5 py-1.5 duration-300`}
          onClick={() => setActiveClass("muscle")}
        >
          Muscle
        </p>
        <p
          role="button"
          className={`${
            activeClass === "bodybuilding" ? "bg-cta" : "bg-transparent"
          } cursor-pointer px-5 py-1.5 duration-300`}
          onClick={() => setActiveClass("bodybuilding")}
        >
          Bodybuilding
        </p>
        <p
          role="button"
          className={`${
            activeClass === "yoga" ? "bg-cta" : "bg-transparent"
          } cursor-pointer px-5 py-1.5 duration-300`}
          onClick={() => setActiveClass("yoga")}
        >
          Yoga
        </p>
        <p
          role="button"
          className={`${
            activeClass === "advanced" ? "bg-cta" : "bg-transparent"
          } cursor-pointer px-5 py-1.5 duration-300`}
          onClick={() => setActiveClass("advanced")}
        >
          Advanced
        </p>
      </div>

      {/* Class Data */}
      <div className="mt-7">
        {classesData.map((item: classesDataInterface) => {
          if (item.category === activeClass) {
            return (
              <article key={item.id} className="mx-auto max-w-[700px]">
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full aspect-[16/8] object-cover"
                  />
                </div>

                {/* Content */}
                <div className="space-y-3 mt-4">
                  <h3 className="text-3xl tracking-[2px]">{item.title}</h3>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </article>
            );
          } else {
            return null;
          }
        })}
      </div>
    </section>
  );
};

export default Classes;
