import React from "react";
import { Mail, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0b1325] to-[#0f1b2d] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white font-bold">
                IN
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold">INNOSQUARES</h3>
                <p className="text-xs tracking-widest">INTELLIGENCE REDEFINED</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-6">
              Empowering businesses with intelligent AI solutions.
            </p>

            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">Industry Solutions</li>
              <li className="hover:text-white cursor-pointer">Get Started</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Industries</li>
              <li className="hover:text-white cursor-pointer">Insights</li>
              <li className="hover:text-white cursor-pointer">Partners</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="flex items-center gap-2">
                <Mail size={16} /> Email Us
              </li>
              <li>San Francisco, CA</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">

          <p>© 2024 Innosquares. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
