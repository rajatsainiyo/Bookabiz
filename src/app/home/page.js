"use client";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckIcon from "@mui/icons-material/Check";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Service from "../components/Service";
import DatePicker from "../components/Datepiker";

const page = () => {
  return (
    <>
      <div className="sm:block md:block lg:flex">
        <div className="flex-1 h-full bg-content-green">
          <div className="h-full  p-4 flex flex-col justify-between">
            <div>
              <h1 className="text-yellow-50 font-bold text-2xl">
                Men's Hair Cut
              </h1>
              <h6 className="text-yellow-50 pl-3 my-2">30 Min</h6>
              <h6 className="text-orange-500 pl-3">ABC Salon</h6>
              <h6 className="text-yellow-50 font-bold pl-2 my-4 flex items-center">
                <LocationOnIcon className="mr-1" />
                Location 1
              </h6>
              <div className="flex gap-9 my-3">
                <ul className="flex gap-4">
                  <li className="flex items-center">
                    <CheckIcon className="mr-1" />
                    Feature
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-1" />
                    Feature
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-1" />
                    Feature
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-1" />
                    Feature
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-1" />
                    Feature
                  </li>
                </ul>
              </div>
              <p className="font-normal text-yellow-50 text-center mx-1 my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                perspiciatis unde blanditiis ad nihil recusandae cupiditate
                itaque numquam iure odit enim, consectetur nostrum!
              </p>
              <div className="my-4 flex gap-3 border-gray-500 mt-16 mx-4">
                <h3 className="text-white border-solid border border-white-500 w-20 text-center">
                  benefit
                </h3>
                <h3 className="text-white border-solid border border-white-500 w-20 text-center">
                  benefit
                </h3>
                <h3 className="text-white border-solid border border-white-500 w-20 text-center">
                  benefit
                </h3>
                <h3 className="text-white border-solid border border-white-500 w-20 text-center">
                  benefit
                </h3>
                <h3 className="text-white border-solid border border-white-500 w-20 text-center">
                  benefit
                </h3>
              </div>
            </div>
            <h1 className="text-3xl text-orange-800 font-bold px-4 my-11">
              SGD 40
            </h1>
          </div>
        </div>
        <div className="h-full w-full">
          {/* <div className="h-full flex flex-col"> */}
          <Carousel className="h-full w-full" showThumbs={false}>
            <div className="h-full">
              <img
                src="/images/Frame 9.png"
                alt="Image 1"
                //   className="h-full"
              />
            </div>
            <div className="h-full">
              <img
                src="/images/Frame 9.png"
                alt="Image 2"
                //   className="h-full"
              />
            </div>
            <div className="h-full">
              <img
                src="/images/Frame 9.png"
                alt="Image 3"
                //   className="h-full"
              />
            </div>
          </Carousel>
        </div>
      </div>
      {/* </div> */}
      <DatePicker/>
      <Service />
    </>
  );
};

export default page;
