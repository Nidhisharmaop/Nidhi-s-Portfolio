import React from "react";

const FrontPage = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-slate-100 dark:bg-slate-900">
      <img
        src="/nidhi.jpg"
        alt="Nidhi Sharma"
        className="w-96 h-96 rounded-full object-cover shadow-lg mb-8 border-4 border-blue-600"
      />
      <a
        href="/home"
        className="px-12 py-5 bg-blue-600 text-white text-2xl rounded-full shadow hover:bg-blue-700 transition font-semibold"
      >
        View My Portfolio
      </a>
    </section>
  );
};

export default FrontPage;