// TODO Make sure all imports are from types/index
import KOTBGridMoodboard from "./KOTBGridMoodboard";
import KOTBGridIllustrations from "./KOTBGridIllustrations";

export default function CustomImageLayout(props: any) {
  switch (props.style) {
    case "kotb-grid-mood":
      return <KOTBGridMoodboard {...props} />;
    case "kotb-grid-illu":
      return <KOTBGridIllustrations {...props} />;
    case "basic":
    default:
      return null;
  }
}
