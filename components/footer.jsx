import { Github, GithubIcon, Instagram, Linkedin, LinkedinIcon, LucideInstagram, Mail, Twitter, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800/50 py-8 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-6 text-sm text-gray-400">
        Made with ❤️ by Sahil Borkar.
      </div>

      <div className="flex gap-4 items-center">
        <a
          href="https://www.linkedin.com/in/sahilborkar23/"
          className="text-gray-400"
        >
          <LinkedinIcon />
        </a>
        <a
          href="https://www.instagram.com/sahilborkar._/"
          className="text-gray-400"
        >
          <LucideInstagram className="w-5 h-5" />
        </a>
        <a href="https://github.com/sahilborkar23" className="text-gray-400">
          <GithubIcon className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
