import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <>
      <main className="bg-orange-400 h-full w-full" id="footer" >
        <h2 className="text-center text-2xl font-bold text-white p-4">
          About us
        </h2>

        <section className="flex justify-center items-center px-16 pb-10" id="footer-section">
          <div className=" left w-96">
            <h2 className="text-white text-xl font-semibold text-center mt-2">
              Stock Broking Registration Details:
            </h2>
            <br />
            <p className="mt-8">
              Algates Financial Private Limited is an Authorised Person of
              Cholamandalam Securities Limited.
            </p>
            <p className="mt-8">
              NSE Registration Number: AP090200603 BSE Registration Number:
              AP01023701106698.
            </p>
            <p className="mt-8">
              {" "}
              any complaints pertaining to securities broking, you can contact
              customercare@chola.murug
            </p>
          </div>

          <div className="center w-96">
            <h2 className="text-white text-xl font-semibold text-center mt-2">
              Company
            </h2>
            <br />
            <ul className="text-center">
              <li>Home</li>
              <li>
                <a href="#products">Products</a>
                <ul className="text-justify ml-52">
                  <li> <a href="">Equity</a></li>
                  <li> <a href="">Futures And Options</a></li>
                  <li> <a href="">Mutual Funds</a></li>
                  <li> <a href="">Bonds</a></li>
                </ul>
              </li>
              <li>Events</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className=" right w-96">
            <h2 className="text-white text-xl font-semibold text-center mt-2">
              Get In Touch
            </h2>
            <br />
            <h4 className="font-semibold text-center text-green-800">
              Algates Financial Private Limited
            </h4>
            <p className="text-center">
              Second floor, 777/P, 13th Main, HAL 2nd Stage, Indiranagar,
              Bangalore – 560008 Telephone: 080 – 45415700 Email: contac
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-zinc-700 text-white p-4 text-center">
        <p>Copyright &copy; 2024 Algates | Powered by Algates</p>
      </footer>
    </>
  );
};

export default Footer;
