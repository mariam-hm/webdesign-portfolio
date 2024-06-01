import dynamic from "next/dynamic";

export const componentMap: any = {
  // TODO: Hero section will be unique per page. Maybe still have a base one as fallback?
  //heroSection: dynamic(() => import("@/components/HeroSection"))
  sectionTitle: dynamic(() => import("@/components/SectionTitle")),
  textBlock: dynamic(() => import("@/components/TextBlock")),
  projectInfo: dynamic(() => import("@/components/ProjectInfo")),
  callout: dynamic(() => import("@/components/Callout")),
  testimonial: dynamic(() => import("@/components/Testimonial")),
  image: dynamic(() => import("@/components/Image")),
  duplex: dynamic(() => import("@/components/Duplex")),
  projectCard: dynamic(() => import("@/components/ProjectCard")),

  // Add mappings for other components
};
