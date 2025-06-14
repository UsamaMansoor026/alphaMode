import heroBgVid from "./gym-video.mp4";
import wavyPattern from "./wavylines.png";
import ctaSectionBg from "./cta-bg.jpg";
import contactSectionBg from "./contact-bg.jpg";

/* Trainers */
import trainer1 from "./trainer/first-trainer.jpg";
import trainer2 from "./trainer/second-trainer.jpg";
import trainer3 from "./trainer/third-trainer.jpg";

/* Classes */
import fitness from "./classes/fitness.jpg";
import muscle from "./classes/muscle.jpg";
import bodybuilding from "./classes/bodybuilding.jpg";
import yoga from "./classes/yoga.jpg";
import advanced from "./classes/advanced.jpg";

export const heroBgVidSrc = heroBgVid;
export const wavyPatternSrc = wavyPattern;
export const ctaSectionBgSrc = ctaSectionBg;
export const contactSectionBgSrc = contactSectionBg;

export const Gymprograms = [
  {
    id: 1,
    title: "Basic Fitness",
    desc: "Kickstart your fitness journey with guided workouts and core strength building. Perfect for beginners aiming to build stamina and overall health.",
    icon: "fas fa-dumbbell",
  },
  {
    id: 2,
    title: "Basic Muscle Course",
    desc: "Focus on fundamental lifts and structured muscle-building routines. Build a strong base with progressive weight training plans.",
    icon: "fas fa-weight-hanging",
  },
  {
    id: 3,
    title: "Advanced Muscle Course",
    desc: "Targeted muscle gain with high-intensity strength training techniques. Ideal for experienced lifters ready to push boundaries. ",
    icon: "fas fa-user-ninja",
  },
  {
    id: 4,
    title: "New Gym Training",
    desc: "Learn proper form, machine use, and gym etiquette in a supportive environment. Great for newcomers who want structured, full-body training.",
    icon: "fas fa-running",
  },
  {
    id: 5,
    title: "Yoga Training",
    desc: "Enhance flexibility, mental focus, and inner calm through guided yoga sessions. Balance strength and serenity with expert-led flows.",
    icon: "fas fa-spa",
  },
  {
    id: 6,
    title: "Body Building Course",
    desc: "Maximize muscle growth, definition, and performance with pro-level guidance. This course is crafted for serious body transformation goals.",
    icon: "fas fa-bolt",
  },
];

export const trainersData = [
  {
    id: 1,
    avatar: trainer1,
    name: "William G. Stewart",
    role: "Fitness Trainer",
    desc: "William brings a dynamic approach to fitness with a focus on foundational strength, mobility, and endurance.",
  },
  {
    id: 2,
    avatar: trainer2,
    name: "Paul D. Newman",
    role: "Muscle Trainer",
    desc: "With a deep understanding of muscle growth and hypertrophy, Paul creates personalized routines that target strength, size, and symmetry.",
  },
  {
    id: 3,
    avatar: trainer3,
    name: "Boyd C. Harris",
    role: "Bodybuilding Trainer",
    desc: "Boyd is a seasoned bodybuilding mentor known for his goal-oriented coaching and competition prep techniques.",
  },
  {
    id: 4,
    avatar: trainer1,
    name: "Hector T. Daigle",
    role: "Yoga Trainer",
    desc: "Hector brings calm and balance to Alpha Mode through expertly guided yoga sessions.",
  },
  {
    id: 5,
    avatar: trainer2,
    name: "Bret D. Bowers",
    role: "Advanced Training Coach",
    desc: "Bret designs elite-level training programs for serious athletes and advanced lifters",
  },
];

export const classesData = [
  {
    id: 1,
    title: "Fitness Training",
    imageUrl: fitness,
    category: "fitness",
    desc: "This class is perfect for anyone looking to boost their overall health and stamina. It combines cardio, strength, and functional training in a high-energy environment. Whether you're a beginner or getting back on track, our fitness sessions are designed to build endurance, burn fat, and improve your day-to-day performance.",
  },
  {
    id: 2,
    title: "Muscle Training",
    imageUrl: muscle,
    category: "muscle",
    desc: "Build raw strength and lean muscle mass with our specialized muscle training program. Focused on progressive overload, proper form, and isolation exercises, this class targets all major muscle groups and is ideal for those aiming to bulk up or tone with structure and intensity.",
  },
  {
    id: 3,
    title: "Bodybuilding Training",
    imageUrl: bodybuilding,
    category: "bodybuilding",
    desc: "Designed for serious lifters and physique enthusiasts, our bodybuilding class pushes you beyond limits with advanced resistance routines, sculpting sets, and hypertrophy-focused training. From symmetry to definition, this class is all about maximizing your muscle potential and achieving that championship-level physique.",
  },
  {
    id: 4,
    title: "Yoga Training",
    imageUrl: yoga,
    category: "yoga",
    desc: "Calm your mind and energize your body with yoga sessions focused on balance, flexibility, and mental clarity. Each class guides you through breathing techniques and postures that enhance both physical and emotional well-being — perfect for recovery days or a mindful break from intense training.",
  },
  {
    id: 5,
    title: "Advanced Training",
    imageUrl: advanced,
    category: "advanced",
    desc: "This class is built for those who want more — more intensity, more challenge, more results. Expect HIIT circuits, functional strength movements, athletic drills, and complex routines. Ideal for seasoned gym-goers and athletes looking to break plateaus and push past physical limits.",
  },
];
