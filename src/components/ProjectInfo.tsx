import { type LabelValuePair, type ProjectInfo } from "@/types";
import ProjectInfoItem from "./ProjectInfoItem";

export default function ProjectInfo({ details, pageColors }: ProjectInfo) {
  // TODO Get page colors instead
  const colorLight = "#ffbab8";
  const colorDark = "#ce423e";
  return (
    <section
      className="mb-16"
      style={{
        backgroundColor: `${pageColors.light.light}`,
        color: `${pageColors.light.dark}`,
      }}
    >
      <div className="container flex flex-col px-16 py-16 gap-4 sm:gap-1 rounded">
        {details.map((item: LabelValuePair) => (
          <ProjectInfoItem {...item} key={item.label} />
        ))}
      </div>
    </section>
  );
}
