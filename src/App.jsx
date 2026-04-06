import "./App.css";
import Navbar from "./components/homePage/navbar/Navbar";
import Banner from "./components/homePage/banner/Banner";
import Players from "./components/homePage/players/Players";
import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";

const fetchPlayer = async () => {
  const res = await fetch("/playerData.json");
  return res.json();
};
function App() {
  const playerPromise = fetchPlayer();
  const [coins, setCoins] = useState(4550000)
  return (
    <div className="w-11/12 mx-auto">
      <Navbar coins={coins} />
      <Banner />

      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Players setCoins={setCoins} coins={coins} playerPromise={playerPromise} />
      </Suspense>
      <ToastContainer/>
    </div>
  );
}

export default App;
