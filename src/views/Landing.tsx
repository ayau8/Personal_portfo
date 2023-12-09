// assets
import homePageImg from "../assets/home-page.svg";
import homePageIllustration from "../assets/hero-illustration.svg";
import downloadIcon from "../assets/download-btn-icon.svg";
import selfimage from "../assets/selfimage.png";
import backgroundImg from "../assets/background3.jpg";
import facebookIcon from "../assets/facebook-icon.svg";
import githubIcon from "../assets/github.png";
import linkedInIcon from "../assets/linkedin.png";

// components
import { Button } from "../components";
import { SocialMediaIcon, Reveal } from "../components";

// react-simple-typewriter
import { Typewriter } from "react-simple-typewriter";

// framer-motion
import { motion } from "framer-motion";

// utils
import { transition } from "../utils/transition";
import { fadeIn, scale } from "../utils/variants";

const Landing = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${backgroundImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12">
        <motion.div
          className="w-full xl:w-fit"
          variants={{
            hidden: { x: 400 },
            visible: { x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5 }}
        >
          <h1 className="w-full xl:w-fit text-center xl:text-start text-4xl sm:text-6xl lg:text-7xl font-bold text-textPrimary uppercase">
            HI THERE. I AM
            <br />
            <span className="text-secondary text-7xl">
              <Typewriter
                words={["ALVIN YAU", "A software developer"]}
                cursor
                cursorStyle="_"
                typeSpeed={150}
                deleteSpeed={10}
                loop
              />
            </span>
          </h1>

          <div className="my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start">
            <SocialMediaIcon
              imgSrc={githubIcon}
              title="GitHub"
              website="https://github.com/ayau8"
            />
            <SocialMediaIcon
              imgSrc={linkedInIcon}
              title="LinkedIn"
              website="https://www.linkedin.com/in/alvin-yau-31298684/"
            />
            <Button icon={downloadIcon}>Download CV</Button>
          </div>
        </motion.div>

        <motion.img
          variants={{
            hidden: { y: -100, rotate: -5 },
            visible: { y: -50, rotate: -5 },
            hiddenDown: { y: 100, rotate: -5 },
            visibleDown: { y: 50, rotate: -5 },
          }}
          initial="hidden"
          animate="visible"
          exit="hiddenDown"
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          src={selfimage}
          alt=""
          className="max-w-full sm:max-w-[401px]"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider"></div>
    </div>
  );
};

export default Landing;
