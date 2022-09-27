

export default function Cursor() {
  return (
    <>
      <div
        id="outer"
        className="w-10 h-10 border-4 dark:border-light border-dark rounded-full"
      >
        <div
          id="inner"
          className="w-3 h-3 rounded-full dark:bg-light bg-dark"
        ></div>
      </div>
    </>
  );
}
