import React from "react";

const Skills = () => {
  const skills = [
    "Python",
    "Java",
    "C",
    "HTML/CSS",
    "JavaScript",
    "SQL",
    "Bootstrap",
    "GitHub",
    "VS Code",
    "Android Studio",
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-900" id="skills">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">
          Technical Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
