import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const OurHotels = ({ id }) => {
  const hotels = [
    {
      id: 1,
      name: "LazyStay Grand",
      description:
        "Experience luxury redefined at LazyStay Grand. Nestled in a prime location, our flagship hotel offers spacious rooms, world-class amenities, and impeccable service.",
      images: [
        "assets/images/grand-hotel.webp",
        "assets/images/grand-hotel.webp",
        "assets/images/grand-hotel.webp",
      ],
      features: [
        "5-star accommodation",
        "Rooftop infinity pool",
        "Gourmet dining",
        "Premium spa services",
      ],
      price: "Starting from ₹8,999/night",
      path: "/grand",
    },
    {
      id: 2,
      name: "LazyStay Elite",
      description:
        "LazyStay Elite combines modern elegance with comfort. Perfect for both business and leisure travelers seeking a sophisticated yet relaxing atmosphere.",
      images: [
        "assets/images/elite-hotel.webp",
        "assets/images/elite-hotel.webp",
        "assets/images/elite-hotel.webp",
      ],
      features: [
        "4-star accommodation",
        "Executive business center",
        "Parking facilities",
        "Fine dining options",
      ],
      price: "Starting from ₹6,999/night",
      path: "/elite",
    },
  ];

  const carouselConfig = {
    arrows: false,
    showDots: false,
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 3000,
    draggable: true,
    swipeable: true,
    keyBoardControl: true,
    containerClass: "carousel-container",
    itemClass: "h-48",
    responsive: {
      all: {
        breakpoint: { max: 4000, min: 0 },
        items: 1,
      },
    },
  };

  return (
    <section id={id} className="py-16 bg-[#f3eee8]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-12">
          Our Exclusive Hotels
        </h2>
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]"
              >
                <div className="h-48 overflow-hidden">
                  <Carousel {...carouselConfig}>
                    {hotel.images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`${hotel.name} ${index + 1}`}
                        className="w-full h-48 object-cover"
                      />
                    ))}
                  </Carousel>
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-serif font-bold mb-2 text-center">
                    {hotel.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                    {hotel.description}
                  </p>
                  <Link
                    to={hotel.path}
                    className="text-blue-900 text-sm font-medium hover:underline inline-flex items-center mb-3"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </Link>

                  <div className="mb-5">
                    <h4 className="text-base font-semibold text-blue-900 mb-2">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {hotel.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 bg-blue-50 p-2 rounded-md shadow-sm hover:bg-blue-100 transition"
                        >
                          <svg
                            className="w-5 h-5 text-green-600 mt-1"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm text-gray-800">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-base font-bold text-blue-900">
                      {hotel.price}
                    </span>
                    <Link
                      to={hotel.path}
                      className="bg-blue-900 text-white text-sm py-1.5 px-4 rounded-full hover:bg-blue-800 transition"
                    >
                      View Hotel
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-blue-900 text-blue-900 py-3 px-8 rounded-full hover:bg-blue-900 hover:text-white transition">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurHotels;
