import { useState } from "react";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { assets } from "../assets/assets";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
  FaChalkboardTeacher,
  FaMicrophone,
  FaPenNib,
  FaLightbulb,
  FaInstagram,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SpotlightCard from "../components/SpotlightCard/SpotlightCard";
import SplitText from "../components/SplitText/SplitText";
//import { motion } from "framer-motion";

const Homepage = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact_number: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    8;
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.first_name} ${formData.last_name}`,
          email: formData.email,
          contactNumber: formData.contact_number,
          message: formData.message,
        }),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          contact_number: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message.");
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const testimonials = [
    {
      name: "Naleen Edirisinghe",
      position: "Director/ CEO · Pan Asia Banking Corporation PLC",
      text: "Chandula worked for Pan Asia Bank and was one of the most focused workers continuously bench marking performance standards and driving teams for success. He is a natural leader and commits himself for continuous growth!!",
      image: assets.Nalin,
    },
    {
      name: "Manuja Somarathne",
      position: "Managing Director - CADD Centre Lanka",
      text: "Chandula Nanayakkara is an individual I have known for approximately five to six years. I recall our first meeting, shortly after he completed his A-Levels, when he visited my office. Even at that time, I recognized his admirable personality and excellent interpersonal skills",
      image: assets.Manjula,
    },
    {
      name: "Indika De Zoysa",
      position:
        "Chairman - FITIS. Council Member - Computer Society of Sri Lanka",
      text: "As time went on, I became aware of Chandula's remarkable achievement: The Prefect Book Publication. He graciously shared his work with me, seeking further improvements. Chandula's ambition and target-oriented mindset shine through in his pursuits, complemented by a diverse range of skills and capacities.",
      image: assets.Indika_De_Zoysa,
    },
    {
      name: "Samith Benaragama",
      position:
        "Counseling Human Resources Development Speaker Trainer and Consultant",
      text: "As A Professional Trainer on Motivation and Leadership See Chandula Nanayakkara as An Inspired Motivated Young Leader Who Would Be Great Asset to The Country as He Possesses Exceptional Qualities of a Leader.",
      image: assets.samith,
    },
    {
      name: "Adamsmith Samaranayake",
      position: "Senior English Lecturer",
      text: "Head Prefect of Dharmaraja College, Kandy Chandula Nanayakkara Is an Honorable and Humane Student, Leader, Who Values Warm Relationship Rather Than Seeking Power. The Perfect Prefect Speaks to Nanayakkara Who Sees His Post as More Of A Gift.",
      image: assets.adamsith,
    },
    {
      name: "Dr. Manjula Sandirigama",
      position:
        "Senior Lecturer (University of Peradeniya). Attorney-at-Law (Sri Lanka)",
      text: "Listening To Him and Looking at His Work Made a Very Positive Impression in Me on Him, And His Leadership. The Draft Version (The Prefect book) Had Quite A Few Improvements to Be Made, And We Started the Correction Process Via Email for Many Weeks, And Was Even More Impressed by His Passion, Persistence And, Endurance.",
      image: assets.sarath,
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="bg-black font-sans text-white">
      <section className="bg-BLACK relative mt-[80px] flex h-screen items-center justify-center">
        <motion.div
          className="mx-auto grid w-10/12 grid-cols-1 overflow-hidden rounded-lg bg-black text-white md:grid-cols-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="flex flex-col justify-center p-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.h3
              className="mt-[200px] text-4xl uppercase text-gray-300 lg:mt-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              CHANDULA NANAYAKKARA
            </motion.h3>

            <motion.div
              className="my-4 h-1 w-16 bg-red-700"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            ></motion.div>
            <motion.h1
              className="text-5xl font-bold leading-tight md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Enterpreneur.
              <br />
              Researcher.
              <br /> Inverntor.
              <br /> Author.
            </motion.h1>

            <motion.p
              className="mt-4 text-lg text-gray-300 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              “Unleashing the untapped potential within our youth is the key to
              unlocking a revolution of empowerment that will reshape our
              society and create a legacy of limitless progress.”
            </motion.p>

            <motion.div
              className="mt-6 flex justify-center gap-6 md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {[
                {
                  href: "https://www.facebook.com/chandulan",
                  icon: (
                    <FaFacebookF className="h-8 w-8 text-white hover:text-blue-500" />
                  ),
                },
                {
                  href: "https://www.instagram.com/chandula_nanayakkara?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                  icon: (
                    <FaInstagram className="h-8 w-8 text-white hover:text-red-500" />
                  ),
                },
                {
                  href: "https://www.linkedin.com/in/chandula-nanayakkara-a3b111120/",
                  icon: (
                    <FaLinkedinIn className="h-8 w-8 text-white hover:text-blue-400" />
                  ),
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="transition-transform hover:scale-110"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src={assets.ChandulaImage3}
              alt="Person"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      <div className="py-16 pb-[170px] pt-[220px] text-white sm:pl-[40px] lg:pl-[90px] lg:pr-[90px] lg:pt-[200px]">
        <motion.div
          className="mt-10 grid grid-cols-1 items-center gap-10 px-6 sm:grid-cols-2 sm:px-10 md:grid-cols-2 md:px-10 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="order-first sm:order-none">
            <motion.h1
              className="text-5xl font-extrabold sm:text-7xl"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Who am I?
            </motion.h1>
            <motion.h1
              className="text-6xl font-extrabold text-gray-300 lg:text-8xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              What I do?
            </motion.h1>
          </div>

          <motion.div className="grid gap-6">
            {[
              {
                title: "I am Entrepreneur",
                text: "Self-improvement, mentorship, and personal growth.",
                icon: <FaChalkboardTeacher />,
              },
              {
                title: "I Innovate",
                text: "Transforming ideas into groundbreaking solutions.",
                icon: <FaLightbulb />,
              },
              {
                title: "I Coach",
                text: "Self-improvement, mentorship, and personal growth.",
                icon: <FaChalkboardTeacher />,
              },
              {
                title: "I Speak",
                text: "Empowering audiences through motivational talks.",
                icon: <FaMicrophone />,
              },
              {
                title: "I Write",
                text: "Compelling storytelling and impactful literature.",
                icon: <FaPenNib />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6 rounded-xl border-l-4 border-red-700 bg-[#171616] p-6 shadow-lg transition-transform hover:scale-105 hover:border-red-500"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl text-red-500">{item.icon}</div>
                <div>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-400">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="flex h-full w-full flex-col-reverse items-center justify-center bg-[#171616] py-0 md:flex-row md:justify-center md:gap-10 lg:px-10 lg:py-[110px]">
        {/* About Text */}
        <motion.div
          className="max-w-3xl px-4 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInRight}
        >
          <h1 className="mt-11 text-3xl font-extrabold text-white sm:text-4xl lg:mt-0">
            About Me
          </h1>
          <motion.div
            className="mx-auto my-4 h-1 w-16 bg-red-700 md:mx-0"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          ></motion.div>

          <p className="mt-4 text-justify text-base leading-relaxed text-gray-300 sm:text-lg">
            I embody enthusiasm, exceptional leadership qualities, and abundant
            innovative ideas, making me a truly inspiring young man. My
            accomplishments in various fields, from sports to community service,
            reflect my dedication and drive to make a positive impact on the
            world.
            <br />
            With a strong passion for technology and digital marketing, I
            leverage cutting-edge innovations to drive brand growth, optimize
            digital strategies, and create impactful online experiences that
            connect with audiences globally.
          </p>

          <ul className="mt-6 space-y-3 text-gray-400">
            {[
              { label: "Name", value: "Chandula Nanayakkara" },
              {
                label: "Occupation",
                value: "Founder & CEO at All In One Holdings",
              },
              { label: "Phone", value: "+94 77 672 2709" },
              { label: "Email", value: "hello@chandulananayakkara.com" },
              { label: "Nationality", value: "Sri Lankan" },
            ].map((item, index) => (
              <li
                key={index}
                className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3"
              >
                <span className="font-semibold text-red-500">
                  {item.label}:
                </span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <button className="border border-white px-6 py-2 text-base font-semibold text-white transition duration-300 hover:bg-white hover:text-black sm:px-8 sm:py-3 sm:text-lg">
              <NavLink to="./about"> Learn More</NavLink>
            </button>
          </div>
        </motion.div>

        <motion.div
          className="relative flex justify-center pl-0 pr-0 md:pl-[10px] md:pr-[90px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInLeft}
        >
          <img
            src={assets.ChandulaImage3}
            alt="Chandula"
            className="w-full max-w-xs rounded-tr-[90px] shadow-lg transition-transform duration-500 hover:scale-105 sm:max-w-sm md:w-96"
          />
          <div className="absolute -bottom-5 left-1/2 w-20 -translate-x-1/2 sm:w-28">
            <img src={assets.Sign} alt="Signature" className="hidden opacity-80 lg:block" />
          </div>
        </motion.div>
      </div>



      <div className="flex flex-col items-center bg-black px-6 py-20 text-white lg:px-10 lg:py-[110px]">
        <h1 className="text-center text-5xl font-extrabold">My Publications</h1>

        <motion.div
          className="my-2 h-1 w-16 bg-red-700"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        ></motion.div>

        {/* The PREFECT */}
        <section className="flex w-full max-w-7xl flex-col items-center justify-between gap-10 py-16 md:flex-row">
          <motion.div
            className="text-center md:w-1/2 md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <h2 className="text-3xl font-bold uppercase">The PREFECT</h2>
            <p className="mt-4 text-justify text-lg leading-relaxed text-gray-300">
              This book delves into mid-air haptics via ultrasound phased
              arrays, introducing pioneering human-computer interaction (HCI)
              paradigms. It’s a collaborative masterpiece, co-edited with
              William Frier, Euan Freeman, Claudio Pacchierotti, and Takayuki
              Hoshi, and includes insights from over 30 field experts. As the
              first comprehensive resource on this topic, it has significantly
              influenced a global community of scientists and engineers
              dedicated to advancing haptic technology.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            <img
              src={assets.ThePrefect}
              alt="Book Cover"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </motion.div>
        </section>

        {/* MIND MACHINE */}
        <section className="flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-10 py-16 md:flex-row">
          <motion.div
            className="flex justify-center md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <img
              src={assets.MindMachine}
              alt="Book Cover"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            className="text-center md:w-1/2 md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            <h2 className="text-3xl font-bold uppercase">MIND MACHINE</h2>
            <p className="mt-4 text-justify text-lg leading-relaxed text-gray-300">
              Mind Machine is one of the best personal grooming booklets
              including various types of articles from different subjects such
              as Mind, New Thinking Technology, Meditation, Importance of the
              Diary, Human Mind and Works, Programming, Leadership, Motivation,
              Cardio Training, and more.
            </p>
          </motion.div>
        </section>
      </div>


      <div className="relative h-[900px] lg:h-[700px]">
        <img
          src={assets.Comments}
          alt="Background"
          className="absolute inset-0 h-full object-cover opacity-65 lg:h-full lg:w-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60">
          <div className="flex flex-col items-start text-left">
            <h1 className="mt-3 text-5xl font-bold text-white">
              What People Say?
            </h1>
            <div className="mt-2 h-1 w-16 bg-red-700"></div>
          </div>

  
          <div className="mt-10 gap-11 px-10 sm:w-1/2 md:grid md:grid-cols-1 lg:gap-6">
            <AnimatePresence mode="wait">
              {testimonials.slice(index, index + 2).map((person, i) => (
                <motion.div
                  key={index + i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-xl rounded-tl-[60px] bg-[#171616] p-5 text-left"
                >
                  <div className="gri grid-cols-2">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="h-16 w-16 rounded-full"
                    />
                    <div className="">
                      <h2 className="text-lg font-semibold">{person.name}</h2>
                      <p className="text-sm text-gray-400">{person.position}</p>
                    </div>
                    <div>
                      <p className="mt-3 text-gray-300">{person.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center bg-black py-16">
        <div className="w-11/12 max-w-4xl rounded-xl border border-red-700 bg-[#171616] px-8 py-12 text-center shadow-lg">
          <h1 className="text-4xl font-extrabold text-white">Get In Touch</h1>
          <p className="mt-2 text-gray-400">
            Feel free to reach out for collaborations or inquiries.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-600 bg-[#1e1e1e] p-3 text-white focus:border-red-500 focus:outline-none"
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-600 bg-[#1e1e1e] p-3 text-white focus:border-red-500 focus:outline-none"
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-600 bg-[#1e1e1e] p-3 text-white focus:border-red-500 focus:outline-none"
              required
            />

            <input
              type="text"
              name="contact_number"
              placeholder="Contact Number"
              value={formData.contact_number}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-600 bg-[#1e1e1e] p-3 text-white focus:border-red-500 focus:outline-none"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-600 bg-[#1e1e1e] p-3 text-white focus:border-red-500 focus:outline-none"
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-600 bg-[#1e1e1e] p-3 text-white focus:border-red-500 focus:outline-none"
              required
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-red-700 px-6 py-2 text-white transition-all duration-300 hover:bg-red-900"
            >
              Send Message
            </button>
          </form>

          {status && <p className="mt-4 text-gray-300">{status}</p>}

          <div className="mt-10 flex justify-center gap-6">
            <a href="#" className="transition-transform hover:scale-110">
              <FaFacebookF className="h-9 w-9 text-white transition-colors duration-300 hover:text-blue-500" />
            </a>
            <a href="#" className="transition-transform hover:scale-110">
              <FaYoutube className="h-9 w-9 text-white transition-colors duration-300 hover:text-red-500" />
            </a>
            <a href="#" className="transition-transform hover:scale-110">
              <FaLinkedinIn className="h-9 w-9 text-white transition-colors duration-300 hover:text-blue-400" />
            </a>
            <a href="#" className="transition-transform hover:scale-110">
              <FaTwitter className="h-9 w-9 text-white transition-colors duration-300 hover:text-blue-400" />
            </a>
          </div>
        </div> */}

      <div className="flex justify-center bg-black py-16">
        <div className="w-11/12 max-w-4xl rounded-xl border border-red-700 bg-[#171616] px-8 py-12 text-center shadow-lg">
          <h1 className="text-4xl font-extrabold text-white">Get In Touch</h1>
          <p className="mt-2 text-gray-400">
            Feel free to reach out for collaborations or inquiries.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-600 bg-[#1e1e1e] p-3 text-white focus:border-red-500 focus:outline-none"
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-600 bg-[#1e1e1e] p-3 text-white focus:border-red-500 focus:outline-none"
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-600 bg-[#1e1e1e] p-3 text-white focus:border-red-500 focus:outline-none"
              required
            />

            <input
              type="text"
              name="contact_number"
              placeholder="Contact Number"
              value={formData.contact_number}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-600 bg-[#1e1e1e] p-3 text-white focus:border-red-500 focus:outline-none"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-600 bg-[#1e1e1e] p-3 text-white focus:border-red-500 focus:outline-none"
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-600 bg-[#1e1e1e] p-3 text-white focus:border-red-500 focus:outline-none"
              required
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-red-700 px-6 py-2 text-white transition-all duration-300 hover:bg-red-900"
            >
              Send Message
            </button>
          </form>

          {status && <p className="mt-4 text-gray-300">{status}</p>}

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <a href="#" className="transition-transform hover:scale-110">
              <FaFacebookF className="h-9 w-9 text-white transition-colors duration-300 hover:text-blue-500" />
            </a>
            <a href="#" className="transition-transform hover:scale-110">
              <FaYoutube className="h-9 w-9 text-white transition-colors duration-300 hover:text-red-500" />
            </a>
            <a href="#" className="transition-transform hover:scale-110">
              <FaLinkedinIn className="h-9 w-9 text-white transition-colors duration-300 hover:text-blue-400" />
            </a>
            <a href="#" className="transition-transform hover:scale-110">
              <FaTwitter className="h-9 w-9 text-white transition-colors duration-300 hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
