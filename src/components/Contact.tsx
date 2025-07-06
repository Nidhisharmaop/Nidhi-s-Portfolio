import React from "react";

const Contact = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900" id="contact">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Contact Me
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
        </p>
        <div className="flex flex-col gap-4 items-center text-slate-800 dark:text-slate-200">
          <p>Email: <a href="mailto:333sharmanidhi.com@gmail.com" className="text-blue-600 hover:underline">333sharmanidhi.com@gmail.com</a></p>
          <p>Phone: <a href="tel:+918580518746" className="text-blue-600 hover:underline">+91 85805 18746</a></p>
          <p>Location: Kangra, Himachal Pradesh</p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/Nidhisharmaop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/Nidhisharmaop
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/nidhi-sharma-7b70622b9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/nidhi-sharma-7b70622b9
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
