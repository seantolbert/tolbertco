// import { useEffect, useContext } from "react";
// import { AppState } from "..";
// import Values from "values.js";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function AltBarAnimation() {
//   const { chosen, xPosition , theme } =
//     useContext(AppState);
//   const lightOne =
//     theme.value === "dark"
//       ? new Values(chosen.value).shade(30)
//       : new Values(chosen.value).tint(30);
//   const lightTwo =
//     theme.value === "dark"
//       ? new Values(chosen.value).shade(40)
//       : new Values(chosen.value).tint(40);
//   const lightThree =
//     theme.value === "dark"
//       ? new Values(chosen.value).shade(50)
//       : new Values(chosen.value).tint(50);
//   const lightFour =
//     theme.value === "dark"
//       ? new Values(chosen.value).shade(60)
//       : new Values(chosen.value).tint(60);
//   const lightFive =
//     theme.value === "dark"
//       ? new Values(chosen.value).shade(70)
//       : new Values(chosen.value).tint(70);
//   const lightSix =
//     theme.value === "dark"
//       ? new Values(chosen.value).shade(80)
//       : new Values(chosen.value).tint(80);
//   const lightSeven =
//     theme.value === "dark"
//       ? new Values(chosen.value).shade(90)
//       : new Values(chosen.value).tint(90);
//   const lightEight =
//     theme.value === "dark"
//       ? new Values(chosen.value).shade(100)
//       : new Values(chosen.value).tint(100);

//   const format = xPosition.value + "%";

//   // gsap animation
//   gsap.to("#primary-bar", {
//     duration: 0.5,
//     x: format,
//     stagger: 0.15,
//     ease: "none",
//   });
//   gsap.to("#lightOne", {
//     duration: 0.6,
//     x: format,
//     stagger: 0.15,
//     ease: "none",
//   });
//   gsap.to("#lightTwo", {
//     duration: 0.7,
//     x: format,
//     stagger: 0.15,
//     ease: "none",
//   });
//   gsap.to("#lightThree", {
//     duration: 0.8,
//     x: format,
//     stagger: 0.15,
//     ease: "none",
//   });
//   gsap.to("#lightFour", {
//     duration: 0.9,
//     x: format,
//     stagger: 0.15,
//     ease: "none",
//   });
//   gsap.to("#lightFive", {
//     duration: 1,
//     x: format,
//     stagger: 0.15,
//     ease: "none",
//   });
//   gsap.to("#lightSix", {
//     duration: 1.1,
//     x: format,
//     stagger: 0.15,
//     ease: "none",
//   });
//   gsap.to("#lightSeven", {
//     duration: 1.2,
//     x: format,
//     stagger: 0.15,
//     ease: "none",
//   });
//   gsap.to("#lightEight", {
//     duration: 1.4,
//     x: format,
//     stagger: 0.15,
//     ease: "none",
//   });


// // AUTOMATE



//   const barGenerator = () => {
//     let bars = [];
//     return;
//   };

//   return (
//     <main className="flex w-screen gap-10">
//       <div className="absolute ">
//         <div className="relative ">
//           <div
//             id="lightEight"
//             style={{ background: `#${lightEight.hex}` }}
//             className="h-[6000px] w-20 absolute "
//           ></div>
//           <div
//             id="primary-bar"
//             style={{ background: chosen.value }}
//             className="h-[6000px] w-20 absolute"
//           ></div>
//           <div
//             id="lightOne"
//             style={{ background: `#${lightOne.hex}` }}
//             className="h-[6000px] w-20 absolute "
//           ></div>
//           <div
//             id="lightTwo"
//             style={{ background: `#${lightTwo.hex}` }}
//             className="h-[6000px] w-20 absolute "
//           ></div>
//           <div
//             id="lightThree"
//             style={{ background: `#${lightThree.hex}` }}
//             className="h-[6000px] w-20 absolute "
//           ></div>
//           <div
//             id="lightFour"
//             style={{ background: `#${lightFour.hex}` }}
//             className="h-[6000px] w-20 absolute "
//           ></div>
//           <div
//             id="lightFive"
//             style={{ background: `#${lightFive.hex}` }}
//             className="h-[6000px] w-20 absolute "
//           ></div>
//           <div
//             id="lightSix"
//             style={{ background: `#${lightSix.hex}` }}
//             className="h-[6000px] w-20 absolute "
//           ></div>
//           <div
//             id="lightSeven"
//             style={{ background: `#${lightSeven.hex}` }}
//             className="h-[6000px] w-20 absolute "
//           ></div>
//         </div>
//       </div>
//     </main>
//   );
// }
