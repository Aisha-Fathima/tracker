"use client";

import addActivity from "../actions/addActivity.js";
import { useRef, useState } from "react";

export default function Form() {
  const ref = useRef(null);
  const [tooltip, setTooltip] = useState("");

  const handleMouseEnter = (category) => {
    switch (category) {
      case "workin":
        setTooltip("This is work. You're putting your efforts toward a task that you have to do. Could be paid labor, could be yard work, any type of work.");
        break;
      case "strivin":
        setTooltip("This category is for any sort of self-improvement work. Going to the gym. Reading. Studying a new language. Meditation.");
        break;
      case "thrivin":
        setTooltip("This category is for fun. If you're at a music festival, you're thrivin'! If you're at a restaurant with your best friend, thrivin' is what you're up to.");
        break;
      default:
        setTooltip("");
    }
  };

  return (
    <form
      action={async (formData) => {
        await addActivity(formData);
        ref.current.reset();
        setTooltip(""); // Clear tooltip after submission
      }}
      className="bg-inherit p-4"
      ref={ref}
    >
      <input
        name="title"
        type="text"
        className="border border-[#EAB8E4] rounded px-3 py-2 mb-6 focus:border-[#F08080] focus:ring focus:ring-[#F08080] transition"
        placeholder="Title"
      />
      <br></br>
      <select
        name="category"
        htmlFor="category"
        className="border border-[#EAB8E4] rounded px-3 py-2 mb-6 focus:border-[#F08080] focus:ring focus:ring-[#F08080] transition"
        onMouseLeave={() => setTooltip("")} // Clear tooltip on mouse leave
      >
        <option value="" disabled defaultValue>
          Select Category
        </option>
        <option value="workin" onMouseEnter={() => handleMouseEnter("workin")}>Workin'</option>
        <option value="strivin" onMouseEnter={() => handleMouseEnter("strivin")}>Strivin'</option>
        <option value="thrivin" onMouseEnter={() => handleMouseEnter("thrivin")}>Thrivin'</option>
      </select>
      <br></br>
      <input
        name="length"
        type="number"
        className="border border-[#EAB8E4] rounded px-3 py-2 mb-6 focus:border-[#F08080] focus:ring focus:ring-[#F08080] transition"
        placeholder="1"
      />
      <br></br>
      <button
        type="submit"
        className="bg-[#A1356E] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-[#D5006D]"
      >
        Submit
      </button>
      {tooltip && (
        <div className="mt-2 text-sm text-gray-600">{tooltip}</div> // Tooltip display
      )}
    </form>
  );
}
