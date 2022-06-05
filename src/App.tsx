import React, { useMemo, useState } from "react";
import { VirtualizeList } from "./Component/VirtualizeList/VirtualizeList";
import "./App.css";

const LIST_LENGTH = 100;
const TAB_KEY = {
  virtualize: "virtualize",
};

function App() {
  const list: string[] = useMemo(() => {
    return new Array(LIST_LENGTH).fill(null).map((_, i) => `item-${i}`);
  }, []);
  const [tab, setTab] = useState(0);
  const tabs = [
    { key: TAB_KEY.virtualize, component: <VirtualizeList list={list} /> },
  ];
  return (
    <div>
      {/* Menu tab */}
      <div className="menuTab">
        {tabs.map((tab, index) => (
          <div key={tab.key} onClick={() => setTab(index)}>
            {tab.key}
          </div>
        ))}
      </div>
      {/* Component */}
      <div className="contentWindow">{tabs[tab].component}</div>
    </div>
  );
}

export default App;
