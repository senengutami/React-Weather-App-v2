import { FcSearch } from "react-icons/fc";
import axios from "axios";

export default function Forms() {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  let city = "New York";
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <label class="relative block flex-1">
        <FcSearch className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-2" />
        <input
          className="w-full rounded shadow h-full pl-12"
          placeholder="Enter a city ..."
          type="text"
          name="search"
        />
      </label>
      <div className="flex-1 pl-5">
        <button class="rounded border px-4 py-2 mr-5 text-white bg-orange">
          Search
        </button>

        <button class="rounded border  px-4 py-2 text-white bg-orange">
          Current
        </button>
      </div>
    </div>
  );
}
