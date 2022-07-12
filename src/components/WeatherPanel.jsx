import { useFetch } from "../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faSun,
  faCloudSun,
  faCloudShowersWater,
  faCloudRain,
  faCloudBolt,
  faSmog,
  faSnowflake,
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
      {isPending && <div>Loading...</div>}
      {data && (
        <div className="grid grid-cols-4">
          <div>
            <div className="pb-5 flex justify-center items-center">
              {data.weather[0].description === "clear sky" && (
                <FontAwesomeIcon
                  icon={faSun}
                  className="text-6xl text-yellow-300 group-hover:rotate-90 transition duration-500"
                />
              )}
              {data.weather[0].description === "few clouds" && (
                <>
                  <FontAwesomeIcon
                    icon={faCloud}
                    className="text-6xl text-stone-200"
                  />
                  <FontAwesomeIcon
                    icon={faCloud}
                    className="text-6xl text-stone-300 -translate-x-10 translate-y-2 group-hover:-translate-x-12 group-hover:translate-y-1 transition duration-500"
                  />
                </>
              )}
              {data.weather[0].description === "scattered clouds" && (
                <>
                  <FontAwesomeIcon
                    icon={faCloud}
                    className="text-3xl absolute text-stone-200 translate-x-5 -translate-y-3 transition duration-500"
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
                <FontAwesomeIcon icon={faCloudSun} />
              )}
              {data.weather[0].description === "shower rain" && (
                <FontAwesomeIcon icon={faCloudShowersWater} />
              )}
              {data.weather[0].description === "rain" && (
                <FontAwesomeIcon icon={faCloudRain} />
              )}
              {data.weather[0].description === "thunderstorm" && (
                <FontAwesomeIcon icon={faCloudBolt} />
              )}
              {data.weather[0].description === "snow" && (
                <FontAwesomeIcon icon={faSnowflake} />
              )}
              {data.weather[0].description === "mist" && (
                <FontAwesomeIcon icon={faSmog} />
              )}
            </div>
            <div className="text-white font-semibold text-center">
              {data.weather[0].description}
            </div>
          </div>
          <div className="text-light flex flex-col justify-center items-center">
            <div className="font-bold text-5xl pb-8">{Math.round(data.main.feels_like)}&#xb0;</div>
            <div className="font-semibold">Feels like</div>
          </div>
          <div className="text-white flex flex-col justify-center items-center">
            <div className="font-bold text-5xl pb-8">{Math.round(data.main.temp)}&#xb0;</div>
            <div className="font-semibold">Actual</div>
          </div>
          <div className="text-white flex flex-col justify-center items-center">
            <div className="font-bold text-5xl pb-8">{data.main.humidity}%</div>
            <div className="font-semibold">Humidity</div>
          </div>
        </div>
      )}
    </div>
  );
}
