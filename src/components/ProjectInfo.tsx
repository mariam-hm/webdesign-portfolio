import { type LabelValuePair, type ProjectInfo } from "@/types";
import ProjectInfoItem from "./ProjectInfoItem";

export default function ProjectInfo({ details }: ProjectInfo) {
  return (
    <div className="bg-primary-light">
      {details.map((item: LabelValuePair) => (
        <ProjectInfoItem {...item} key={item.label} />
      ))}
    </div>
  );
}