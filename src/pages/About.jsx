import { motion } from "framer-motion";
import { CTA } from "../components";
import { skills } from "../constants";
import { Link } from "react-router-dom";
import Links from "./Links";

const About = () => {
  return (
    <motion.section
      className="max-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >

      <motion.h1
        className="head-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Hello, I'm{" "}
        <motion.span
          className="blue-gradient_text font-semibold drop-shadow"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {" "}
          Karvendhan
        </motion.span>{" "}
        👋
      </motion.h1>

      <motion.div
        className="mt-5 flex flex-col gap-3 text-slate-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Passionate MERN Stack Developer , building responsive web applications using MongoDB, Express.js, React.js, and Node.js. Skilled in developing dynamic front-end interfaces.
        </motion.p>

        <motion.div
          className="mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.a
            href="/karvendhan_cv.pdf"
            download="karvendhan_cv.pdf"
            className="btn hover:bg-blue-600 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <motion.div
              className="block-container w-20 h-20"
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>


      </div>

      <h3 className="subhead-text">Social Links</h3>

      {/* Social Links */}

      <div className="mt-16 flex flex-wrap gap-12">
        {Links.map((socialLinks) => (
          <Link to={socialLinks.url} target="_blank">

            <motion.div
              className="block-container w-20 h-20"
              key={socialLinks.platform}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="btn-back rounded-xl"/>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <div className="w-full h-full flex justify-center items-center object-contain">
                    <img src={socialLinks.icon} alt="" className="w-7"/>
                </div>
              </div>
            </motion.div>


          </Link>
        ))}
      </div>

      {/* Social Links */}

      <hr className="border-slate-200 my-10" />

      <CTA />
    </motion.section>
  );
};

export default About;
