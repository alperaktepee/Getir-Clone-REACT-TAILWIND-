import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from "../api/banners.json";

const Campaigns = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };
  const [banners, setBanners] = useState([]);

  useEffect(()=>{
    setBanners(Banners);
  },[])
  return (
    <div className="container mx-auto px-44 bg-gray-100">
      <h3 className="text-base font-semibold  pt-8 mb-3">Kampanyalar</h3>
      <Slider className="-mx-2 cursor-pointer" {...settings}>
        {banners.length && banners.map((banner,index)=>(
          <div key={banner.id}>
            <img className="rounded-[16px] px-2" src={banner.image} />
            </div>
  ))}
      </Slider>
    </div>
  );
};

export default Campaigns;
