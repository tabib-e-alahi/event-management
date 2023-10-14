// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const images = [
    { img: "https://i.ibb.co/4K42p5b/banner-1.jpg" },
    { img: "https://i.ibb.co/gTKZzmy/banner-2.jpg" },
    { img: "https://i.ibb.co/pnKKHJ7/banner-6.jpg" },
    { img: "https://i.ibb.co/3sGtN0k/BANNER-7.jpg" },
    { img: "https://i.ibb.co/NTxYWKV/BANNER-8.jpg" },
    { img: "https://i.ibb.co/bzfQyKS/BANNER-9.jpg" },
    { img: "https://i.ibb.co/4fzbz2G/banner-3.jpg" },
    { img: "https://i.ibb.co/0Kyf91y/banner-4.jpg" },
    { img: "https://i.ibb.co/2WPX0Y3/banner-5.jpg" }
  ];
  
 
  



  return (
    <div className="mb-20  md:w-11/12 mt-4 mx-auto">
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
        className="mySwiper rounded-3xl"
      >

        {
          images.map((image,idx) => <SwiperSlide key={idx} className="rounded-2xl">
          <div
              className="hero h-60 lg:min-h-screen my-class "
              style={{
                backgroundImage:
                  `url(${image.img})`,
              }}
            >
              <div className="lg:hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="hidden lg:flex flex-col max-w-xl">
                  <h1 className="mb-5 text-2xl font-bold text-left">Things we do <br /> <span className="text-[#fcb900] text-7xl text-center">For Love</span></h1>
                  <p className="mb-5 font-medium text-left">
                  Streamline your event planning experience in our bustling city with our expert team.  From weddings to birthdays and beyond, we make every occasion unforgettable amidst the urban hustle and bustle.
                  </p>
                 
                </div>
              </div>
            </div>
          </SwiperSlide>)
        }
      
       
       
       
        
      </Swiper>
     
    </div>
  );
};

export default Banner;
