import { useFetch } from "../hooks/useFetch";
import WeatherIcons from "./WeatherIcons";

export default function WeatherPanel() {
  const { data, isPending, error } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?id=4140963&appid=${process.env.REACT_APP_WEATHER_API}&units=imperial`
  );

  console.log(data);

  return (
    <div className="flex justify-center">
      <div className="shadow-smallDark m-3 p-3 mb-10 rounded-md group md:w-full lg:w-3/5">
        <div className="text-secondary font-bold pb-6">
          Washington, DC Weather
        </div>
        {isPending && <div className="text-light font-bold">Loading...</div>}
        {!isPending && data && (
          <div className="grid grid-cols-4">
            <div className="h-full">
              <WeatherIcons weather={data.weather[0].description} />
              <div className="text-white text-sm lg:text-lg font-semibold text-center">
                {data.weather[0].description.toUpperCase()}
              </div>
            </div>
            <div className="text-light flex flex-col justify-center items-center">
              <div className="font-bold text-3xl lg:text-5xl pb-8">
                {Math.round(data.main.feels_like)}&#xb0;
              </div>
              <div className="font-semibold">Feels like</div>
            </div>
            <div className="text-white flex flex-col justify-center items-center">
              <div className="font-bold text-3xl lg:text-5xl pb-8">
                {Math.round(data.main.temp)}&#xb0;
              </div>
              <div className="font-semibold">Actual</div>
            </div>
            <div className="text-white flex flex-col justify-center items-center">
              <div className="font-bold text-3xl lg:text-5xl pb-8">
                {data.main.humidity}%
              </div>
              <div className="font-semibold">Humidity</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
