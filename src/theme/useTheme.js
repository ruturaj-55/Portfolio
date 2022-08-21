/*
ABOUT FILE:
This file is used for setting up theme within the browser. This file uses custom react hooks and draws the themes from
local storage.
*/

import { useEffect, useState } from "react";
import { setToLS, getFromLS } from "../utils/storage";
import _ from "lodash";

//Gets theme from browser local storage
const themes = getFromLS("Themes");
//Use theme function for using a particular theme
export const useTheme = () => {
  //Sets the theme with react hook

  const [theme, setTheme] = useState(themes.data.dark);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode) => {
    setToLS("theme", mode);
    setTheme(() => mode);
  };

  const getFonts = () => {
    const allFonts = _.values(_.mapValues(themes.data, "font"));
    return allFonts;
  };

  useEffect(() => {
    const loadTheme = () => {
      const localTheme = getFromLS("theme");
      localTheme ? setTheme(localTheme) : setTheme(() => themes.data.dark);
      setThemeLoaded(() => true);
    };
    loadTheme();
  }, []);

  return { theme, themeLoaded, setMode, getFonts };
};
