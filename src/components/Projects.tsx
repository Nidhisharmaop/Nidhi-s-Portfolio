import React from "react";

const Projects = () => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-800" id="projects">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Projects
        </h2>
        <div className="max-w-4xl mx-auto mt-10 grid gap-8">
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 text-left">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              Road Safety Awareness & Reporting
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              A map-based web application built with PHP, Bootstrap, MySQL, and Google Maps API to report road incidents in Himachal Pradesh.
              The system includes image upload, location tagging, and a role-based authentication system for admins and users.
            </p>
            <a
              href="https://github.com/Nidhisharmaop/roadsafety"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Project on GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
