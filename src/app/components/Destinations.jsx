import moon from "../../../public/assets/destination/image-moon.png";
import mars from "../../../public/assets/destination/image-mars.png";
import europa from "../../../public/assets/destination/image-europa.png";
import titan from "../../../public/assets/destination/image-titan.png";

const destinations = [
  {
    id: "01",
    name: "MOON",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    avgDistance: "384,400 km",
    travelTime: "3 days",
    image: moon,
  },
  {
    id: "02",
    name: "MARS",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    avgDistance: "225 MIL. km",
    travelTime: "9 months",
    image: mars,
  },
  {
    id: "03",
    name: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    avgDistance: "628 MIL. km",
    travelTime: "3 years",
    image: europa,
  },
  {
    id: "04",
    name: "TITAN",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    avgDistance: "1.6 BIL. km",
    travelTime: "7 years",
    image: titan,
  },
];

export default destinations;
