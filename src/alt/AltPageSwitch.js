import { useContext } from "react";
import { AppState } from "..";
import {useSignal} from '@preact/signals-react'

export default function AltPageSwitch() {
  // const { selected } = useContext(AppState);

  let selected = useSignal('projects')



  const pages = [
    { name: "Projects", value: "projects" },
    { name: "Resources", value: "resources" },
    { name: "About", value: "about" },
    { name: "Contact", value: "contact" },
  ];
  // console.log(selected.value);

  return (
    <div className="mt-10 w-full flex justify-start md:justify-center gap-24">
      {pages.map((page) => (
        <button
          key={page.name}
          onClick={() => console.log(page.name)}
          className={`dark:text-light text-dark font-bold ${
            selected.value === page.value && "border-b-4"
          }`}
        >
          {page.name}
        </button>
      ))}
    </div>
  );
}
