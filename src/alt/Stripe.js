// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Stripe({ primary }) {
//   const stripeRef = useRef();

//   useEffect(() => {
//     gsap.fromTo(stripeRef, {
//       duration: 1,
//       x: -100,
//     });
//   }, []);

//   return (
//     <div
//       ref={stripeRef}
//       id="stripe"
//       className="w-20 h-10"
//       style={{ background: primary }}
//     ></div>
//   );
// }
