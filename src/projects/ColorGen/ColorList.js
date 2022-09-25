import React from "react";
import SingleColor from "./SingleColor";
import { useState } from "react";
import Values from "values.js";

export default function ColorList() {
  const [color, setColor] = useState("#f6b73c");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f6b73c").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <main
      id="color-gen"
      className="w-96 min-h-96 rounded-lg p-2 flex flex-col justify-center gap-5 group shadow-smallDark"
    >
      <p className="text-light text-4xl font-extrabold">Color Generator</p>
      <div>
        <form onSubmit={handleSubmit} className="flex justify-evenly">
          <input
            className="h-12 bg-transparent border-0"
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            className="text-primary bg-transparent rounded-md shadow-pressedMedDark focus:shadow-smallDark p-2 w-24"
            placeholder="#"
            type="text"
            onChange={(e) => setColor(e.target.value)}
            value={color}
          />
          <button
            className={`p-2 text-primary shadow-smallDark font-extrabold rounded-md`}
            type="submit"
          >
            GEN
          </button>
        </form>
        {error ? (
          <p className="text-sm font-bold text-rose-400 translate-x-10">
            Please Use Hex format{" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="text-teal-300"
              href="https://www.w3schools.com/colors/colors_hexadecimal.asp"
            >
              here
            </a>
          </p>
        ) : null}
      </div>
      <div className="flex flex-wrap justify-center gap-1">
        {list.map((color, index) => {
          console.log(color);
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </div>
    </main>
  );
}
