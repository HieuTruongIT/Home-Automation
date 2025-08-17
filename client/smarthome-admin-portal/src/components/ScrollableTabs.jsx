import React from "react";
import { useRef } from "react";
import {
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";

import { ChevronLeft, ChevronRight } from "@mui/icons-material";

import { useActiveTab  } from "@/store";

export function ScrollableTabs({ listTab, displayKey = "name" }) {
  const { activeTab, setActiveTab } = useActiveTab(); 
  const scrollRef = useRef(null);

  const uniqueTabs = listTab.filter(
    (tab, index, self) =>
      index === self.findIndex((r) => r[displayKey] === tab[displayKey])
  );

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex items-center w-full pb-6">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 z-2 rounded-full p-1 hover:bg-black hover:text-white"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <Tabs value={activeTab} className="w-full pr-10 pl-10">
        <TabsHeader
          ref={scrollRef}
          className="flex gap-2 whitespace-nowrap overflow-x-auto scrollbar-hide px-12"
        >
          {uniqueTabs.map((tab) => (
            <Tab
              key={tab._id}
              value={tab._id}
              onClick={() => setActiveTab(tab)}
              className="min-w-[200px]"
            >
              {tab[displayKey]}
            </Tab>
          ))}
        </TabsHeader>
      </Tabs>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 z-2 rounded-full p-1 hover:bg-black hover:text-white"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}

export default ScrollableTabs;
