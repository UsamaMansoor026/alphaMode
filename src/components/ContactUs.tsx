import { contactSectionBgSrc } from "../assets";
import SectionHeading from "./SectionHeading";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="global-padding"
      style={{
        background: `url(${contactSectionBgSrc})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <SectionHeading headingText="Contact Us" />

      {/* Contact Us Form */}
      <form className="mx-auto max-w-[650px] bg-card p-8 space-y-5">
        {/* Name and Email Inputs Container */}
        <div className="flex items-center gap-6">
          {/* Name Field */}
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="name" className="text-[15px] text-muted">
              Your Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Maan Mansoor"
              required
              className="text-primary border border-secondary outline-none py-2.5 px-4"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="email" className="text-[15px] text-muted">
              Your Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              required
              className="text-primary border border-secondary outline-none py-2.5 px-4"
            />
          </div>
        </div>

        {/* Subject Field */}
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="subject" className="text-[15px] text-muted">
            Subject:
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Training Information"
            required
            className="text-primary border border-secondary outline-none py-2.5 px-4"
          />
        </div>

        {/* Message Field */}
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="message" className="text-[15px] text-muted">
            Your Message:
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="What's your message?"
            required
            className="text-primary border border-secondary outline-none py-2.5 px-4 min-h-[150px]"
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactUs;
