import "./ColorSquares.scss";
import React, { useEffect, useState } from "react";

export default function colorSquares() {
    const []
  const squares = 500;

  useEffect(() => {
    for (let i = 0; i < squares; i++) {
      const square = React.createElement("div", { className: "square" });

    }
  }, []);

  return <div>colorSquares</div>;
}

// React.createElement(
//   "button",
//   {
//     style:
//       button.key === this.state.customBtnSelected
//         ? customBtnSelected
//         : customBtnUnSelected,
//     onClick: () => {
//       this.handleCustomBtnClick(i);
//     },
//   },
//   button.label
// );
