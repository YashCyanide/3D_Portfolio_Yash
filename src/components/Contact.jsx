import React from 'react';
import { useState, useRef } from 'react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import SectionWrapper from '../hoc';
import { slideIn } from '../utils/motion';


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
  }

  const handleSubmit = (e) => {

  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>

        <form ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8">

          <label className="flex flex-col gap-2">
            <span className="text-white font-semibold text-[18px]">Your Name</span>
            <input type="text" name="name"
              value={form.name} onChange={handleChange} placeholder="Enter Your Name"
              className="bg-tertiary p-3 rounded-2xl outline-transparent font-medium" />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-white font-semibold text-[18px]">Email</span>
            <input type="email" name="email"
              value={form.email} onChange={handleChange} placeholder="Enter Your Email Address"
              className="bg-tertiary p-3 rounded-2xl outline-transparent font-medium" />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-white font-semibold text-[18px]">Message</span>
            <textarea rows="5" type="message" name="message"
              value={form.message} onChange={handleChange} placeholder="Hi, How can I help you?"
              className="bg-tertiary p-3 rounded-2xl outline-transparent font-medium" />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-transparent rounded-3xl w-fit text-white font-semibold shadow-primary"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
      
      <motion.div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");