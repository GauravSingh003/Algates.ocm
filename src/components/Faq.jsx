import Lottie from "lottie-react";
import faq from "../../public/faq.json";
import "../css/faq.css";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";

const Faq = () => {
  return (
    <>
      <div id="faq">
        <header className="mx-auto" style={{ width: "200px" }}>
          <Lottie animationData={faq} />
        </header>
        <div className="flex justify-center" id="main">
          <div className="w-1/2" id="left">
            <p>
              1. How much money is required to start investing in the stock
              market?
            </p>
            <p>2. Do you provide assistance for buying stock?</p>
            <p>3. Can I invest in mutual funds with my Demat Account?</p>
            <p>4. How to open a Demat Account?</p>
            <p>5. What are the documents required to open a Demat Account?</p>
            <p>6. Do you provide assistance for opening a Demat Account?</p>
          </div>

          <div className="w-1/2 " id="right">
            <h2 className="text-2xl my-3 font-bold text-gray-500">
              Have More Questions,
            </h2>
            <h3 className="text-2xl my-3 font-bold text-green-500">
              Talk with an Exepert
            </h3>
            <button className="flex py-4 w-80 px-3 justify-around text-sm rounded-xl mb-2 bg-green-500 text-white">
              <FaWhatsapp /> Let's chat{" "}
              <a href="https://wa.me/7259833818" className="ml-20">
                +91-7259833818
              </a>{" "}
            </button>
            <button className="flex py-4 w-80 items-center gap-2 text-sm justify-arround px-3 rounded-xl border-2 mt-2">
              {" "}
              <MdOutlineMarkEmailRead /> write to us:-{" "}
              <a href="mailto:contact@aglates.com" className="ml-20">
                contact@aglates.com
              </a>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
