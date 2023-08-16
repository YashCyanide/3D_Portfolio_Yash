import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';
import { styles } from '../styles';

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (

  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-light-100 font-black text-[50px]">"</p>
    <div className="mt-1">
      <p className="text-light-100 tracking-wide text-[22px]">{testimonial}</p>
      <div className="mt-7 flex justify-between items-center gap-2">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-extrabold text-[18px]">
            <span className="blue-text-gradient ">
              @
            </span>&nbsp;{name}
          </p>
          <p className="mt-1 test-secondary text-[13px]">
            {designation}  of {company}
          </p>
        </div>
        <img src={image} alt={`feedback-by-${name}`}
          className="w-10 h-10 rounded-full object-cover" />
      </div>
    </div>

  </motion.div>

)



const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()} initial="initial" animate="animate">
          <p className={styles.sectionSubText}>What Other Say</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name}
            index={index}
            {...testimonial} />
        ))}
      </div>

    </div>
  )
}

export default SectionWrapper(Feedbacks, "");