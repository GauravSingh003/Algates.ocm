import "../css/products.css";
import equity from "../../public/eqity.svg";
import doller from "../../public/doller.svg";
import invest from "../../public/invest.svg";
import trading from "../../public/trading.svg";

const Products = () => {
  return (
    <>
      <div id="prod-main">
        <div
          id="products"
          className="bg-blue-300 h-96 rounded-2xl w-1/4 flex-wrap"
        >
          <h2 className="text-center text-orange-500 text-2xl font-bold mt-6 py-6">
            PRODUCTS AND OFFERINGS
          </h2>
          <hr className="border-2  border-red-400 w-1/5 mx-auto"></hr>

          <section className="flex text-center items-center justify-evenly my-4" id="product-main">
            <image className="leading-10 w-1/5 flex-wrap" id="image">
              <div
                className="bg-green-400 flex justify-center items-center rounded-full h-20 w-20"
                id="product-logo"
              >
                <img src={equity} alt="" />
              </div>
              <h2 className="font-bold text-xl text-white">Equity</h2>
              <p>
                Start your wealth creation journey <strong>today.</strong>​
              </p>
              <button className="bg-orange-400 px-3 rounded-xl font-semibold text-md">
                know More..
              </button>
            </image>

            <image className="leading-10 w-1/5 flex-wrap" id="image">
              <div
                className="bg-green-400 flex justify-center items-center rounded-full h-20 w-20"
                id="product-logo"
              >
                <img src={trading} alt="" />
              </div>
              <h2 className="font-bold text-xl text-white">
                Futures & Options
              </h2>
              <p>
                Do systematic trading to build <strong>wealth</strong> over
                time.​​
              </p>
              <button className="bg-orange-400 px-3 rounded-xl font-semibold text-md">
                know More..
              </button>
            </image>

            <image className="leading-10 w-1/5 flex-wrap" id="image">
              <div
                className="bg-green-400 flex justify-center items-center rounded-full h-20 w-20"
                id="product-logo"
              >
                <img src={invest} alt="" />
              </div>
              <h2 className="font-bold text-xl text-white">Mutual Funds</h2>
              <p>
                Start with as low as <strong> RS 100.</strong>​
              </p>
              <button className="bg-orange-400 px-3 mt-10 rounded-xl font-semibold text-md">
                know More..
              </button>
            </image>

            <image className="leading-10 w-1/5 flex-wrap" id="image">
              <div
                className="bg-green-400 flex justify-center items-center rounded-full h-20 w-20"
                id="product-logo"
              >
                <img src={doller} alt="" />
              </div>
              <h2 className="font-bold text-xl text-white">Bonds</h2>
              <p>
                Invest in curated secured bonds to <strong>earn</strong> fixed
                returns​
              </p>
              <button className="bg-orange-400 px-3 rounded-xl font-semibold text-md">
                know More..
              </button>
            </image>
          </section>
        </div>
      </div>
    </>
  );
};

export default Products;
