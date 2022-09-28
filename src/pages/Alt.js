import AltHome from "../alt/AltHome";
import AltThemeController from "../alt/AltThemeController";
import { useEffect, useContext } from "react";
import { AppState } from "..";

export default function Alt() {
  const { theme } = useContext(AppState);

  useEffect(() => {
    if (window.matchMedia("(prefers-colorScheme: light)").matches) {
      theme.value = "light";
    } else {
      theme.value = "dark";
    }
  });

  return (
    <div className="dark:bg-dark bg-light h-screen p-2">
      <AltThemeController />
      <AltHome />
    </div>
  );
}
