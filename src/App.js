import "./styles.css";

import Title from "./components/Title";
import Forms from "./components/Forms";
import WeatherDescriptions from "./components/WeatherDescriptions";
import Forecast from "./components/Forecast";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container w-[80%] md:w-[60%] mx-auto mt-20  p-10 flex flex-col bg-white rounded shadow-md font-fira">
      <Title />
      {/* form */}
      <Forms />
      {/* Weather Description */}
      <WeatherDescriptions />
      {/* Forecast */}
      <Forecast />
      {/* footer */}
      <Footer />
    </div>
  );
}
