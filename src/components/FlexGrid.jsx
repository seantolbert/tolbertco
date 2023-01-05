import "./FlexGrid.scss";


export default function FlexGrid() {
  const tiles = [];
  for (let i = 0; i < 500; i++) {
    tiles.push(
      <div
        key={i}
        className="hover:bg-rose-400 rounded-sm w-10 h-10 even:animate-bounce node"
      ></div>
      // <div key={i} className={`hover:bg-secondary hover:animate-pulse animate-ping rounded-sm w-5 h-5 node`}></div>
    );
  }
  return (
    <div className="flex flex-wrap gap-1 overflow-hidden cursor-none w-full md:h-72 h-36 ">
      {tiles}
    </div>
  );
}
