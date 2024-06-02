import React from "react";

export default function Tag({ name, id, color = "#FF6F6B" }: any) {
  return (
    <div
      style={{ color: `${color}`, borderColor: `${color}` }}
      className="border border-solid py-1 px-2 rounded-full m-1"
    >
      {name}
    </div>
  );
}
