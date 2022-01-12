/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import Image from "next/image";
import React, { useState } from "react";
import CheckSvg from "../assets/svg/CheckSvg";
import GlowSvg from "../assets/svg/GlowSvg";
import PlayButton from "../images/play-button.svg";
import PhoneImage from "../images/mockup-image-01.jpg";
import PhoneMockup from "../images/iphone-mockup.png";
import Modal from "../utils/Modal";

const HeroHome = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

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
                Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
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
              <ul
                className="max-w-sm sm:max-w-md mx-auto md:max-w-none text-gray-600 dark:text-gray-400 mt-8 -mb-2"
                data-aos="fade-down"
                data-aos-delay="450">
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

            {/* Mobile mockup */}
            <div className="md:col-span-5 lg:col-span-5 text-center md:text-right" data-aos="fade-up" data-aos-delay="450">
              <div className="inline-flex relative justify-center items-center">
                {/* Glow illustration */}
                <GlowSvg className="absolute mr-12 mt-32 pointer-events-none -z-1 dark:opacity-40" />
                {/* Image inside mockup */}
                <div className="absolute">
                  <Image src={PhoneImage} width={290} height={630} alt="Feature Illustration" />
                </div>
                {/* Iphone mockup */}
                <Image
                  className="relative max-w-full mx-auto md:mr-0 md:max-w-none h-auto pointer-events-none"
                  src={PhoneMockup}
                  width="344"
                  height="674"
                  aria-hidden="true"
                  alt="oPhone mockup"
                />
                {/* Play button */}
                <a
                  href="#0"
                  className="absolute group hover:opacity-75 transition duration-150 ease-in-out"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setVideoModalOpen(true);
                  }}
                  aria-controls="modal">
                  <Image src={PlayButton} width="96" height="96" alt="Play" />
                </a>
              </div>

              {/* Modal */}
              <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
                <div className="relative pb-9/16">
                  <iframe
                    className="absolute w-full h-full"
                    src="https://player.vimeo.com/video/174002812"
                    title="Video"
                    allowFullScreen></iframe>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
