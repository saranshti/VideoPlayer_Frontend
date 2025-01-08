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
      <ul className="flex items-center" role="tablist" ref={wrapperRef}>
        {tabs.map((tab, index) => (
          <li className="flex-1" role="presentation" key={tab.id}>
            <button
              className={`inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:cursor-not-allowed ${
                tabSelected === index
                  ? "bg-white text-gray-800 shadow-sm"
                  : "text-white hover:bg-gray-200 hover:text-gray-800 focus:bg-gray-200"
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
