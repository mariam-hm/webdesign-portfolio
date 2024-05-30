import Link from "next/link";
import { fetchNavbar } from "@/contentful/getLayoutData";

export default async function Navbar() {
  const menu = await fetchNavbar();

  return (
    <nav>
      <div className="flex justify-between font-calistoga">
        <Link href="/">
          <div>Mariam Hammoud</div>
        </Link>

        <div className="flex gap-4">
          {menu &&
            menu.pageLinks.map((item: any) => (
              <Link href={"/" + item.link} key={item.link}>
                <span className="">{item.title}</span>
              </Link>
            ))}
        </div>
      </div>
    </nav>
  );
}
