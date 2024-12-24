import { type Duplex } from "@/types";
import { componentMap } from "@/app/componentMap";

export default function Duplex({
  heading,
  componentLeft,
  componentRight,
}: Duplex) {
  const RenderComponent = ({ component }: any) => {
    const Component = componentMap[component._type];

    if (!Component) {
      return null;
    }

    return <Component {...component} />;
  };

  return (
    <section className="container">
      <h3>{heading}</h3>
      <div className="grid md:grid-cols-2">
        <RenderComponent component={componentLeft} />
        <RenderComponent component={componentRight} />
      </div>
    </section>
  );
}
