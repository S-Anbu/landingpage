import { Carousel } from "@material-tailwind/react";
import slide1 from '../assets/slide1.webp'
import slide2 from '../assets/slide2.avif'
import slide3 from '../assets/slide3.avif'
import slide4 from '../assets/slide4.avif'
export function CarouselSlide() {
  return (
    <Carousel loop={true} autoplay={true} className="rounded-xl h-36 md:h-60 opacity-80 ">
   
        <img
          src={slide2}
          alt="image 1"
          className="h-full w-full object-cover object-center "
        />
      <img
        src={slide3}
        alt="image 2"
        className="h-full w-full object-cover object-center"
      />
      <img
        src={slide1}
        alt="image 3"
        className="h-full w-full object-cover object-center"
      />
      <img
        src={slide4}
        alt="image 4"
        className="h-full w-full object-cover object-center"
      />
    </Carousel>
  );
}