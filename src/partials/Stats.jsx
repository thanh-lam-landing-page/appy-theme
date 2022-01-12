import React from "react";

const Stats = () => {
  return (
    <section className="relative">
      {/* Background gradient (light version only) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-128 bg-gradient-to-t from-gray-100 to-white pointer-events-none -z-10 dark:hidden"
        aria-hidden="true"
      />
      {/* Stats */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="grid gird-cols-2 gap-4 lg-gap-6 md:grid-cols-4 text-center">
            {/* 1st item */}
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]">
              <div className="font-red-hat-display text-3xl font-extrabold tracking-tighter mb-1">2.4M</div>
              <div className="text-gray-600 dark:text-gray-400">Days turn around</div>
            </div>
            {/* 2st item */}
            <div
              className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-stats]"
              data-aos-delay="100">
              <div className="font-red-hat-display text-3xl font-extrabold tracking-tighter mb-1">7M</div>
              <div className="text-gray-600 dark:text-gray-400">Days turn around</div>
            </div>
            {/* 3st item */}
            <div
              className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-stats]"
              data-aos-delay="200">
              <div className="font-red-hat-display text-3xl font-extrabold tracking-tighter mb-1">7.4%</div>
              <div className="text-gray-600 dark:text-gray-400">Days turn around</div>
            </div>
            {/* 4st item */}
            <div
              className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-stats]"
              data-aos-delay="300">
              <div className="font-red-hat-display text-3xl font-extrabold tracking-tighter mb-1">49K</div>
              <div className="text-gray-600 dark:text-gray-400">Days turn around</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
