import React, { useState, useRef, useEffect } from "react";

const Tabs = ({ tabs }) => {
  const [tabSelected, setTabSelected] = useState(0); // Index of the currently selected tab

  const wrapperRef = useRef(null);

  // Sample tab data

  const handleKeyDown = (e) => {
    if (e.keyCode === 39) {
      // Right Arrow
      setTabSelected((prev) => (prev < tabs.length - 1 ? prev + 1 : 0));
    }
    if (e.keyCode === 37) {
      // Left Arrow
      setTabSelected((prev) => (prev > 0 ? prev - 1 : tabs.length - 1));
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="max-w-full" aria-multiselectable="false">
      <ul
        className="flex items-center border-b border-slate-200"
        role="tablist"
        ref={wrapperRef}
      >
        {tabs.map((tab, index) => (
          <li className="flex-1" role="presentation" key={tab.id}>
            <button
              className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-600 focus:bg-emerald-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected === index
                  ? "bg-white text-white border-emerald-500 stroke-emerald-500 dark:text-black"
                  : "justify-self-center border-transparent stroke-slate-700 text-white hover:border-emerald-500 hover:text-emerald-500 focus:border-emerald-600 focus:stroke-emerald-600 focus:text-black"
              }`}
              role="tab"
              aria-selected={tabSelected === index ? "true" : "false"}
              onClick={() => setTabSelected(index)}
            >
              <span>{tab.label}</span>
            </button>
          </li>
        ))}
      </ul>

      <div>
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={`px-6 py-4 ${tabSelected === index ? "" : "hidden"}`}
            id={tab.id}
            role="tabpanel"
            aria-labelledby={tab.id}
            aria-hidden={tabSelected === index ? "false" : "true"}
            tabIndex={-1}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tabs;
