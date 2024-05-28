import { type SectionTitle } from "@/types";

export default function SectionTitle({ heading }: SectionTitle) {
  return <h3 className="border-b-2 border-primary text-center">{heading}</h3>;
}
