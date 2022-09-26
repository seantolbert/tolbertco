import { useState, useEffect } from "react";

export default function SingleColor({ rgb, weight, index, hexColor }) {
  const [alert, setAlert] = useState(false);
  const bgColor = rgb.join(",");
  const hexValue = `#${hexColor}`;

  //   makes the copy to clipboard alert disappear after 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
      style={{ backgroundColor: `rgb(${bgColor})` }}
      className={` ${
        index > 20 && "text-light"
      } h-20 w-20 text-sm font-bold rounded-md p-1 cursor-pointer transition duration-300 hover:scale-95 flex flex-col justify-between `}
    >
      <div className="">
        <p>{weight}%</p>
        <p>{hexValue}</p>
      </div>
      {alert && <p>Copied</p>}
    </article>
  );
}

// alternative method for converting rgb values to hex

//   const componentToHex = (c) => {
//     let hex = c.toString(16);
//     return hex.length == 1 ? "0" + hex : hex;
//   };

//   const rgbToHex = (r, g, b) => {
//     return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
//   };

//   const hex = rgbToHex(...rgb);
