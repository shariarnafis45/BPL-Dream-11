import { Suspense, useState } from "react";
import "./App.css";
import Hero from "./components/Homepage/Hero/Hero";
import Nav from "./components/Homepage/Nav/Nav";
import PlayersCardSection from "./components/Homepage/players/PlayersCardSection";
import { LineWave } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";

// player data promise
const playersDatafetch = async () => {
  const res = await fetch("/public/playersData.json");
  return res.json();
};

function App() {
  const playersDataPromise = playersDatafetch();
  // coin state manage
  const [coin, setCoin] = useState(500000);

  return (
    <>
      <header>
        <Nav coin ={coin}></Nav>
        <Hero></Hero>
      </header>
      <main>
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen">
              <LineWave color="black"></LineWave>
            </div>
          }
        >
          <PlayersCardSection
            playersDataPromise={playersDataPromise}
            coin={coin} setCoin={setCoin}
          ></PlayersCardSection>
        </Suspense>
      </main>


      <ToastContainer />
    </>
  );
}

export default App;
