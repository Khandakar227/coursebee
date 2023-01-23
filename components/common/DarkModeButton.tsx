import { useState } from "react";

function DarkModeButton() {
  const [enable, setEnable] = useState(false);

  function toggle() {
    let state = enable;
    setEnable(!state);
    if (!state) document.body.classList.add("dark")
    else document.body.classList.remove("dark")
  }
  return (
    <button
      className="mx-3 flex justify-between items-center cursor-pointer h-6 rounded-2xl bg-slate-700"
      onClick={toggle}
    >
      <span className="my-2 ml-1"> 🌙 </span>
      <span
        className={`${
          enable ? "-translate-x-4" : "translate-x-4 "
        } transition-all w-6 h-6 rounded-full bg-white shadow border -mx-2`}
      ></span>
      <span className="my-2 mr-1"> 🌞 </span>
    </button>
  );
}

export default DarkModeButton;
