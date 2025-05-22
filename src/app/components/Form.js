"use client";

import addActivity from "../actions/addActivity.js";
import { useRef, useState } from "react";

export default function Form() {
  const ref = useRef(null);
  const [tooltip, setTooltip] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (formData) => {
    try {
      setIsSubmitting(true);
      await addActivity(formData);
      ref.current?.reset();
      setTooltip("");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      action={handleSubmit}
      className="bg-inherit p-4"
      ref={ref}
    >
      <input
        name="title"
        type="text"
        required
        className="border border-[#EAB8E4] rounded px-3 py-2 mb-6 w-full focus:border-[#F08080] focus:ring focus:ring-[#F08080] transition"
        placeholder="Title"
      />
      
      <select
        name="category"
        required
        defaultValue=""
        className="border border-[#EAB8E4] rounded px-3 py-2 mb-6 w-full focus:border-[#F08080] focus:ring focus:ring-[#F08080] transition"
        onMouseLeave={() => setTooltip("")}
      >
        <option value="" disabled>
          Select Category
        </option>
        <option 
          value="workin" 
          onMouseEnter={() => handleMouseEnter("workin")}
        >
          Workin'
        </option>
        <option 
          value="strivin" 
          onMouseEnter={() => handleMouseEnter("strivin")}
        >
          Strivin'
        </option>
        <option 
          value="thrivin" 
          onMouseEnter={() => handleMouseEnter("thrivin")}
        >
          Thrivin'
        </option>
      </select>
      
      <input
        name="length"
        type="number"
        min="1"
        max="24"
        required
        className="border border-[#EAB8E4] rounded px-3 py-2 mb-6 w-full focus:border-[#F08080] focus:ring focus:ring-[#F08080] transition"
        placeholder="Hours (1-24)"
      />
      
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition ${
          isSubmitting 
            ? "bg-gray-400 text-gray-600 cursor-not-allowed" 
            : "bg-[#A1356E] text-white hover:bg-[#D5006D]"
        }`}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
      
      {tooltip && (
        <div className="mt-2 p-2 text-sm text-gray-600 bg-gray-50 rounded border">
          {tooltip}
        </div>
      )}
    </form>
  );
}