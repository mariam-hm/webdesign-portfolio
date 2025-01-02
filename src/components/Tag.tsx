import React from "react";

export default function Tag({ name, id, color = "#FF6F6B" }: any) {
  const hexToRgba = (hex, opacity) => {
    // Remove the hash if it exists
    const trimmedHex = hex.replace("#", "");
    // Convert hex to RGB
    const bigint = parseInt(trimmedHex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  const backgroundColor = hexToRgba(color, 0.1);
  const borderColor = hexToRgba(color, 0.3);

  return (
    <span
      style={{
        color: `${color}`,
        borderColor,
        backgroundColor,
        whiteSpace: "nowrap",
      }}
      className="border border-solid px-2 rounded-full text-sm"
    >
      {name}
    </span>
  );
}
