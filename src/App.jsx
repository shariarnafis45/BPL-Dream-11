import { Suspense } from "react";
import "./App.css";
import Hero from "./components/Homepage/Hero/Hero";
import Nav from "./components/Homepage/Nav/Nav";
import PlayersCardSection from "./components/Homepage/players/PlayersCardSection";
import { LineWave } from "react-loader-spinner";

// player data promise
const playersDatafetch = async () => {
  const res = await fetch("/public/playersData.json");
  return res.json();
};

function App() {
  const playersDataPromise = playersDatafetch();

  return (
    <>
      <header>
        <Nav></Nav>
        <Hero></Hero>
      </header>
      <main>
        <Suspense fallback={<LineWave color="black"></LineWave>}>
          <PlayersCardSection playersDataPromise={playersDataPromise}></PlayersCardSection>
        </Suspense>
      </main>
    </>
  );
}

export default App;
