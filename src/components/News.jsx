import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import SingleNews from "./SingleNews";
import news_img from "../assets/test.jpg";

import { Grid, Pagination, Autoplay } from "swiper";
import { getNews } from "../utilis/API-Request";

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNews();
      setNews(data);
    };
    fetchNews();
  }, []);

  console.log(news);
  return (
    <div className="">
      <div className="flex items-center justify-center">
        <h1 className="text-gray-300 text-4xl font-extrabold pt-8 tracking-wide">
          TECH NEWS
          {/* <hr className="border-2 rounded-full border-yellow-200/40 cursor-pointer hover:border-red-500 duration-500"/> */}
        </h1>
      </div>
      <Swiper
        slidesPerView={4}
        grid={{
          rows: 1,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        spaceBetween={-200}
        // pagination={{
        //   clickable: false,
        // }}
        modules={[Autoplay, Grid, Pagination]}
        className="mySwiper my-16 sm:my-24 "
      >
        {news.map(({ title, description, urlToImage, url }) => (
          <SwiperSlide className=" sm:mx-24">
            <div class=" max-w-screen-sm sm:max-w-sm  mx-4 sm:mx-0 rounded-lg shadow dark:bg-gradient-to-br from-gray-600/40 to-cyan-700 dark:border-gray-700">
              {/* <div className="object-contain max-h-[80%]">
                <img
                  class="rounded-t-lg"
                  src={urlToImage}
                  alt=""
                />
              </div> */}
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                    {title}
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-200 dark:text-gray-200 line-clamp-2">
                  {description}
                </p>
                <a
                  href={url}
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-800 bg-gray-200 rounded-lg hover:bg-gray-100 duration-100 hover:from-sky-800 hover:to-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                  target="_blank"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;
