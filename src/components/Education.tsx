import React from "react";

const Education = () => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-800" id="education">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">
          Education
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 text-left">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-600">Masters of Computer Application (MCA)</h3>
            <p className="text-slate-700 dark:text-slate-300">
              Central University of Himachal Pradesh — Dharamshala (2023 – 2025)
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">CGPA: 8.4</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-600">Bachelor of Science in Physics</h3>
            <p className="text-slate-700 dark:text-slate-300">
              Himachal Pradesh University (2019 – 2022)
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">Percentage: 65%</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-600">Higher Secondary (Science)</h3>
            <p className="text-slate-700 dark:text-slate-300">
              GSSS Rakkar, Himachal Pradesh (2018)
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">Percentage: 70.6%</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-600">Secondary Schooling</h3>
            <p className="text-slate-700 dark:text-slate-300">
              GSSS Rakkar, Himachal Pradesh (2016)
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">Percentage: 75.6%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
