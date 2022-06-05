import React from "react";
import "./Item.css";

interface ItemProps {
  content: string;
  index: number;
}

export const Item = ({ content, index }: ItemProps) => (
  <li className={`itemRow ${index % 2 === 0 ? "evenRow" : ""}`}>{content}</li>
);
