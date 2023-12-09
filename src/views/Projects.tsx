// react
import { useState } from "react";
import aboutImg from "../assets/aboutbg.jpg";
import portfolio3image1 from "../assets/portfolio-proj3-1.png";
import portfolio3image2 from "../assets/portfolio-proj3-2.png";
import portfolio3image3 from "../assets/portfolio-proj3-3.png";
import portfolio3image4 from "../assets/portfolio-proj3-4.png";
import reactIcon from "../assets/react.png";
import tailwindCSSIcon from "../assets/tailwind-css.png";
import framerMotionIcon from "../assets/framermotion.webp";
import localStorageIcon from "../assets/localStorage.png";

// assets
import projectsPageImg from "../assets/projects-page.svg";

// components
import { Button, Card, Reveal } from "../components";
import { ImageSlider } from "../components/ImageSlider";
import { SocialMediaIcon } from "../components";

// data
import { projects } from "../data";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn } from "../utils/variants";
import { transition } from "../utils/transition";

const portfolio_3 = [
  portfolio3image1,
  portfolio3image2,
  portfolio3image3,
  portfolio3image4,
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-fit flex flex-col justify-center relative"
      style={{
        background: `url(${aboutImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div>
      <h2 className="text-center xl:text-center text-4xl sm:text-5xl lg:text-[64px] font-bold text text-textPrimary mt-20">
        Projects
      </h2>
      </div>

      <div className="grid grid-cols-2 mx-auto xl:justify-between items-start xl:items-start w-full mt-10 py-16 px-12">
        <div className="flex justify-center">
        <div
          style={{
            maxWidth: "1000px",
            width: "800px",
          }}
        >
          <div
            style={{
              maxHeight: "500px",
              height: "500px",
            }}
          >
            <ImageSlider imageUrls={portfolio_3} />
          </div>

          <div className="flex justify-between mt-8">
            <h2 className="text-4xl font-bold text-secondary">NewsHub</h2>
            <div className="flex flex-col sm:flex-row items-center gap-8 justify-center xl:justify-start">
              <SocialMediaIcon imgSrc={reactIcon} title="React" />
              <SocialMediaIcon imgSrc={tailwindCSSIcon} title="Tailwind CSS" />
              <SocialMediaIcon
                imgSrc={framerMotionIcon}
                title="Framer Motion"
              />
              <SocialMediaIcon imgSrc={localStorageIcon} title="localStorage" />
            </div>
          </div>
          

          <p
            className="text-justify xl:text-justify text-base sm:text-lg text-textSecondary mt-6"
            style={{
              maxWidth: "800px",
            }}
          >
            Ever wondered what happens when a penguin, a pirate, and a pineapple
            walk into a bar? Well, we can't guarantee that, but we can promise
            you'll find out what hilariously unexpected things unfold in the
            quirkiest story you've ever read. Grab your sense of humor and get
            ready to laugh your way through a wild, wacky, and wonderfully weird
            tale that will have you in stitches!.
          </p>

          <div className="my-6 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start">
            <Button>Website</Button>
            <Button>GitHub</Button>
          </div>
        </div>
        </div>


        <div className="flex justify-center">
        <div
          style={{
            maxWidth: "1000px",
            width: "800px",
          }}
        >
          <div
            style={{
              maxHeight: "500px",
              height: "500px",
            }}
          >
            <ImageSlider imageUrls={portfolio_3} />
          </div>

          <div className="flex justify-between mt-8">
            <h2 className="text-4xl font-bold text-secondary">NewsHub</h2>
            <div className="flex flex-col sm:flex-row items-center gap-8 justify-center xl:justify-start">
              <SocialMediaIcon imgSrc={reactIcon} title="React" />
              <SocialMediaIcon imgSrc={tailwindCSSIcon} title="Tailwind CSS" />
              <SocialMediaIcon
                imgSrc={framerMotionIcon}
                title="Framer Motion"
              />
              <SocialMediaIcon imgSrc={localStorageIcon} title="localStorage" />
            </div>
          </div>

          <p
            className="text-justify xl:text-justify text-base sm:text-lg text-textSecondary mt-6"
            style={{
              maxWidth: "800px",
            }}
          >
            Ever wondered what happens when a penguin, a pirate, and a pineapple
            walk into a bar? Well, we can't guarantee that, but we can promise
            you'll find out what hilariously unexpected things unfold in the
            quirkiest story you've ever read. Grab your sense of humor and get
            ready to laugh your way through a wild, wacky, and wonderfully weird
            tale that will have you in stitches!.
          </p>

          <div className="my-6 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start">
            <Button>Website</Button>
            <Button>GitHub</Button>
          </div>
          </div>
        </div>

        <div className="flex justify-center">
        <div
          style={{
            maxWidth: "1000px",
            width: "800px",
          }}
        >
          <div
            style={{
              maxHeight: "500px",
              height: "500px",
            }}
          >
            <ImageSlider imageUrls={portfolio_3} />
          </div>

          <div className="flex justify-between mt-8">
            <h2 className="text-4xl font-bold text-secondary">NewsHub</h2>
            <div className="flex flex-col sm:flex-row items-center gap-8 justify-center xl:justify-start">
              <SocialMediaIcon imgSrc={reactIcon} title="React" />
              <SocialMediaIcon imgSrc={tailwindCSSIcon} title="Tailwind CSS" />
              <SocialMediaIcon
                imgSrc={framerMotionIcon}
                title="Framer Motion"
              />
              <SocialMediaIcon imgSrc={localStorageIcon} title="localStorage" />
            </div>
          </div>

          <p
            className="text-justify xl:text-justify text-base sm:text-lg text-textSecondary mt-6"
            style={{
              maxWidth: "800px",
            }}
          >
            Ever wondered what happens when a penguin, a pirate, and a pineapple
            walk into a bar? Well, we can't guarantee that, but we can promise
            you'll find out what hilariously unexpected things unfold in the
            quirkiest story you've ever read. Grab your sense of humor and get
            ready to laugh your way through a wild, wacky, and wonderfully weird
            tale that will have you in stitches!.
          </p>

          <div className="my-6 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start">
            <Button>Website</Button>
            <Button>GitHub</Button>
          </div>
          </div>
        </div>
        
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default Projects;
