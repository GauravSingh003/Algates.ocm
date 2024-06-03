import "../css/about.css";
import Lottie from "lottie-react";
import experts from '../../public/experts.json'

const About = () => {
  return (
    <>
      <div
        className="bg-gray-200 text-black p-10 flex justify-center items-center"
        id="about"
      >
        <div className="w-1/2" id="left">
          <h1 className="text-3xl font-extrabold font-serif">
            Our <span className="text-green-600">"Expertise"</span> Is Growing Wealth.
          </h1>
          <hr className="border-2  border-green-400 w-1/5 mx-20 mt-3"></hr>

          <p className="my-6">
            We believe in providing a full range of investment services to our
            clients with the help of our dedicated relationship managers.
          </p>
          <p className="my-6">
            Our relationship managers work throughout the market hours to help
            you navigate through market volatility and maintain a healthy
            portfolio.
          </p>
          <p className="my-6">
            Because for us, your financial goals and well-being are the
            top-priorities.
          </p>

          <button id="about-btn" className="bg-orange-400 text-white font-extralight text-xl text-pretty mx-44 my-10 rounded-xl py-2 px-4">
            Connect with us
          </button>
        </div>

        <div className="w-1/2 bg-gray-200 relative top-0" id="right" style={{width:"400px"}}>
            <Lottie id="abt-lottie" animationData={experts} />
        </div>
      </div>
    </>
  );
};

export default About;
