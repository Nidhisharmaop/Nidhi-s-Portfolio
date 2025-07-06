import React from "react";

const Hero = () => {
  return (
    <section className="text-center py-20 bg-slate-100 dark:bg-slate-800 relative">
      <div className="container mx-auto px-4 bg-white/80 dark:bg-slate-900/80 rounded-lg backdrop-blur-sm">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
          Hi, I'm <span className="text-blue-600">Nidhi Sharma</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-6">
          MCA Graduate | Aspiring Software Developer
        </p>
        <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-md">
          I’m an MCA graduate passionate about web development and software engineering.
          Skilled in Python, Java, C, HTML/CSS, JavaScript, and SQL, I enjoy solving real-world
          problems using technology. Currently exploring backend and full-stack development opportunities.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="mailto:333sharmanidhi.com@gmail.com"
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/Nidhisharmaop"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
