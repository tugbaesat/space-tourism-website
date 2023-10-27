import React from "react";
import { bellefair } from "../fonts";
const Home = () => {
  return (
    <section className="container text-center flex flex-col gap-6 lg:flex-row">
      <div>
        <h5 className="mt-24">SO, YOU WANT TO TRAVEL TO</h5>
        <h1 className={`${bellefair.className} text-7xl `}>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="pt-20">
        <button className="bg-secondary-white rounded-full w-52 h-52 ">
          <span className={`text-primary-black text-3xl ${bellefair.className}`}>EXPLORE</span>
        </button>
      </div>
    </section>
  );
};

export default Home;
