import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between nav__content">
        <Link href="/">
          <div className="nav__logo">Mariam Hammoud</div>
        </Link>

        <div className="flex gap-4">
          <Link href="/april-on">
            <span className="nav__link">APRIL On</span>
          </Link>
          <Link href="/kids-on-the-block">
            <span className="nav__link">Kids on the Block</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
