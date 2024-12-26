import { type LabelValuePair, type ProjectInfo } from "@/types";
import ProjectInfoItem from "./ProjectInfoItem";

export default function ProjectInfo({ details, pageColors }: ProjectInfo) {
  // TODO Get page colors instead
  const colorLight = "#ffbab8";
  const colorDark = "#ce423e";
  return (
    <section className="container">
      <div
        style={{
          backgroundColor: `${pageColors.light.light}`,
          color: `${pageColors.light.dark}`,
        }}
        className="flex flex-col p-8 gap-4 rounded"
      >
        {details.map((item: LabelValuePair) => (
          <ProjectInfoItem {...item} key={item.label} />
        ))}
      </div>
    </section>
  );
}
