import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";

const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderRef=useRef(null);

  useEffect(()=>{
    const nextSlice=()=>{
        sliderRef.current.slickNext()
    }

    const interval=setInterval(nextSlice,5000)

    document.addEventListener("visibilitychange",()=>{
        if(document.visibilityState==="hidden"){
            clearInterval(interval)
        } else{
            setInterval(nextSlice,5000)
        }
    })

    return ()=>{
        clearInterval(interval)
    }
  },[])

  return (
    <div className="w-[360px] mx-auto py-5 sm:w-[460px] md:w-[700px]">
    <Slider {...settings} ref={sliderRef}>
      <div>
        <img src="/slider/1.jpg" alt="Slide 1" />
      </div>
      <div>
        <img src="/slider/2.jpg" alt="Slide 2" />
      </div>
      <div>
        <img src="/slider/3.jpg" alt="Slide 3" />
      </div>
    </Slider>
    </div>
  );
};

export default MySlider;