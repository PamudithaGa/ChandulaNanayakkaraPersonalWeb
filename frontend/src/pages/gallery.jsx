import React from "react";
import { assets } from "../assets/assets";

const services = [
  {
    icon: "💼",
    title: "Business Consulting",
    description:
      "Our expert business consultants work with you to identify growth opportunities, streamline your operations, and set strategic goals for success.",
    details:
      "Whether you're a startup or an established company, our consulting services provide tailored advice that addresses your unique challenges.",
  },
  {
    icon: "📈",
    title: "Financial Planning",
    description:
      "Get personalized financial strategies that help you maximize profitability, optimize investments, and prepare for future growth.",
    details:
      "We offer comprehensive financial assessments, budgeting tools, and investment advice to secure your company’s future.",
  },
  {
    icon: "🖥️",
    title: "Web Development",
    description:
      "Stand out online with a custom-built website that delivers results. From design to development, we create user-friendly websites that capture your brand’s essence.",
    details:
      "Our web development services include responsive design, SEO optimization, and integration with your business systems.",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description:
      "We design and develop powerful mobile applications for both iOS and Android platforms. Our apps are designed to offer intuitive user experiences.",
    details:
      "From idea to deployment, our team will work with you every step of the way to create an app that engages your customers.",
  },
  {
    icon: "🎨",
    title: "Graphic Design",
    description:
      "Our talented graphic designers create visually striking content that reflects your brand’s identity.",
    details:
      "We’ll help you stand out from the competition with designs that resonate with your audience.",
  },
  {
    icon: "📊",
    title: "Data Analysis",
    description:
      "Transform your raw data into actionable insights. Our data analysis services help you make data-driven decisions.",
    details:
      "We offer customized data analytics that focus on your key performance indicators (KPIs), providing you with the tools you need to improve business outcomes.",
  },
];

const Gallery = () => {
  return (
    <section className="bg-black py-20 text-white">
      <div
        className="fixed hidden h-screen w-1/4 bg-gray-900/90 shadow-2xl backdrop-blur-lg transition-all duration-300 ease-in-out md:block"
        id="sidebar"
      >
        <div className="relative mt-[30px] h-[5px] w-[300px] animate-pulse bg-gradient-to-r from-red-500 to-red-800"></div>

        <div className="flex h-full flex-col items-center justify-center px-8 py-6">
          <h2 className="text-center text-4xl font-semibold leading-tight text-white md:text-5xl">
            We <br /> Will <br /> Discuss
          </h2>
          <h3 className="mt-4 text-center text-5xl font-bold text-amber-400 md:text-6xl">
            So
          </h3>

          <div className="mt-10">
            <a href="/contact">
              <button className="relative overflow-hidden rounded-md bg-white px-8 py-3 text-lg font-semibold text-black transition-all duration-300 hover:bg-black hover:text-white hover:shadow-lg">
                BOOK A CONSULTATION
                <span className="absolute inset-0 scale-0 bg-white opacity-10 transition-all duration-300 group-hover:scale-100"></span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center px-4 text-center lg:ml-[400px] lg:px-0">
        <div className="max-w-5xl py-6">
          <h1 className="text-4xl font-extrabold text-gray-100 md:text-5xl lg:text-6xl">
            Explore <span className="text-red-600">Comprehensive</span> Services
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            We offer a range of services designed to help your business thrive.
            From consulting to data analysis, our expert team is here to guide
            you towards success.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-start gap-4 rounded-xl bg-white/90 p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="text-5xl text-red-600 transition-all duration-300 group-hover:scale-110 group-hover:text-red-500">
                  {service.icon}
                </span>

                <div>
                  <p className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </p>
                  <p className="text-md mt-2 text-gray-600">
                    {service.description}
                  </p>
                  <p className="mt-4 text-sm text-gray-500">
                    {service.details}
                  </p>
                </div>

                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-100 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="ml-[600px] hidden max-w-4xl py-6 text-center md:block">
        <a
          href="https://allinoneholdings.com/"
          className="block text-white transition-transform duration-300 hover:scale-105"
        >
          <div
            className="relative mt-5 h-96 overflow-hidden rounded-xl bg-cover bg-center shadow-lg"
            style={{ backgroundImage: `url(${assets.AIOH})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            <div className="absolute inset-0 flex items-center px-4 text-center">
              <h1 className="text-3xl font-semibold text-white drop-shadow-md md:text-4xl">
                Discover Everything <br /> You Need, <br />
                <span className="text-amber-400">All In One</span> Is The Place!
              </h1>
            </div>
          </div>
        </a>
      </div>

      <div className="mt-6 block text-center md:hidden">
        <a href="/contact">
          <button className="rounded-md bg-red-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-red-700">
            BOOK A CONSULTATION
          </button>
        </a>
      </div>
    </section>
  );
};

export default Gallery;
