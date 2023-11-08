import React from "react";
import { bellefair } from "../fonts";
import Image from "next/image";
import moon from '../../../public/assets/destination/image-moon.png'

const DestinationA = () => {
  const destinations = [
    {
      id: "01",
      name: "MOON",
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      avgDistance: "384,400 km",
      travelTime: "3 days",
      image: { moon },
    },
    {
      id: "02",
      name: "MARS",
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      avgDistance: "225 MIL. km",
      travelTime: "9 months",
      image: { moon },
    },
    {
      id: "03",
      name: "EUROPA",
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      avgDistance: "628 MIL. km",
      travelTime: "3 years",
      image: { moon },
    },
    {
      id: "04",
      name: "TITAN",
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      avgDistance: "1.6 BIL. km",
      travelTime: "7 years",
      image: { moon },
    },
  ];
  return (
    <section className="bg-sm-image-destination md:bg-md-image-destination lg:bg-lg-image-destination bg-cover bg-no-repeat h-screen">
      {destinations.map((destination) => (
        <div
          key={destination.id}
          className=" flex flex-col items-center justify-center mx-20 md:w-1/3 text-secondary-violet lg:h-auto "
        >
          <h5 className="text-xl lg:text-3xl font-['Barlow Condensed'] tracking-widest uppercase">
            <span>01</span> pick your destination
          </h5>
          <Image
            src={destination.image}
            alt="logo"
            width={400}
            height={400}
            className="mt-24"
          />
          <h1
            className={`${bellefair.className} text-primaryWhite text-7xl md:text-9xl my-6 p-0 mx-0 uppercase`}
          >
            {destination.name}
          </h1>
          <p className=" text-lg font-normal font-['Barlow Condensed'] leading-loose lg:text-left text-center">
            {destination.description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default DestinationA;
