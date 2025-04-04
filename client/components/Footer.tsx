import { FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-gray-700 py-12 flex flex-col items-center">
      <div className="w-[90%] max-w-7xl px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Logo & Description */}
        <div className="text-center md:text-left">
          <div className="flex flex-row items-center gap-3 hover:cursor-pointer justify-center md:justify-start">
            <img src="/logo.png" alt="CodeNGrave Logo" className="w-16" />
            <p className="text-4xl font-bold text-gray-900">codeNGrave</p>
          </div>
          <p className="mt-6 text-lg max-lg:hidden md:text-xl text-gray-700 font-semibold font-mono leading-relaxed">
            Transforming creativity into precision—convert
            <br className="hidden md:block" /> designs into CNC-ready engravings
            effortlessly.
          </p>
          <a
            className="flex gap-5 mt-6 text-gray-600 justify-center md:justify-start"
            href="https://github.com/dheerajGits/CodeNgrave"
            target="_blank"
          >
            <p className="text-lg hover:text-blue-500 hover:cursor-pointer">
              Source Code Repository:
            </p>
            <FaGithub size={28} />
          </a>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Contact Info
          </h3>
          <ul className="space-y-3 text-lg">
            <li className="flex items-center justify-center md:justify-start gap-3 hover:cursor-pointer">
              📍 Chandigarh
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaPhone size={22} />{" "}
              <a href="tel:+917814403974" className="hover:underline">
                +91 7814403974
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaEnvelope size={22} />{" "}
              <a
                href="mailto:dheerajsadan2002@gmail.com"
                className="hover:underline"
              >
                dheerajsadan2002@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-lg text-gray-600 w-full px-6">
        <p>
          © 2025 codeNGrave. All rights reserved.
          <span className="mx-4 hidden md:inline">|</span>
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 mt-3 md:mt-0">
          <a href="#" className="hover:text-blue-500">
            Privacy Policy
          </a>
          <span className="hidden md:block">|</span>
          <a href="#" className="hover:text-blue-500">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
