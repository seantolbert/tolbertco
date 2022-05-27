// import Grid from "@react-css/grid";
import './FlexGrid.scss'

export default function FlexGrid() {
  const tiles = [];
  for (let i = 0; i < 10000; i++) {
    tiles.push(<div className="node"></div>);
  }

  return <div className="flexgrid">{tiles}</div>
}
