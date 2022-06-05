import React from "react";
import { Item } from "../Item/Item";

interface VirtualizeListProps {
  list: string[];
}

export const VirtualizeList = ({ list }: VirtualizeListProps) => {
  return (
    <ul>
      {list.map((item, index) => (
        <Item key={item} content={item} index={index} />
      ))}
    </ul>
  );
};
