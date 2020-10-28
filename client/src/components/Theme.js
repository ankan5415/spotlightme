import { useState } from "react";

export default function Theme() {
  let [isDark, changeTheme] = useState(false);

  function handleClick() {
    changeTheme(!isDark);
    console.log("clicked");
  }

  return [isDark, handleClick];
}
