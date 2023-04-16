import { SwiperSlide } from "swiper/react";

const SingleNews = ({ title, description, urlToImage, url }) => {
  return (
    <SwiperSlide className=" sm:mx-24">
      <div class=" max-w-screen-sm sm:max-w-sm mx-4 sm:mx-0 rounded-lg shadow dark:bg-gradient-to-br from-gray-600/40 to-cyan-700 dark:border-gray-700">
        <a href="#">
          <img class="rounded-t-lg" src={urlToImage} alt="" />
        </a>
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
  );
};

export default SingleNews;
