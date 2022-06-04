import "./FlexGrid.scss";
import {useState} from 'react'

export default function FlexGrid() {

  const tiles = [];
  for (let i = 0; i < 500; i++) {
    tiles.push(
      <div
        className="text-white transition duration-300 hover:bg-primary"
      ></div>
    );
  }
  return <div className="flexgrid">{tiles}</div>;
}
