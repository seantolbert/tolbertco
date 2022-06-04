import "./FlexGrid.scss";
import {useState} from 'react'

export default function FlexGrid() {

  const tiles = [];
  for (let i = 0; i < 1000; i++) {
    tiles.push(
      <div
        className="text-white hover:bg-primary hover:shadow-primaryGlow node"
      ></div>
    );
  }
  return <div className="flexgrid">{tiles}</div>;
}
