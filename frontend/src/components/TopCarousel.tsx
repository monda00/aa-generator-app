import Image from "next/image"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const TopCarousel = () => {
  const images = [
    "/kv_01.jpg",
    "/kv_02.jpg",
    "/kv_03.jpg",
    "/kv_04.jpg",
    "/kv_05.jpg",
  ]
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20%",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "10px",
        },
      },
    ],
  }

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={image} className="py-10 px-5">
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            width={800}
            height={400}
            className="rounded-md flex-shrink-0"
          />
        </div>
      ))}
    </Slider>
  )
}

export default TopCarousel
