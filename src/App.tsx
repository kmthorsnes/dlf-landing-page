import dlflogo from "./assets/dlflogo.webp";
import pelogo from "./assets/pelogo.png";
import background from "./assets/tonsberg2.jpg";
import "./App.css";
import { MdOutlineShoppingCart } from "react-icons/md";

function App() {
  return (
    <>
      <header className="p-5 bg-white shadow-md border border-b-2 border-black sticky top-0 z-50 flex justify-between">
        <img src={pelogo} alt="Logo" className="h-10" />
        <img src={dlflogo} alt="Logo" className="h-10" />
      </header>
      <div
        className="min-h-screen bg-cover bg-center font-display"
        style={{ backgroundImage: `url(${background})` }}
      >
        <main className="md:p-20 p-5 flex items-center justify-center h-full opacity-90">
          <div className=" p-5 md:p-20 bg-white rounded shadow-lg text-center text-black">
            <h1 className="text-3xl">
              Velkommen til DLF Høstmøte torsdag 19. oktober i Tønsberg!
            </h1>
            <div className="mt-10 md:px-20 text-left">
              <p className="text-lg mt-2">
                Registrering fra kl. 09:30. Konferansedagen starter presis kl.
                10:00.
              </p>
              <h2 className="text-xl mt-4">Pris og påmelding</h2>
              <ul className="list-disc mt-2">
                <li className="list-inside">
                  Konferanseavgift kr. 6.390,- eks. mva., inkluderer fagdag og
                  middag.
                </li>
                <li className="list-inside">
                  Overnatting kr. 1.300,- eks. mva. per natt.
                </li>
                <li className="list-inside">
                  Presse betaler kun for eventuell overnatting.
                </li>
                <li className="list-inside">
                  Digital tilgang på fagdagen kr. 450,- eks. mva.
                </li>
              </ul>
              <p className="mt-4 text-l">
                Dersom du ikke har anledning til å delta på middagen, ber vi om
                å få beskjed om dette med hensyn til planleggingen.
              </p>

              <p className="text-l font-bold mt-4">
                Vi minner om at påmeldingen er bindende.
              </p>
            </div>

            <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center mt-10">
              <a
                className="flex justify-center items-center gap-1"
                href="https://your-link.com"
              >
                <MdOutlineShoppingCart className="text-white" />

                <span className="text-white">Meld deg på her</span>
              </a>
            </button>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
