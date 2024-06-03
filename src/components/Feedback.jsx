import "../css/feedback.css";
import msg from "../../public/msg.svg";
import collab from "../../public/collab.svg";
import belive from "../../public/belive.svg";

const Feedback = () => {
  return (
    <>
      <div className="bg-zinc-700 py-10 ">
        <header className="text-center font-bold text-3xl text-white">
          What our Customers Say??
        </header>
        <hr className="border-4  border-red-400 w-1/5 mx-auto mt-2"></hr>

        <main
          className="flex items-center justify-evenly mt-10 pb-10 mx-20"
          id="feedback-main"
        >
          <div className=" rounded-xl bg-white" id="feedbox">
            <p>
              Algates Financial is one of the best stock brokering firms. It
              offers a wide range of products for investments. The mobile app is
              very easy to use and there research team gives good calls. Also
              their relationship managers are very helpful and always available
              for support.
            </p>
            <br />
            <div className="flex justify-between">
              <h3 className="text-xl font-bold">Nikhil Bagmane </h3>
              <img src={msg} alt="" />
            </div>
          </div>

          <div className="grid-flow-col w-1/5 text-center gap-5 justify-center items-center text-wrap" id="feedback-data">
            <div className="bg-purple-500 h-20 w-20 p-2 flex justify-center items-center rounded-full">
              <img src={belive} alt="" />
            </div>
            <h2 className="text-green-500 text-2xl font-bold">80+</h2>
            <p className="text-white">
              people met their financial{" "}
              <b className="text-purple-500 font-bold">goals</b> with our{" "}
              <b className="text-purple-500 font-bold">expertise​</b>​
            </p>
            </div>
          <div className="grid-flow-col w-1/5 text-center gap-5 justify-center items-center text-wrap" id="feedback-data">
            <div className="bg-purple-500 h-20 w-20 p-2 flex justify-center rounded-full">
              <img src={collab} alt="" />
            </div>
            <h2 className="text-green-500 text-2xl font-bold">500+</h2>
            <p className="text-white">
              clients are building their{" "}
              <b className="text-purple-500 font-bold">WEALTH</b> by using our{" "}
              <b className="text-purple-500 font-bold">platform</b>
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default Feedback;
