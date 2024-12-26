import { type SectionTitle } from "@/types";

export default function SectionTitle({ heading, pageColors }: SectionTitle) {
  return (
    <div className="container">
      <h3
        style={{ borderColor: `${pageColors.light.main}` }}
        className="flex justify-center align-middle pb-2 border-b"
      >
        {heading}
      </h3>
    </div>
  );
}
