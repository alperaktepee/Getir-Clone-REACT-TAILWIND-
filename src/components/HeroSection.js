import React, { useState } from "react";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,
    autoplaySpeed:4000,
    cssEase:"linear",
  };
  const [selected, setSelected] = useState("TR");
  const phones = {
    TR: "+90",
    US: "+1",
    GB: "+44",
    FR: "+33",
    DE: "+49",
    IT: "+39",
  };
  return (
    <div className="relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"
          />
        </div>
      </Slider>
      <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
        <div>
          <img
            className="ml-[160px]"
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
          />
          <h3 className="text-4xl ml-[160px] mt-8 font-semibold text-white">
            Dakikalar içinde <br /> kapınızda <br />
          </h3>
        </div>
        <div className="w-[400px] mr-[160px] rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color text-center font-semibold">
            Giriş yap veya kayıt ol
          </h4>
          <div className="flex gap-x-2 mt-4">
            <ReactFlagsSelect
              countries={Object.keys(phones)}
              customLabels={phones}
              onSelect={(code) => setSelected(code)}
              selected={selected}
              className="flag-select"
            />
            <label className="flex-1 relative block">
              <input required className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-primary-brand-color outline-none focus:border-primary-brand-color peer"/>
              <span className="text-gray-500 absolute top-0 left-0 h-full px-4  flex items-center text-sm text-gray-700 transition-all peer-focus:h-5 peer-focus:text-primary-brand-color peer-focus:text-xs peer-focus:tracking-widest peer-focus:mt-1/2 peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs peer-valid:tracking-widest peer-valid:mt-1/2">Telefon Numarası</span>
            </label>
          </div>
          <button className="bg-brand-yellow text-primary-brand-color h-12 flex items-center justify-center rounded-lg text-sm font-semibold mt-2 w-full transition-colors hover:bg-primary-brand-color hover:text-brand-yellow">
            Telefon numarası ile devam et
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
