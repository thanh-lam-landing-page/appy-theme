import React from "react";

const HeroHome = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-10">
          {/* Hero content */}
          <div className="md:grid md:grid-col-12 md:gap-12 lg:gap-20 items-center">{/* Content */}</div>

          {/* Content */}
          <div>
            <h1>Your website, reimagined</h1>
            <p>Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
            {/* CTA form */}
            <form>
              <div className='flex flex-col sm:flex-row justify-center max-w-sm mx-auto sm:max-w-md md:mx-0'>
                <input type="tel" placeholder="Phone number" aria-label="Phone number" className="form-input w-full mb-2 sm:mb-0 sm:mr-2" />
                <a href="#0" className="btn text-white bg-teal-500 hover:bg-teal-400 flex-shrink-0">
                  Request code
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
