import "./FlexGrid.scss";

export default function FlexGrid() {
  const tiles = [];
  for (let i = 0; i < 1500; i++) {
    tiles.push(<div className="node  bg-primary hover:bg-transparent overflow-y-clip"></div>);
  }
  return <div className="flexgrid">{tiles}</div>;
}
