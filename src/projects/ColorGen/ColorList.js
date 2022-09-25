import React from "react";
import SingleColor from "./SingleColor";
import {useState} from 'react'

export default function ColorList() {
    const [color, setColor] = useState('#f6b73c')

  return (
    <main
      id="color-gen"
      className="text-white w-96 min-h-96 rounded-lg p-2 flex flex-col justify-center gap-5 group shadow-smallDark"
    >
      <p className="text-light text-4xl font-extrabold">Color Generator</p>
      <div className="flex justify-evenly">
        {/* <input
          type="color"
          default="474747"
          className="h-full border-0 bg-transparent"

          value={color}
        /> */}
        <input
          placeholder="#"
          type="text"
          className="text-primary bg-transparent rounded-md shadow-pressedMedDark focus:shadow-smallDark p-2"
          onChange={(e) => setColor(e.target.value)}
          value={color}
        />
      </div>
      <SingleColor />
      <SingleColor />
      <SingleColor />
      <SingleColor />
      <SingleColor />
      <SingleColor />
      <SingleColor />
    </main>
  );
}
