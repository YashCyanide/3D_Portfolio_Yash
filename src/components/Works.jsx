import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import SectionWrapper from '../hoc';
import { projects } from '../constants';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import { Tilt } from 'react-tilt';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} className="w-1/2 h-1/2 object-contain" alt="" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h2 className="text-white font-bold text-[27px]">{name}</h2>
          <p className="mt-2 text-secondary font-light text-[15px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[16px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          " Explore a curated collection of my diverse projects on my portfolio website. From innovative web applications that simplify tasks, to captivating multimedia creations that tell stories, each project showcases my passion for blending technology with creativity. Discover how I've tackled challenges, honed my skills, and brought unique visions to life through my meticulously crafted projects. "

        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-10 ">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(Works, "");