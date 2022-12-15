import { useContext } from "react";
import { AppState } from "..";

export default function AltPageSwitch() {
  const { selected } = useContext(AppState);

  const pages = ["Portfolio", "Experience", "Resources", "About", "Contact"];

  return (
    <div className="mt-10 w-full text-2xl flex justify-start md:justify-center gap-24 z-[1]">
      {pages.map((page) => (
        <button
          onClick={() => {
            selected.value = page;
            // console.log(selected.value);
          }}
          key={page}
          className={`dark:text-light text-dark font-bold ${
            selected.value === page && "border-b-4"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
