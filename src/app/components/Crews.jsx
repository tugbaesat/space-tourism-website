import hurley from "../../../public/assets/crew/image-douglas-hurley.png";
import ansari from "../../../public/assets/crew/image-anousheh-ansari.png";
import shuttleworth from "../../../public/assets/crew/image-mark-shuttleworth.png";
import glover from "../../../public/assets/crew/image-victor-glover.png";

const crews = [
  {
    id: "01",
    title: "Commander",
    name: "Douglas Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: hurley,
  },
  {
    id: "02",
    title: "Mission Specialist",
    name: "MARK SHUTTLEWORTH",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: shuttleworth,
  },
  {
    id: "03",
    title: "PILOT",
    name: "Victor Glover",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image: glover,
  },
  {
    id: "04",
    title: "Flight Engineer",
    name: "Anousheh Ansari",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    image: ansari,
  },
];

export default crews;
