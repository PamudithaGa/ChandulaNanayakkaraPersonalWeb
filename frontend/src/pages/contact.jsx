// import React from "react";
// import {
//   FaFacebookF,
//   FaYoutube,
//   FaLinkedinIn,
//   FaTwitter,
//   FaInstagram,
// } from "react-icons/fa";
// import { MdEmail, MdCall } from "react-icons/md";

// const ContactPage = () => {
//   return (
//     <div className="mt-[40px] bg-black px-6 py-16 text-white lg:py-[150px]">
//       <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
//         <div>
//           <h1 className="text-4xl font-bold">Contact Me</h1>
//           <h2 className="mt-2 text-2xl font-semibold text-red-500">
//             Get In Touch
//           </h2>
//           <p className="mt-4 text-gray-400">
//             Connect with Chandula Nanayakkara – Inspiring Leader, Visionary
//             Mentor, and Catalyst for Success. Reach out today and unlock your
//             potential!
//           </p>

//           <div className="mt-6 space-y-4">
//             <div className="flex items-center gap-3">
//               <MdEmail className="h-7 w-7 text-white transition-colors hover:text-blue-500" />
//               <span className="text-gray-300">
//                 chandula.nanayakkara@gmail.com
//               </span>
//             </div>
//             <div className="flex items-center gap-3">
//               <MdCall className="h-7 w-7 text-white transition-colors hover:text-blue-500" />
//               <span className="text-gray-300">+94 77 672 2709</span>
//             </div>
//           </div>

//           <div className="mt-6 flex gap-4">
//             <a
//               href="https://www.facebook.com/chandulan"
//               className="transition-transform hover:scale-110"
//             >
//               <FaFacebookF className="h-8 w-8 text-white transition-colors duration-300 hover:text-blue-500" />
//             </a>
//             <a
//               href="https://youtube.com/@allinoneholdings?si=twczCl2H6PVYonHN"
//               className="transition-transform hover:scale-110"
//             >
//               <FaYoutube className="h-8 w-8 text-white transition-colors duration-300 hover:text-red-500" />
//             </a>
//             <a
//               href="https://www.instagram.com/chandula_nanayakkara/"
//               className="transition-transform hover:scale-110"
//             >
//               <FaInstagram className="h-8 w-8 text-white transition-colors duration-300 hover:text-pink-500" />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/chandula-nanayakkara-a3b111120/"
//               className="transition-transform hover:scale-110"
//             >
//               <FaLinkedinIn className="h-8 w-8 text-white transition-colors duration-300 hover:text-blue-400" />
//             </a>
//             <a
//               href="https://www.threads.net/@chandula_nanayakkara"
//               className="transition-transform hover:scale-110"
//             >
//               <FaTwitter className="h-8 w-8 text-white transition-colors duration-300 hover:text-blue-400" />
//             </a>
//           </div>
//         </div>

//         <div className="rounded-xl border border-gray-700 bg-[#171616] p-8 shadow-lg">
//           <h2 className="text-2xl font-semibold text-white">Send a Message</h2>

//           <form className="mt-6 space-y-4">
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <input
//                   type="text"
//                   name="first_name"
//                   placeholder="First Name"
//                   className="w-full rounded-lg border border-gray-600 bg-[#1e1e1e] p-3 text-white focus:border-red-500 focus:outline-none"
//                   required
//                 />
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   name="last_name"
//                   placeholder="Last Name"
//                   className="w-full rounded-lg border border-gray-600 bg-[#1e1e1e] p-3 text-white focus:border-red-500 focus:outline-none"
//                   required
//                 />
//               </div>
//             </div>

//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               className="w-full rounded-lg border border-gray-600 bg-[#1e1e1e] p-3 text-white focus:border-red-500 focus:outline-none"
//               required
//             />

//             <input
//               type="text"
//               name="contact_number"
//               placeholder="Contact Number"
//               className="w-full rounded-lg border border-gray-600 bg-[#1e1e1e] p-3 text-white focus:border-red-500 focus:outline-none"
//               required
//             />

//             <input
//               type="text"
//               name="subject"
//               placeholder="Subject"
//               className="w-full rounded-lg border border-gray-600 bg-[#1e1e1e] p-3 text-white focus:border-red-500 focus:outline-none"
//               required
//             />

//             <textarea
//               name="message"
//               placeholder="Message"
//               rows="4"
//               className="w-full rounded-lg border border-gray-600 bg-[#1e1e1e] p-3 text-white focus:border-red-500 focus:outline-none"
//               required
//             />

//             <button
//               type="submit"
//               className="w-full rounded-lg bg-red-700 px-6 py-2 text-white transition-all duration-300 hover:bg-red-900"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;







import React, { useRef } from "react";
import emailjs from "emailjs-com";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";

const ContactPage = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yfqaflt",     
        "template_kplovqr", 
        form.current,
        "drWaOS1M4jZoA-zDE"      
      )
      .then(
        (result) => {
          console.log("✅ Message sent", result.text);
          alert("Message sent successfully! 🎉");
          form.current.reset();
        },
        (error) => {
          console.error("❌ Failed", error.text);
          alert("Something went wrong 😢");
        }
      );
  };

  return (
    <div className="mt-[40px] bg-black px-6 py-16 text-white lg:py-[150px]">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold">Contact Me</h1>
          <h2 className="mt-2 text-2xl font-semibold text-red-500">Get In Touch</h2>
          <p className="mt-4 text-gray-400">
            Connect with Chandula Nanayakkara – Inspiring Leader, Visionary Mentor, and Catalyst for Success. Reach out today and unlock your potential!
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <MdEmail className="h-7 w-7 text-white transition-colors hover:text-blue-500" />
              <span className="text-gray-300">chandula.nanayakkara@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MdCall className="h-7 w-7 text-white transition-colors hover:text-blue-500" />
              <span className="text-gray-300">+94 77 672 2709</span>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <a href="https://www.facebook.com/chandulan" className="transition-transform hover:scale-110">
              <FaFacebookF className="h-8 w-8 text-white hover:text-blue-500" />
            </a>
            <a href="https://youtube.com/@allinoneholdings?si=twczCl2H6PVYonHN" className="transition-transform hover:scale-110">
              <FaYoutube className="h-8 w-8 text-white hover:text-red-500" />
            </a>
            <a href="https://www.instagram.com/chandula_nanayakkara/" className="transition-transform hover:scale-110">
              <FaInstagram className="h-8 w-8 text-white hover:text-pink-500" />
            </a>
            <a href="https://www.linkedin.com/in/chandula-nanayakkara-a3b111120/" className="transition-transform hover:scale-110">
              <FaLinkedinIn className="h-8 w-8 text-white hover:text-blue-400" />
            </a>
            <a href="https://www.threads.net/@chandula_nanayakkara" className="transition-transform hover:scale-110">
              <FaTwitter className="h-8 w-8 text-white hover:text-blue-400" />
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-gray-700 bg-[#171616] p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-white">Send a Message</h2>

          <form ref={form} onSubmit={sendEmail} className="mt-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
                className="w-full rounded-lg border border-gray-600 bg-[#1e1e1e] p-3 text-white focus:border-red-500"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
                className="w-full rounded-lg border border-gray-600 bg-[#1e1e1e] p-3 text-white focus:border-red-500"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full rounded-lg border border-gray-600 bg-[#1e1e1e] p-3 text-white focus:border-red-500"
            />

            <input
              type="text"
              name="contact_number"
              placeholder="Contact Number"
              required
              className="w-full rounded-lg border border-gray-600 bg-[#1e1e1e] p-3 text-white focus:border-red-500"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full rounded-lg border border-gray-600 bg-[#1e1e1e] p-3 text-white focus:border-red-500"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              required
              className="w-full rounded-lg border border-gray-600 bg-[#1e1e1e] p-3 text-white focus:border-red-500"
            ></textarea>

            <button
              type="submit"
              className="w-full rounded-lg bg-red-700 px-6 py-2 text-white transition-all hover:bg-red-900"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
