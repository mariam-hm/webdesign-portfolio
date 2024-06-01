import React from "react";

export default function Tag({ name, id, color = "#FF6F6B" }: any) {
  return <div style={{ color: `${color}` }}>{name}</div>;
}
