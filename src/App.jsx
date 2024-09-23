import './App.css'
import { CarouselSlide } from './Components/CarouselSlide'
import { Nav } from './Components/Nav'
import arcwelding from './assets/arcwelding.webp'
import StickWelding from './assets/StickWelding.jpg'
import Gaswelding from './assets/Gaswelding.webp'
import Cutting from './assets/Cutting.jpg'
import ssgates from './assets/ssgates.jpg'
import gate from './assets/gate.png'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Contact } from './Components/Contact'

function App() {
  const cardData = [{ image: arcwelding, title: "Arc Welding" }, { image: StickWelding, title: 'Stick Welding' }, { image: Gaswelding, title: 'Gas welding' }, { image: Cutting, title: 'Cutting and Grainding works' }, { image: ssgates, title: 'SS Gates Making' }, { image: gate, title: 'Gril Gates Making' }]

  return (
    <>
      <Nav />
      <div className='mt-3 px-2'>
        <div>
          <div className='relative'>
            <CarouselSlide />
            <div data-aos="fade-down" data-aos-anchor=".other-element" data-aos-duration="1000" className='absolute ml-10  md:ml-20 lg:mr-10   text-center text-white top-5 md:top-10 md:left-1/6  lg:left-1/4 '>
              <h1 className='text-lg md:text-4xl '>Producing what the world needs</h1>
              <p className='md:text-2xl'>Is the beginning of all</p>
              <button className='bg-orange-300 px-2 py-1 hover:bg-orange-400 md:text-2xl md:mt-4 lg:mt-4'>VIEW MORE</button>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" data-aos-anchor=".other-element" data-aos-duration="2000" className=' mt-4 text-center space-y-2'>
          <h1 className='font-semibold text-4xl text-orange-400'>OUR SERVICES</h1>
          <h6 className='font-thin'>Our company provides first-class Welding works & services for governmental and private organizations.</h6>
        </div>

        <div className=' mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {cardData.map((data, index) => (
            <Card key={index} data-aos="zoom-in" data-aos-duration="2000" className="mt-6 w-[360px] sm:w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src={data.image}
                  alt="card-image"
                  className='h-full w-full object-cover object-center'
                />
              </CardHeader>
              <CardBody>
                <Typography key={index} variant="h5" color="blue-gray" className="mb-2 text-center">
                  {data.title}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0 ">
                <Button className='w-full bg-orange-400 text-black'>Book Now</Button>
              </CardFooter>
            </Card>
          ))}

        </div>
      </div>
      <Contact />
    </>
  )
}

export default App
