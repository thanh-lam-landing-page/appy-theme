// @ts-nocheck
import Image from "next/image";
import React from "react";

import Testimonial1 from "../images/testimonial-01.jpg";
import Testimonial2 from "../images/testimonial-02.jpg";
import Testimonial3 from "../images/testimonial-03.jpg";
import Testimonial4 from "../images/testimonial-04.jpg";

const testimonials = [
  {
    image: Testimonial1,
    quote: "This is a great app and the value is amazing. Since I purchased it I have been using it everyday! Highly recommend it.",
    name: "Andy Croll",
    company: "ABCD corp",
  },
  {
    image: Testimonial2,
    quote: "This is a great app and the value is amazing. Since I purchased it I have been using it everyday! Highly recommend it.",
    name: "John",
    company: "Shoey",
  },
  {
    image: Testimonial3,
    quote: "This is a great app and the value is amazing. Since I purchased it I have been using it everyday! Highly recommend it.",
    name: "Anna",
    company: "Nobey",
  },
  {
    image: Testimonial4,
    quote: "This is a great app and the value is amazing. Since I purchased it I have been using it everyday! Highly recommend it.",
    name: "Marie Jue",
    company: "JNT company",
  },
];

const TestimonialsBlocks = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-12 md:py-20 border-t border-transparent dark:border-gray-800">
        {/* Testimonials */}
        <div className="max-w-sm mx-auto grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:gap-12 items-start sm:max-w-none md:max-w-2xl lg:max-w-none">
          {testimonials.map((item, index) => (
            <div className="text-center" key={index}>
              <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={item.image.src} alt="testimonial 01" width="56" height="56" />
                <svg className="absolute top-0 right-0 mt-1 -mr-8" width="27" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="fill-current text-purple-500"
                    d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z"
                  />
                </svg>
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">{item.quote}</blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <cite className="not-italic">-{item.name}</cite>,{" "}
                <a className="text-teal-500 transition duration-150 ease-in-out" href="#0">
                  {item.company}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsBlocks;
