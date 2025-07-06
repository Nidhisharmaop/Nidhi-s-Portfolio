import React from "react";

const About = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900" id="about">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          About Me
        </h2>
        <p className="max-w-3xl mx-auto text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
          I'm <strong>Nidhi Sharma</strong>, a recent MCA graduate from Central University of Himachal Pradesh with a strong
          foundation in software development and a passion for building web applications.
          I enjoy exploring new technologies and working on real-world projects. With certifications
          in soft skills and cybersecurity, I'm eager to apply my skills in a challenging and growth-oriented environment.
        </p>
      </div>
    </section>
  );
};

export default About;
