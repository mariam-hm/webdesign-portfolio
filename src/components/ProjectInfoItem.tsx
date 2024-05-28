import { type LabelValuePair } from "@/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function ProjectInfoItem(element: LabelValuePair) {
  return (
    <div className="flex">
      <p className="font-calistoga">{element.label}</p>
      <span>{documentToReactComponents(element.value)}</span>
    </div>
  );
}
