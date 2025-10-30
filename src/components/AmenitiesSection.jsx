import React from "react";
import { Link } from "react-router-dom";

const AmenitiesSection = ({ id }) => {
  const featuredAmenities = [
    {
      id: 1,
      name: "In-room dining",
      description:
        "Egestas platea hac pharetra lacus risus nibh et id amet elementum in mi suscipit egestas ipsum sollicitudin eget vitae quam diam senectus ac pharetra at congue diam nulla viverra sapien laoreet.",
      image: "assets/images/grand-hotel.webp",
    },
    {
      id: 2,
      name: "Sutra Cafe",
      description:
        "Aliquet vestibulum, consequat elementum, aliquam nulla diam ac ligula nunc adipiscing ornare mattis hendrerit libero, ut nisl convallis non velit id felis auctor, sollicitudin scelerisque.",
      image: "assets/images/grand-hotel.webp",
    },
    {
      id: 3,
      name: "Royal Lounge",
      description:
        "Phasellus vitae volutpat donec at felis mauris tincidunt elit vel eu aenean commodo, tincidunt elementum et dictum scelerisque.",
      image: "assets/images/grand-hotel.webp",
    },
  ];

  return (
    <section id={id} className="bg-[#f7f1e8] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <h2 className="text-5xl font-serif text-[#b9935b] leading-tight">
            Amenities
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Phasellus vitae volutpat donec at felis mauris tincidunt elit vel eu
            aenean commodo, tincidunt elementum et dictum scelerisque tempus
            amet eget viverra lectus tristique suspendisse tortor feugiat eu
            lacinia sed elementum in iaculis sapien cursus odio massa gravida ut
            molestie sed vel senectus donec nunc nunc nec laoreet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {featuredAmenities.map((amenity) => (
            <div key={amenity.id}>
              <img
                src={amenity.image}
                alt={amenity.name}
                className="w-full h-60 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl text-[#b9935b] font-bold font-serif mb-2">
                {amenity.name}
              </h3>
              <p className="text-gray-600 mb-4">{amenity.description}</p>
              <Link
                to="/amenities"
                className="text-[#b9935b] uppercase tracking-wide font-semibold text-sm inline-flex items-center"
              >
                Learn more
                <span className="ml-2 text-xl leading-none">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
