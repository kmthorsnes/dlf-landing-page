import dlflogo from "./assets/dlflogo.webp";
// import pelogo from "./assets/pelogo.png";
import background from "./assets/tonsberg2.jpg";
import "./App.css";
// import { MdOutlineShoppingCart } from "react-icons/md";

function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="p-5 bg-white shadow-md border border-b-2 border-black z-50 flex justify-between">
        <a href="https://www.dlf.no/" target="_blank" rel="noopener noreferrer">
          <img src={dlflogo} alt="Logo" className="h-10" />
        </a>
      </header>
      <div
        className=" grow bg-cover  bg-center font-display"
        style={{ backgroundImage: `url(${background})` }}
      >
        <main className="md:p-20 p-5 flex items-center justify-center h-full opacity-90">
          <div className=" p-5 md:p-20 bg-white rounded shadow-lg text-center text-black">
            <h1 className="text-3xl">
              Velkommen til DLF Høstmøte torsdag 17. oktober i Tønsberg!
            </h1>
            <div className="mt-10 md:px-20 text-left">
              <p className="text-lg mt-2">
                Registrering fra kl. 09:30. Konferansedagen starter presis kl.
                10:00.
              </p>
              <h2 className="text-xl mt-4">Pris og påmelding</h2>
              <ul className="list-disc mt-2">
                <li className="list-inside">
                  Konferanseavgift kr. 6.590,- eks. mva., inkluderer fagdag og
                  middag.
                </li>
                <li className="list-inside">
                  Overnatting kr. 1.400,- eks. mva. per natt.
                </li>
                <li className="list-inside">
                  Presse betaler kun for eventuell overnatting.
                </li>
                <li className="list-inside">
                  Digital tilgang på fagdagen kr. 470,- eks. mva.
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
            <div id="checkin_registration"></div>
            balle
          </div>
        </main>
        <footer>
          Utviklet av{" "}
          <a
            href="https://www.pitchevent.no"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pitch event
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
