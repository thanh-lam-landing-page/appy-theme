import React from "react";
import CheckSvg from "../assets/svg/CheckSvg";

const HeroHome = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-10">
          {/* Hero content */}
          <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="h1 lg:text-6xl mb-4 font-red-hat-display font-extrabold" data-aos="fade-down">
                Your website, reimagined
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">
                Our landing page template works on all devices, so you only have to set it up once, and get beautiful
                results forever.
              </p>
              {/* CTA form */}
              <form className="mt-8" data-aos="fade-down" data-aos-delay="300">
                <div className="flex flex-col sm:flex-row justify-center max-w-sm mx-auto sm:max-w-md md:mx-0">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    aria-label="Phone number"
                    className="form-input w-full mb-2 sm:mb-0 sm:mr-2"
                  />
                  <a href="#0" className="btn text-white bg-teal-500 hover:bg-teal-400 flex-shrink-0">
                    Request code
                  </a>
                </div>
              </form>
              <ul className="max-w-sm sm:max-w-md mx-auto md:max-w-none text-gray-600 dark:text-gray-400 mt-8 -mb-2" data-aos="fade-down" data-aos-delay="450">
                <li className="flex items-center mb-2">
                  <CheckSvg className="w-3 h-3 fill-current text-teal-400 mr-2 flex-shrink-0" />
                  <span>Lorem ipsum is placeholder text commonly.</span>
                </li>
                <li className="flex items-center mb-2">
                  <CheckSvg className="w-3 h-3 fill-current text-teal-400 mr-2 flex-shrink-0" />
                  <span>Lorem ipsum is placeholder text commonly.</span>
                </li>
                <li className="flex items-center mb-2">
                  <CheckSvg className="w-3 h-3 fill-current text-teal-400 mr-2 flex-shrink-0" />
                  <span>Lorem ipsum is placeholder text commonly.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
