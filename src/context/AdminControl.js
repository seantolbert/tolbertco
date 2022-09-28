import { signal } from "@preact/signals-react";
import Values from "values.js";

function AdminControl() {
  const theme = signal(null);
  const highlight = signal("#eaae39");
  const chosen = signal("#b43a3a");
  const darkPrime = signal(new Values("#b43a3a").tint(30));
  const lightPrime = signal(new Values("#b43a3a").shade(30));
  const darkHigh = signal(new Values("#eaae39").tint(30));
  const lightHigh = signal(new Values("#eaae39").shade(30));

  const handleThemeSwitch = () => {
    theme.value = theme.value === "dark" ? "light" : "dark";
  };

  const primary =
    theme.value === "dark"
      ? `#${darkPrime.value.hex}`
      : `#${lightPrime.value.hex}`;

  const secondary =
    theme.value === "dark"
      ? `#${darkHigh.value.hex}`
      : `#${lightHigh.value.hex}`;

  return {
    theme,
    highlight,
    chosen,
    primary,
    secondary,
    darkPrime,
    lightPrime,
    darkHigh,
    lightHigh,
    handleThemeSwitch,
  };
}

export default AdminControl();
