import "./FlexGrid.scss";
export default function FlexGrid() {
  const tiles = [];
  for (let i = 0; i < 1000; i++) {
    tiles.push(
      <div key={i} className="hover:bg-primary hover:shadow-primaryGlow rounded-sm w-5 h-5 node"></div>
    );
  }
  return (
    <div className="flex flex-wrap gap-1 overflow-hidden cursor-none w-full h-64 bg-dark">
      {tiles}
    </div>
  );
}
