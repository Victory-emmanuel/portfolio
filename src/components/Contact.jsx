import Reveal from "./Reveal";

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span className="text-secondary">Me</span>
              </h3>
              <p className="text-justify text-white leading-7 w-11/12 mx-auto">
                Self-taught front-end developer with a strong foundation in web
                development acquired through dedicated self-learning and
                hands-on projects. Committed to continous improvement, I
                maintain an updated skill set and showcase my technical prowess
                through a portfolio demonstrating responsive and visually
                engaging web interfaces.
              </p>
            </div>

            <div className="flex mt-10 items-center gap-7">
              <div className="bg-primary p-4 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  10
                  <span className="text-secondary">+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span className="text-secondary">Projects</span>
                </p>
              </div>

              <div className="bg-primary p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  2<span className="text-secondary">+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span className="text-secondary">years of experience</span>
                </p>
              </div>

              <div className="bg-primary p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  2<span className="text-secondary">+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span className="text-secondary">happy clients</span>
                </p>
              </div>
            </div>
          </div>

          <form
            action="https://getform.io/f/anlejqxa"
            method="POST"
            className=" max-w-6xl p-5 md:p-12"
            id="form"
          >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let´s connect!
            </p>
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              className="mb-2 w-full rounded-md border border-extraClr py-2 pl-2 pr-4"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="mb-2 w-full rounded-md border border-extraClr py-2 pl-2 pr-4"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-2 w-full rounded-md border border-extraClr py-2 pl-2 pr-4"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-white font-semibold text-xl bg-primary"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
