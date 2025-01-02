import { type LabelValuePair } from "@/types";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Component } from "react";

export default function ProjectInfoItem(element: LabelValuePair) {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <p className="mt-0">{children}</p>
      ),
    },
  };

  return (
    <div className="flex flex-col sm:flex-row justify-start align-center">
      <div className="font-calistoga text-lg min-w-32">{element.label}</div>
      {documentToReactComponents(element.value, options)}
    </div>
  );
}
