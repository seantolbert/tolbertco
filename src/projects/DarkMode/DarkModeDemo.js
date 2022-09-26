import { useState } from "react";

export default function DarkModeDemo() {
  const [color, setColor] = useState("#e11d48");
  const [headerColor, setHeaderColor] = useState("#fff");
  const [subColor, setSubColor] = useState("#474747");
  const [bgColor, setBgColor] = useState("#474747");

  return (
    <div
      style={{ background: bgColor }}
      className="w-full shadow-smallDark p-2 rounded-md"
    >
      <div className="mb-5">
        <div
          style={{ color: headerColor }}
          className="font-extrabold text-3xl"
        >
          Color Demo
        </div>
        <div
          style={{ color: subColor }}
          className="font-extralight text-sm"
        >
          this right here is a neat lil color demo
        </div>
      </div>
      <div className="w-full flex justify-evenly">
        <div className="flex flex-col">
          <input
            name="header"
            type="color"
            value={headerColor}
            onChange={(e) => setHeaderColor(e.target.value)}
          />
          <label style={{ color: color }} htmlFor="header">
            Header Text
          </label>
        </div>
        <div className="flex flex-col">
          <input
            name="sub"
            type="color"
            value={subColor}
            onChange={(e) => setSubColor(e.target.value)}
          />
          <label style={{ color: color }} htmlFor="sub">
            Sub Text
          </label>
        </div>
        <div className="flex flex-col">
          <input
            name="text"
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <label style={{ color: color }} htmlFor="text">
            Text
          </label>
        </div>
        <div className="flex flex-col">
          <input
            name="bg"
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
          <label style={{ color: color }} htmlFor="bg">
            Background
          </label>
        </div>
      </div>
      <p style={{ color: color }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id labore
        voluptate eveniet quam magni adipisci quisquam, voluptas incidunt
        repudiandae blanditiis reiciendis alias perferendis neque! Dolorem
        veritatis magnam praesentium facilis voluptas! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Accusamus voluptas voluptatibus
        deserunt eveniet dolorum voluptatum harum suscipit natus fugit dolor
        illo ipsum molestias blanditiis sed aut sunt nulla vel veritatis earum,
        mollitia eaque ipsam maxime maiores? Sit consequatur ipsam quam pariatur
        atque vitae nihil quo, dolore repellat. Ipsam, temporibus vero.
      </p>
    </div>
  );
}
