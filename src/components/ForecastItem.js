import { TiWeatherPartlySunny } from "react-icons/ti";

export default function ForecastItem() {
  return (
    <>
      <div className="text-center">
        <div>Fri</div>
        <div>
          <TiWeatherPartlySunny className="text-3xl md:text-6xl py-2" />
        </div>
        <div>
          <span>
            29<sup>•</sup>
          </span>
          <span>
            45<sup>•</sup>
          </span>
        </div>
      </div>
    </>
  );
}
