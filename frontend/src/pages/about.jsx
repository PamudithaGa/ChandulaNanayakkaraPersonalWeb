import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import YouTube from "react-youtube";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
  FaChalkboardTeacher,
  FaMicrophone,
  FaPenNib,
  FaLightbulb,
  FaUserTie,
  FaGraduationCap,
  FaBook,
  FaPodcast,
} from "react-icons/fa";
import { FaChartLine, FaBullhorn, FaHandshake, FaUsers } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import AIOH from "../assets/AIOH.jpg";
import MindMachine from "../assets/MIND_MACHINE.png";
import ThePrefect from "../assets/THE_PREFECTS.PNG";
import { motion } from "framer-motion";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Autoplay } from "swiper/modules";

const Aboutpage = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    if (inView) {
      setPlayVideo(true);
    }
  }, [inView]);

  const videoOptions = {
    playerVars: {
      autoplay: playVideo ? 1 : 0,
      mute: 1,
    },
  };

  const images = [
    {
      src: assets.AIOH1,
      alt: "AIOH Image 1",
      description: "AIOH Management Team",
    },
    {
      src: assets.Chandula5,
      alt: "Vertical Image",
      vertical: true,
      description: "AIOH Accivement Night",
    },
    { src: assets.AIOH2, alt: "AIOH Image 2", description: "WITH AIOH CTO" },
    { src: assets.AIOH3, alt: "AIOH Image 3" },
    { src: assets.Bank3, alt: "Bank Event 3", description: "Wot" },
    { src: assets.Bank8, alt: "Bank Event 8" },
    { src: assets.Bank6, alt: "Bank Event 6", vertical: true },
    {
      src: assets.School1,
      alt: "School Event 1",
      vertical: true,
      description: "Time Period Of School Head Prefect",
    },
    {
      src: assets.School3,
      alt: "School Event 3",
      description: "WITH School Mates",
    },
    {
      src: assets.School4,
      alt: "School Event 4",
      description: "With head of prefects",
    },
  ];

  const services = [
    { icon: <FaChartLine />, title: "Digital Marketing" },
    { icon: <FaBullhorn />, title: "Motivations" },
    { icon: <FaHandshake />, title: "Business Consulting" },
    { icon: <FaUsers />, title: "Leadership Training" },
  ];

  return (
    <div className="bg-black font-sans text-white">
      <section className="bg-BLACK relative mt-[80px] flex h-screen items-center justify-center">
        <motion.div
          className="mx-auto grid w-10/12 grid-cols-1 overflow-hidden rounded-lg bg-black text-white md:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col justify-center p-10">
            <motion.h3
              className="text-4xl uppercase text-gray-300"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              CHANDULA NANAYAKKARA'S
            </motion.h3>
            <div className="my-4 h-1 w-16 bg-red-700"></div>
            <motion.h1
              className="text-5xl font-bold leading-tight md:text-6xl"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              ABOUT.
            </motion.h1>
            <motion.p
              className="text-md mt-4 text-gray-300 md:text-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              "The purest form of entrepreneurship is the relentless pursuit of
              solving problems with passion and purpose"
            </motion.p>
          </div>

          <div className="relative">
            <img
              src={assets.Speak}
              alt="Person"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      <div className="hidden justify-center bg-[#171616] py-48 lg:flex">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              icon: <FaLightbulb />,
              title: "Entrepreneurial Success & Visionary Leadership",
              color: "bg-[#1e1e1e] border border-red-700",
              text: "text-white",
              border: "border-red-700",
              btnText: "text-yellow-500",
              btnBg: "bg-black",
              btnHover: "hover:bg-gray-800 hover:rotate-6",
            },

            {
              icon: <FaUserTie />,
              title: "Leadership & Professional Growth",
              color: "bg-black border border-[#1e1e1e]",
              text: "text-white",
              btnText: "text-blue-500",
              btnBg: "bg-white",
              btnHover: "hover:bg-gray-200 hover:rotate-6",
            },
            {
              icon: <FaGraduationCap />,
              title: "Early Life & Academic Achievements",
              color: "bg-[#1e1e1e] border border-red-700",
              text: "text-white",
              btnText: "text-red-500",
              btnBg: "bg-white",
              btnHover: "hover:bg-gray-200 hover:rotate-6",
            },
            {
              icon: <FaBook />,
              title: "Publications",
              color: "bg-black border border-[#1e1e1e]",
              text: "text-white",
              btnText: "text-purple-500",
              btnBg: "bg-white",
              btnHover: "hover:bg-gray-200 hover:rotate-6",
            },
            {
              icon: <FaPodcast />,
              title: "Podcasts",
              color: "bg-[#1e1e1e] border border-red-700",
              text: "text-white",
              btnText: "text-green-500",
              btnBg: "bg-white",
              btnHover: "hover:bg-gray-200 hover:rotate-6",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex h-[300px] w-[300px] flex-col items-center justify-center ${item.color} p-4 text-center font-bold ${item.text} shadow-lg transition-transform duration-300 hover:scale-105`}
            >
              {item.icon}
              <p>{item.title}</p>
            </div>
          ))}

          <div className="grid h-[300px] w-[300px] grid-cols-2 grid-rows-2 items-center justify-center p-4 text-center text-3xl font-bold text-white shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="h-[130px] w-[130px] items-center justify-center bg-gray-600 px-4 py-12 transition-all duration-300 hover:rotate-6">
              GA
            </div>
            <div className="h-[130px] w-[130px] bg-[#1e1e1e] px-4 py-12 transition-all duration-300 hover:rotate-6">
              LL
            </div>
            <div className="h-[130px] w-[130px] bg-[#1e1e1e] px-4 py-12 text-white transition-all duration-300 hover:rotate-6">
              ER
            </div>
            <div className="h-[130px] w-[130px] bg-blue-50 px-4 py-12 text-black transition-all duration-300 hover:rotate-6">
              Y..
            </div>
          </div>
        </div>
      </div>

      <section className="bg-black px-10 py-20 text-white">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 items-center gap-12 md:grid-cols-1">
          <div className="space-y-12">
            <div id="EntrepreneurialSuccess">
              <h1 className="text-center text-4xl font-bold leading-tight text-white">
                Entrepreneurial Success & Visionary Leadership
              </h1>
              <div className="mt-6 text-lg text-gray-300">
                <p className="text-justify tracking-wide">
                  As the Managing Director & CEO of All In One Holdings (Pvt)
                  Ltd., I lead innovative business ventures, driving growth and
                  transformation. My entrepreneurial mindset, leadership
                  experience, and commitment to excellence have enabled me to
                  build a strong foundation in business and inspire others. I am
                  passionate about fostering leadership, mentoring young
                  professionals, and making a lasting impact in every field I
                  engage in.
                </p>
                <p className="mt-6 text-justify tracking-wide">
                  Before stepping into the corporate world, I authored THE
                  PREFECT (2020), a comprehensive guide for school prefects, and
                  co-authored MIND MACHINE Magazine (2021), sharing insights on
                  personal development. My dedication to leadership also led me
                  to establish the Unique Leadership Academy (U.L.A) in 2018,
                  shaping the next generation of leaders, and to found the Young
                  E-lighters Society (YES), a charitable organization focused on
                  social impact.
                </p>
              </div>
            </div>

            <div
              ref={ref}
              className="mx-auto mt-12 hidden items-center justify-center lg:flex"
            >
              {playVideo && (
                <div className="aspect-w-16 aspect-h-9 max-w-4xl">
                  <YouTube
                    videoId="v3wI1A_HpN4"
                    opts={videoOptions}
                    className="h-full w-full"
                  />
                </div>
              )}
            </div>

            <div>
              <h1 className="mt-12 text-center text-4xl font-bold leading-tight text-white">
                Leadership & Professional Growth
              </h1>
              <div className="mt-6 text-lg text-gray-300">
                <p className="text-justify tracking-wide">
                  My corporate career began at Pan Asia Bank (2018–2022), where
                  I was honored as Best Staff Member of the Year for three
                  consecutive years. During this time, I refined my expertise in
                  business management, leadership, and customer relations,
                  setting a strong foundation for my entrepreneurial journey.
                  Simultaneously, I continued my passion for leadership
                  development, conducting over 50 leadership training programs
                  at Super Masters Training Academy.
                </p>
                <p className="mt-6 text-justify tracking-wide">
                  Prior to my banking career, I pursued extensive training in
                  the travel and tourism industry. I earned a Diploma in Airline
                  Ticketing from the International Airline Ticketing Academy
                  (IATA) in 2015, along with certifications in Airline Cabin
                  Services, Galileo Reservation Systems, and a Preliminary
                  Certificate in Marketing from the Sri Lanka Institute of
                  Marketing. My Diploma in Counseling Level II from Super
                  Masters Training Academy further strengthened my ability to
                  mentor and guide individuals.
                </p>
              </div>
            </div>

            <div>
              <h1 className="mt-12 text-center text-4xl font-bold leading-tight text-white">
                Early Life & Academic Achievements
              </h1>
              <div className="mt-6 text-lg text-gray-300">
                <p className="text-justify tracking-wide">
                  My journey began in Kandy, Sri Lanka, where I excelled in
                  academics, sports, and leadership. I was honored to serve as
                  the Head Prefect of Dharmaraja College (2016–2017), a role
                  that allowed me to inspire and guide my peers. Throughout my
                  school years, I held multiple leadership positions, including
                  President of the Travel & Tourism Club, Treasurer of the
                  Buddhist Student Association, and Chief Organizer of the
                  Commerce Society.
                </p>
                <p className="mt-6 text-justify tracking-wide">
                  My passion for sports was equally strong—I represented my
                  school in India for cricket in 2010, played for the U-13
                  Cricket A Team (2012–2013), and served as Vice-Captain in
                  2012. I was also actively involved in swimming (2008–2012) and
                  scouting (2004–2008), which helped me develop discipline and
                  resilience.
                </p>
                <p className="mt-6 text-justify tracking-wide">
                  From my early school days to my current role as a business
                  leader, my journey has been driven by a passion for growth,
                  leadership, and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-32 text-black">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold">Services From Me</h1>
          <p className="mt-4 text-lg text-gray-600">
            The purest form of entrepreneurship is the relentless pursuit of
            solving problems with passion and purpose
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-lg bg-gray-100 p-6 shadow-md transition-transform hover:scale-105"
              >
                <span className="text-3xl text-red-600">{service.icon}</span>
                <p className="text-lg font-medium">{service.title}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <button className="rounded-md bg-black px-8 py-3 text-lg text-white transition duration-300 hover:bg-gray-800">
              <NavLink to="/contact" className="hover:text-gold text-white">
                BOOK A CONSULTATION
              </NavLink>
            </button>
          </div>
        </div>
      </section>

      <section id="podcasts" className="bg-black px-10 py-20 text-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-extrabold text-red-700">
              Latest Podcasts
            </h2>
            <p className="text-lg text-gray-400">
              Listen to our insightful conversations and stories
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              {
                title: "Entrepreneurship & Innovation",
                description:
                  "A deep dive into how to innovate and succeed in business.",
                image: AIOH,
                link: "https://youtu.be/v3wI1A_HpN4?si=qmz7-mOUPal7Mh_k",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl bg-[#1e1e1e] shadow-lg transition-all duration-300 hover:border hover:border-red-600"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-60 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-red-500">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-400">{item.description}</p>
                </div>
                <div className="absolute bottom-4 right-4">
                  <a
                    href={item.link}
                    className="rounded-full bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
                  >
                    Play
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="publications" className="bg-[#171616] py-20 text-white">
        <div className="lg:px- sm mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-red-600 sm:text-5xl">
              Publications
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
              Explore my published works on leadership, entrepreneurship, and
              personal development.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[
              {
                title: "The Prefect (2020)",
                description:
                  "A comprehensive guide for school prefects, focusing on leadership and responsibilities.",
                link: "https://link_to_publication.com",
                image: ThePrefect,
              },
              {
                title: "Mind Machine Magazine (2021)",
                description:
                  "A magazine co-authored by me, focusing on personal development and mental strength.",
                link: "https://link_to_publication.com",
                image: MindMachine,
              },
            ].map((publication, index) => (
              <a
                key={index}
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl bg-[#1e1e1e] shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={publication.image}
                  alt={publication.title}
                  className="h-64 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-red-500 transition group-hover:text-red-400">
                    {publication.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    {publication.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="flex h-full flex-col items-center py-10">
        <h2 className="text-center text-4xl font-bold">
          Explore My <span className="text-red-600">Gallery</span>
        </h2>

        {/* Swiper for tablets and up */}
        <div className="mt-10 hidden w-[90%] max-w-5xl sm:block">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={70}
            coverflowEffect={{
              rotate: 10,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col items-center rounded-lg shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover rounded-lg transition-opacity duration-500 ${
                    image.vertical ? "h-[600px]" : "h-[550px]"
                  } ${image.horizontal ? "h-[600px]" : "h-[550px]"}`}
                />
                {image.description && (
                  <p className="mt-2 text-center text-sm font-semibold text-gray-700">
                    {image.description}
                  </p>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile version: scrollable list */}
        <div className="mt-8 flex w-full flex-col gap-6 px-4 sm:hidden">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={image.src}
                alt={image.alt}
                className="h-[300px] w-full object-cover"
              />
              {image.description && (
                <p className="mt-2 text-center text-sm font-medium text-gray-700">
                  {image.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
