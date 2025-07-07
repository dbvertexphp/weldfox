import React, { useEffect } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../animation";

interface FooterLink {
  label: string;
  sectionId?: string;
  route?: string;
}

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      scrollToSection(sectionId);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const sectionId = location.hash.replace("#", "");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, [location]);

  const quickLinks: FooterLink[] = [
    { label: "Home", sectionId: "home" },
    { label: "About Us", sectionId: "about-us" },
    { label: "Products", sectionId: "products" },
    { label: "Services", sectionId: "services" },
    { label: "Contact", sectionId: "contact" },
  ];

  return (
    <footer id="footer" className="bg-[#0d173a] text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          {/* First Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
			viewport={{ once: true }}
            variants={zoomInVariants}
            className="space-y-6"
          >
            <Link to="/" className="text-xl font-bold text-white">
              WELDFOX
            </Link>
            <p className="text-gray-300">
              WELDFOX – Precision in every weld, trust in every solution.
            </p>
          </motion.div>

          {/* Second Column - Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
			viewport={{ once: true }}
            variants={slideUpVariants}
          >
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleScrollToSection(link.sectionId!)}
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Third Column - Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
			viewport={{ once: true }}
            variants={zoomInVariants}
          >
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone size={18} className="mr-3 flex-shrink-0" />
                <a
                  href="tel:+917016337587"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +91 70163 - 37587
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@kkexporter.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@kkexporter.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Fourth Column - Contact Us (Address Only) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
			viewport={{ once: true }}
            variants={slideUpVariants}
          >
            <h4 className="font-semibold text-lg mb-4">Location</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  E-64, 9 Street, Purvi Soc-1, Hiarabaug,
                  Surat, Gujarat, India 395006
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-4 border-t border-gray-800">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
			viewport={{ once: true }}
            variants={zoomInVariants}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-sm text-gray-400">
              © 2025 WELDFOX. All Rights Reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
