// assets
import aboutPageImg from "../assets/about-me-page.svg";
import aboutIllustration from "../assets/about-illustration.svg";
import aboutImg from "../assets/aboutbg.jpg";

// components
import { SocialMediaIcon, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${aboutImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12">
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text text-textPrimary">
            About <span className="text-secondary">me</span>
          </h2>
          <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
            I'm an enthusiastic and dedicated [Your Occupation or Role] with a
            passion for [Your Interests or Specialization]. I have a background
            in [Your Relevant Education or Experience], and I'm committed to
            [Your Goal or Mission].
          </p>

          <div className="flex items-center justify-center xl:justify-start gap-6">
            {/* <SocialMediaIcon
              imgSrc={facebookIcon}
              title="Facebook"
              website="https://www.youtube.com/watch?v=ll8EjCZSzB4"
            />
            <SocialMediaIcon
              imgSrc={instagramIcon}
              title="Instagram"
              website="test"
            />
            <SocialMediaIcon
              imgSrc={twitterIcon}
              title="Twitter"
              website="test"
            />
            <SocialMediaIcon
              imgSrc={youtubeIcon}
              title="Youtube"
              website="test"
            /> */}
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <img
            src={aboutIllustration}
            alt=""
            className="max-w-full sm:max-w-[401px]"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider"></div>
    </div>
  );
};

export default About;
