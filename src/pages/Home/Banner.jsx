// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="mb-20  md:w-full">
      
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-auto lg:w-full h-auto lg:h-[700px]  "
              src="https://i.ibb.co/pnKKHJ7/banner-6.jpg"
              alt="slide-1"
            />
            <div className="hidden lg:flex w-full h-full absolute top-0 left-0 bg-black opacity-50"></div>
            <div className="hidden lg:flex flex-col absolute top-1/3 left-1/3">
              <h1 className="text-4xl font-medium  text-white">
                Things We Do <br />{" "}
                <span className="text-[#fcb900] text-xl lg:text-9xl font-semibold lg:font-bold">
                  For Love
                </span>
              </h1>
              <p className="text-white text-left font-medium">
                Streamline your event planning experience in our bustling city
                with our expert team. <br /> From weddings to birthdays and
                beyond, we make every occasion unforgettable amidst <br /> the
                urban hustle and bustle.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-auto lg:w-full h-auto lg:h-[700px] mix-blend-overlay"
              src="https://i.ibb.co/3sGtN0k/BANNER-7.jpg"
              alt="slide-2"
            />
            <div className="hidden lg:flex flex-col w-full h-full absolute top-0 left-0 bg-black opacity-50"></div>
            <div className="hidden lg:flex flex-col absolute top-1/3 left-1/3">
              <h1 className="text-4xl font-semibold  text-white">
                Things We Do <br />{" "}
                <span className="text-[#fcb900] text-9xl font-bold">
                  For Love
                </span>
              </h1>
              <p className="text-white text-left font-medium">
                Streamline your event planning experience in our bustling city
                with our expert team. <br /> From weddings to birthdays and
                beyond, we make every occasion unforgettable amidst <br /> the
                urban hustle and bustle.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-auto lg:w-full h-auto lg:h-[700px] mix-blend-overlay"
              src="https://i.ibb.co/NTxYWKV/BANNER-8.jpg"
              alt="slide-3"
            />
            <div className="hidden lg:flex flex-col w-full h-full absolute top-0 left-0 bg-black opacity-50"></div>
            <div className="hidden lg:flex flex-col absolute top-1/3 left-1/3">
              <h1 className="text-4xl font-semibold  text-white">
                Things We Do <br />{" "}
                <span className="text-[#fcb900] text-9xl font-bold">
                  For Love
                </span>
              </h1>
              <p className="text-white text-left font-medium">
                Streamline your event planning experience in our bustling city
                with our expert team. <br /> From weddings to birthdays and
                beyond, we make every occasion unforgettable amidst <br /> the
                urban hustle and bustle.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-auto lg:w-full h-auto lg:h-[700px] mix-blend-overlay"
              src="https://i.ibb.co/bzfQyKS/BANNER-9.jpg"
              alt="slide-4"
            />
            <div className="hidden lg:flex flex-col w-full h-full absolute top-0 left-0 bg-black opacity-50"></div>
            <div className="hidden lg:flex flex-col absolute top-1/3 left-1/3">
              <h1 className="text-4xl font-semibold  text-white">
                Things We Do <br />{" "}
                <span className="text-[#fcb900] text-9xl font-bold">
                  For Love
                </span>
              </h1>
              <p className="text-white text-left font-medium">
                Streamline your event planning experience in our bustling city
                with our expert team. <br /> From weddings to birthdays and
                beyond, we make every occasion unforgettable amidst <br /> the
                urban hustle and bustle.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-auto lg:w-full h-auto lg:h-[700px] mix-blend-overlay"
              src="https://i.ibb.co/4K42p5b/banner-1.jpg"
              alt="slide-5"
            />
            <div className="hidden lg:flex flex-col w-full h-full absolute top-0 left-0 bg-black opacity-50"></div>
            <div className="hidden lg:flex flex-col absolute top-1/3 left-1/3">
              <h1 className="text-4xl font-semibold  text-white">
                Things We Do <br />{" "}
                <span className="text-[#fcb900] text-9xl font-bold">
                  For Love
                </span>
              </h1>
              <p className="text-white text-left font-medium">
                Streamline your event planning experience in our bustling city
                with our expert team. <br /> From weddings to birthdays and
                beyond, we make every occasion unforgettable amidst <br /> the
                urban hustle and bustle.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-auto lg:w-full h-auto lg:h-[700px] mix-blend-overlay"
              src="https://i.ibb.co/gTKZzmy/banner-2.jpg"
              alt="slide-6"
            />
            <div className="hidden lg:flex flex-col   w-full h-full absolute top-0 left-0 bg-black opacity-50"></div>
            <div className="hidden lg:flex flex-col  absolute top-1/3 left-1/3">
              <h1 className="text-4xl font-semibold  text-white">
                Things We Do <br />{" "}
                <span className="text-[#fcb900] text-9xl font-bold">
                  For Love
                </span>
              </h1>
              <p className="text-white text-left font-medium">
                Streamline your event planning experience in our bustling city
                with our expert team. <br /> From weddings to birthdays and
                beyond, we make every occasion unforgettable amidst <br /> the
                urban hustle and bustle.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-auto lg:w-full h-auto lg:h-[700px] mix-blend-overlay"
              src="https://i.ibb.co/4fzbz2G/banner-3.jpg"
              alt="slide-7"
            />
            <div className="hidden lg:flex flex-col w-full h-full absolute top-0 left-0 bg-black opacity-50"></div>
            <div className="hidden lg:flex flex-col absolute top-1/3 left-1/3">
              <h1 className="text-4xl font-semibold  text-white">
                Things We Do <br />{" "}
                <span className="text-[#fcb900] text-9xl font-bold">
                  For Love
                </span>
              </h1>
              <p className="text-white text-left font-medium">
                Streamline your event planning experience in our bustling city
                with our expert team. <br /> From weddings to birthdays and
                beyond, we make every occasion unforgettable amidst <br /> the
                urban hustle and bustle.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-auto lg:w-full h-auto lg:h-[700px] mix-blend-overlay"
              src="https://i.ibb.co/0Kyf91y/banner-4.jpg"
              alt="slide-8"
            />
            <div className="hidden lg:flex flex-col w-full h-full absolute top-0 left-0 bg-black opacity-50"></div>
            <div className="hidden lg:flex flex-col absolute top-1/3 left-1/3">
              <h1 className="text-4xl font-semibold  text-white">
                Things We Do <br />{" "}
                <span className="text-[#fcb900] text-9xl font-bold">
                  For Love
                </span>
              </h1>
              <p className="text-white text-left font-medium">
                Streamline your event planning experience in our bustling city
                with our expert team. <br /> From weddings to birthdays and
                beyond, we make every occasion unforgettable amidst <br /> the
                urban hustle and bustle.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-auto lg:w-full h-auto lg:h-[700px] mix-blend-overlay"
              src="https://i.ibb.co/2WPX0Y3/banner-5.jpg"
              alt="slide-9"
            />
            <div className="hidden lg:flex flex-col w-full h-full absolute top-0 left-0 bg-black opacity-50"></div>
            <div className="hidden lg:flex flex-col absolute top-1/3 left-1/3">
              <h1 className="text-4xl font-semibold  text-white mb-5">
                Things We Do <br />{" "}
                <span className="text-[#fcb900] text-9xl font-bold ">
                  For Love
                </span>
              </h1>
              <p className="text-white text-left font-medium">
                Streamline your event planning experience in our bustling city
                with our expert team. <br /> From weddings to birthdays and
                beyond, we make every occasion unforgettable amidst <br /> the
                urban hustle and bustle.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
