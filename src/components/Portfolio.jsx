import React from "react";
import fitness from "../assets/portfolio/fitness.png";
import ecommerce from "../assets/portfolio/ecommerce.png";
import realestate from "../assets/portfolio/realestate.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: fitness,
      name:"Fitness Logger",
      demo: "https://coruscating-gingersnap-023f63.netlify.app/",
      fe: "https://github.com/Hemamalini-Kamaraj/Fitness_logger_Frontend",
      be: "https://github.com/Hemamalini-Kamaraj/Fitness_logger_Backend"
    },
    {
      id: 2,
      src: realestate,
      name: "Real Estate",
      demo:"https://benevolent-froyo-2aa393.netlify.app/",
      fe: "https://github.com/Hemamalini-Kamaraj/RealEstate_Frontend",
      be: "https://github.com/Hemamalini-Kamaraj/RealEstate_Backend",
    },
    {
      id: 3,
      src: ecommerce,
      name: "E-Commerce",
      demo:"https://fantastic-croquembouche-ff109b.netlify.app/",
      fe: "https://github.com/Hemamalini-Kamaraj/E-Commerce-FrontEnd",
      be: "https://github.com/Hemamalini-Kamaraj/E-Commerce-BackEnd",
    },
  ];
  return (
    <div
      name="portfolio"
      className="w-full md:h-screen h-screen my-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 text-white">
          {portfolios.map(({ id, src, demo, fe, be, name }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg bg-black "
            >
              <p className="text-white text-center font-bold py-2">{name}</p>
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-30 mt-2 mb-2"
              />
              <div className="flex items-center justify-center bg-black opacity-4">
                <button
                  onClick={(event) => window.open(fe, "_blank")}
                  className="w-1/2 px-3 py-2 m-3 duration-200 hover:scale-105 border border-white"
                >
                  Frontend
                </button>
                <button
                  onClick={(event) => window.open(demo, "_blank")}
                  className=" w-1/2 px-3 py-2 m-3 duration-200 hover:scale-105  border border-white  "
                >
                  Live
                </button>
                <button
                  onClick={(event) => window.open(be, "_blank")}
                  className="w-1/2 px-3 py-2 m-3 duration-200 hover:scale-105 border border-white"
                >
                  Backend
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
