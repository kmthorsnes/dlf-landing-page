import dlflogo from "./assets/dlflogo.webp";
import pelogo from "./assets/pelogo.png";
import background from "./assets/tonsberg2.jpg";
import EventRegistrationForm from "@checkin.no/event-registration-react";
import "./App.css";

function App() {
  return (
    <>
      {" "}
      <style>
        {`
        #checkin_registration h2, h4  {
          color: #006983 !important;
        }
        #checkin_registration button.plus, button.btn-success {
          background-color: #ff6900 !important;
        }
        @media screen and (max-width: 500px) {
          #checkin_registration .registration--body, .checkin_registration .registration--body {
              padding: 5px;
          }
      }

    `}
      </style>
      <div className="min-h-[1850px] flex flex-col">
        <header className="p-5 bg-white shadow-md border border-b-2 border-black z-50 flex justify-between">
          <a
            href="https://www.dlf.no/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={dlflogo} alt="Logo" className="h-10" />
          </a>
        </header>
        <div
          className="grow h-auto flex bg-cover flex-col  bg-top font-display"
          style={{ backgroundImage: `url(${background})` }}
        >
          <main className="grow md:p-20 p-5 flex justify-center ">
            <div className=" md:p-20 bg-white rounded shadow-lg text-center text-black">
              <div className="px-5 pt-5">
                <h1 className="text-3xl text-headerGreen">
                  Velkommen til DLF Høstmøte torsdag 17. oktober i Tønsberg!
                </h1>
                <div className="max-w-[700px] p-8  text-left">
                  <p className="text-lg mt-2">
                    Registrering fra kl. 09:30. Konferansedagen starter presis
                    kl. 10:00.
                  </p>
                  <h2 className="text-xl mt-4">Pris og påmelding</h2>
                  <ul className="list-disc mt-2">
                    <li className="list-inside">
                      Konferanseavgift kr. 6.590,- eks. mva., inkluderer fagdag
                      og middag.
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
                    Dersom du ikke har anledning til å delta på middagen, ber vi
                    om å få beskjed om dette med hensyn til planleggingen.
                  </p>
                  <p className="text-l  mt-4">
                    Dette arrangementet er kun åpent for DLFs medlemsbedrifter
                    og inviterte gjester
                  </p>
                  <p className="text-l font-bold mt-4">
                    Vi minner om at påmeldingen er bindende.
                  </p>
                </div>
                <EventRegistrationForm eventId={78425} />
              </div>
            </div>
          </main>

          <footer>
            <div className="justify-center flex align-middle w-full bg-white text-justify p-2 ">
              <p>
                {" "}
                Utviklet av{" "}
                <a
                  href="https://www.pitchevent.no"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={pelogo} className="h-10 ml-1 inline" />
                </a>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
