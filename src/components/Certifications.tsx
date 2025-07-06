import React from "react";

const Certifications = () => {
  const certifications = [
    {
      title: "Soft Skills Training",
      organization: "TCS iON",
      year: "2024",
      mode: "Online",
    },
    {
      title: "Cybersecurity Analyst Virtual Internship",
      organization: "Tata & Forage",
      year: "2024",
      mode: "Online",
    },
  ];

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-800" id="certifications">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">
          Certifications
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-lg shadow p-6 text-left"
            >
              <h3 className="text-xl font-semibold text-blue-600">{cert.title}</h3>
              <p className="text-slate-700 dark:text-slate-300">
                {cert.organization} — {cert.mode} ({cert.year})
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
