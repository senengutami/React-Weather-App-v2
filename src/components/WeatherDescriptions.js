import { TiWeatherPartlySunny } from "react-icons/ti";

export default function WeatherDescriptions() {
  return (
    <div className="flex flex-col md:flex-row mt-10 mb-24 justify-between pr-24">
      <div>
        <p className="text-5xl py-2 tracking-wide font-medium">Ambarawa</p>
        <p className="text-gray-400">
          Thursday <span className="text-orange">13:36</span>, overcast clouds
        </p>
        <p className="text-gray-400">
          Humidity: <span className="text-orange">82% </span>Wind:{" "}
          <span className="text-orange">0.64 km/h </span>
        </p>
      </div>
      <div className="flex p-5">
        <TiWeatherPartlySunny className="text-8xl" />
        <span>
          29<sup>•C</sup>
        </span>
        <span>|</span>
        <span>
          29<sup>•F</sup>
        </span>
      </div>
    </div>
  );
}
