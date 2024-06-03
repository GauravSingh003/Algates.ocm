import React from "react";
import "../css/home.css";
import algt from '../../public/algt.webp'

const Home = () => {
  return (
    <>
      <div className="bg-orange-400 relative z-0 flex" id="home-main">
        <div className="w-1/2 h-full" id="home-left">
          <h2 className="text-center font-extrabold font-serif relative top-20 text-2xl text-white">
            Invest Now To Grow Your Wealth.
          </h2>
          <p className="font-thin text-md text-center ml-40 mt-5 w-1/2 relative top-20 text-white">
            Enjoy the services of a full service brokerage firm by opening an
            account with Algates Financial.
          </p>

          <button className="text-black bg-sky-200 rounded-lg px-6 py-2 mt-32 ml-32 font-semibold text-sm" id="home-btn">
            OPEN A DEMAT ACCOUNT
          </button>
        </div>

        <aside>
          <div id="circle"></div>
          <div id="img">
            <img src={algt} width={550} alt="algates-img"/>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Home;
