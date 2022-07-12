import { useFetch } from "../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faSun,
  faDroplet,
  faWind,
  faSnowflake,
  faBoltLightning,
} from "@fortawesome/free-solid-svg-icons";

export default function WeatherPanel() {
  const { data, isPending, error } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?id=4140963&appid=${process.env.REACT_APP_WEATHER_API}&units=imperial`
  );

  console.log(data);

  return (
    <div className="shadow-smallDark m-3 p-3 rounded-md group md:w-full lg:w-1/2">
      <div className="text-secondary font-bold pb-3">
        Washington, DC Weather
      </div>
      {isPending && <div className="text-light font-bold">Loading...</div>}
      {!isPending && data && (
        <div className="grid grid-cols-4">
          <div className="h-full">
            <div className="pb-5 flex justify-center items-center">
              {data.weather[0].description === "clear sk" && (
                <FontAwesomeIcon
                  icon={faSun}
                  className="text-6xl text-yellow-300 group-hover:rotate-90 transition duration-500"
                />
              )}
              {data.weather[0].description === "few clouds" && (
                <>
                  <FontAwesomeIcon
                    icon={faCloud}
                    className="text-5xl text-stone-200 translate-x-4"
                  />
                  <FontAwesomeIcon
                    icon={faCloud}
                    className="text-5xl text-stone-300 -translate-x-10 translate-y-2 group-hover:-translate-x-12 group-hover:translate-y-1 transition duration-500"
                  />
                </>
              )}
              {data.weather[0].description === "scattered clouds" && (
                <>
                  <FontAwesomeIcon
                    icon={faCloud}
                    className="text-3xl absolute text-stone-200 translate-x-2 -translate-y-3 transition duration-500"
                  />
                  <FontAwesomeIcon
                    icon={faCloud}
                    className="text-3xl text-stone-200 group-hover:text-stone-400 transition duration-500"
                  />
                  <FontAwesomeIcon
                    icon={faCloud}
                    className="text-3xl text-stone-200 group-hover:text-stone-500 transition duration-500"
                  />
                </>
              )}
              {data.weather[0].description === "broken clouds" && (
                <>
                  <FontAwesomeIcon
                    icon={faSun}
                    className=" text-5xl text-yellow-300 -translate-x-2 group-hover:-translate-x-5 group-hover:-translate-y-3 transition duration-500"
                  />
                  <FontAwesomeIcon
                    icon={faCloud}
                    className="text-stone-200 text-5xl absolute"
                  />
                </>
              )}
              {data.weather[0].description === "shower rain" && (
                <>
                  <FontAwesomeIcon
                    icon={faCloud}
                    className="text-5xl text-stone-200"
                  />
                  <FontAwesomeIcon
                    icon={faDroplet}
                    className="absolute text-cyan-400 translate-y-2 group-hover:translate-y-5 transition duration-500"
                  />
                  <FontAwesomeIcon
                    icon={faDroplet}
                    className="absolute text-cyan-400 translate-x-4 translate-y-2 group-hover:translate-y-4 transition duration-500"
                  />
                  <FontAwesomeIcon
                    icon={faDroplet}
                    className="absolute text-cyan-400 -translate-x-4 translate-y-2 group-hover:translate-y-3 transition duration-500"
                  />
                </>
              )}
              {data.weather[0].description === "rain" && (
                <>
                  <FontAwesomeIcon
                    icon={faDroplet}
                    className="group-hover:translate-y-4 group-hover:text-3xl text-cyan-400 text-5xl transition-all duration-500 absolute"
                  />
                  <FontAwesomeIcon
                    icon={faDroplet}
                    className="group-hover:translate-x-3 group-hover:text-3xl text-cyan-400 text-5xl transition-all duration-500 absolute"
                  />
                  <FontAwesomeIcon
                    icon={faDroplet}
                    className="group-hover:-translate-x-3 group-hover:text-3xl text-cyan-400 text-5xl transition-all duration-500 absolute"
                  />
                  <FontAwesomeIcon
                    icon={faDroplet}
                    className="text-cyan-400 text-5xl transition duration-500 opacity-0"
                  />
                </>
              )}
              {data.weather[0].description === "thunderstorm" && (
                <>
                  <FontAwesomeIcon
                    icon={faCloud}
                    className="text-stone-200 text-5xl -translate-y-1 transition duration-500 group-hover:text-stone-400"
                  />
                  <FontAwesomeIcon
                    icon={faBoltLightning}
                    className="text-amber-300 text-3xl absolute translate-y-4 group-hover:translate-y-5 group-hover:animate-pulse transition duration-500"
                  />
                </>
              )}
              {data.weather[0].description === "snow" && (
                <FontAwesomeIcon
                  icon={faSnowflake}
                  className="text-light text-5xl group-hover:rotate-180 transition duration-500"
                />
              )}
              {data.weather[0].description === "mist" && (
                <>
                  <FontAwesomeIcon
                    icon={faWind}
                    className="text-cyan-200 text-5xl absolute transition-all duration-500 group-hover:text-6xl group-hover:text-cyan-300"
                  />
                  <FontAwesomeIcon
                    icon={faWind}
                    className="text-5xl opacity-0"
                  />
                </>
              )}
            </div>
            <div className="text-white font-semibold text-center">
              {data.weather[0].description.toUpperCase()}
            </div>
          </div>
          <div className="text-light flex flex-col justify-center items-center">
            <div className="font-bold text-4xl lg:text-5xl pb-8">
              {Math.round(data.main.feels_like)}&#xb0;
            </div>
            <div className="font-semibold">Feels like</div>
          </div>
          <div className="text-white flex flex-col justify-center items-center">
            <div className="font-bold text-4xl lg:text-5xl pb-8">
              {Math.round(data.main.temp)}&#xb0;
            </div>
            <div className="font-semibold">Actual</div>
          </div>
          <div className="text-white flex flex-col justify-center items-center">
            <div className="font-bold text-4xl lg:text-5xl pb-8">
              {data.main.humidity}%
            </div>
            <div className="font-semibold">Humidity</div>
          </div>
        </div>
      )}
    </div>
  );
}
