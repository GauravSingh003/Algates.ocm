import React from "react";
import "../css/middle1.css";
import teach from "../../public/teach.svg";
import growth from "../../public/growth.webp";
import invest from "../../public/invest.webp";
import partner from "../../public/partner.webp";
import rm from "../../public/rm.webp";
import asst from "../../public/asst.webp";

const Middle1 = () => {
  return (
    <>
      <div className="" id="middle1">
        <header className="text-3xl font-bold  text-white text-center">
          Why Algates?
        </header>
        <hr className="border-2  border-red-400 w-1/5 mx-auto mt-2"></hr>
        <br />

        <main className="flex" id="middle-main">
          <div className=" w-2/5" id="min-img">
            <img src={teach} alt="" />
          </div>

          <section className="w-4/6 flex flex-wrap gap-3">
            <div className="flex items-center gap-1" id="box1">
              <div className="h-32 w-32">
                <img src={asst} alt="" />
              </div>
              <div className="para">
                <h2 className="text-xl text-green-400 font-bold font-serif">
                  Personalised Assisstance
                </h2>
                <p className="font-serif">
                  We have a dedicated dealer desk. You can call and place your
                  order during market hours.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3" id="box1">
              <div className="h-32 w-32">
                <img src={growth} alt="" />
              </div>
              <div className="para">
                <h2 className="text-xl text-green-400 font-bold font-serif">
                  Investment & Growth
                </h2>
                <p className="font-serif">
                  We have 10+ years of experience in stock market investments
                  with good ROI.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3" id="box1">
              <div className="h-24 w-24">
                <img src={invest} alt="" />
              </div>
              <div className="para">
                <h2 className="text-xl text-green-400 font-bold font-serif">
                  Smart Investment
                </h2>
                <p className="font-serif">
                  we diversify your portfolio to get smarter returns.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3" id="box1">
              <div className="h-44 w-44">
                <img src={rm} alt="" />
              </div>
              <div className="para">
                <h2 className="text-xl text-green-400 font-bold font-serif">
                  Dedicated Relationship Manager
                </h2>
                <p className="font-serif">
                  Each client will have a dedicated relationship manager who
                  will guide you through your stock market investment journey
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3" id="box1">
              <div className="h-48 w-48">
                <img src={partner} alt="" />
              </div>
              <div className="para">
                <h2 className="text-xl text-green-400 font-bold font-serif">
                  Trustworthy Partner
                </h2>
                <p className="font-serif">
                  We are associated with Cholamandalam Securities Ltd, which is
                  a leading and trustworthy stock broker in South India.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Middle1;
