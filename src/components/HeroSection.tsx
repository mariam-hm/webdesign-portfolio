import { type HeroSection } from "@/types/index";
import HeroSectionBasic from "@/components/HeroSectionBasic";
import HeroSectionHome from "@/components/HeroSectionHome";
// TODO Make sure all imports are from types/index

export default function HeroSection(props: HeroSection) {
  switch (props.style) {
    case "home":
      return <HeroSectionHome {...props} />;
    case "basic":
    default:
      return <HeroSectionBasic {...props} />;
  }
}
